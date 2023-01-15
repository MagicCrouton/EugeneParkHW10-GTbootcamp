const fs = require('fs');
const htmlArrangment = [];

// note: i would use express for this portion but i wanted to see how to build a site without express
// this function just takes a prebuild html site turns the header card elements and footer elements into an array which then is joined via a.join('') and saved to file according to the manager name

function buildSite(team){
    team.forEach((element, index) => {
    if (element.getRole() === 'Manager') {
       let uniqueOut = element.officeNumber;
    }
    else if (element.getRole()==='Engineer') {
        let uniqueOut = element.github;
    }
    else {
        let uniqueOut = element.school;
    }
    htmlArrangment[index] =
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.getRole()}</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">${element.email}</a>
            <a href="#" class="card-link">${uniqueOut}</a>
        </div>
        </div>`
    });
    htmlArrangment.unshift(`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team O Matic 5000</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
      </head>
      <body>`)
    htmlArrangment.push(
        `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
        <script src="./index.js"></script>
    </body>
    </html>`)
    let payload = htmlArrangment.join('');
    console.log(payload);
    fs.writeFile(`./dist/teamManagedby${team[0].name}.html`, payload, err => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(`file teamManagedby${team[0].name}}.html written successfully`)
        }
    });

}
// C:\Users\eugen\gt-bootcamp\homework\EugeneParkHW10-GTbootcamp\dist
module.exports = {
    buildSite
}