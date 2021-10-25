function htmlHeader(companyName) {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Cards</title>
        <link rel="stylesheet" href="reset.css">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c25c0dff74.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h1 class = "text-center">${companyName}</h1>
            <h3 class = "text-center">Employee Contact Cards</h3>
        </header>
    
        <main>
            <section class = "container">`;
}

function htmlManager(name,id,officeNumber){
    return `
                <div class = "cardBody">
                    <div class = "cardContainer">
                        <div class = "cardHeading text-center">
                            <h3>${name}</h3>
                            <h3 class= "headingText"><span class = "fas fa-user-tie"></span>  Manager</h3>
                        </div>
                        <div class = "cardMiddle">
                            ID: ${id}<br>
                            Office Phone: ${officeNumber}
                        </div>
                        <div class = "cardFooter">
                            <h3>Foot Notes</h3>
                        </div>
                    </div>
                </div>`
}
function htmlEngineer(name,id,github){
    return `
                <div class = "cardBody">
                    <div class = "cardContainer">
                        <div class = "cardHeading text-center">
                            <h3>${name}</h3>
                            <h3 class= "headingText"><span class = "fas fa-glasses"></span>  Engineer</h3>
                        </div>
                        <div class = "cardMiddle">
                            ID: ${id}<br>
                            Github: ${github}
                        </div>
                        <div class = "cardFooter">
                            <h3>Foot Notes</h3>
                        </div>
                    </div>
                </div>`
}
function htmlIntern(name,id,school){
    return `
                <div class = "cardBody">
                    <div class = "cardContainer">
                        <div class = "cardHeading text-center">
                            <h3>${name}</h3>
                            <h3 class= "headingText"><span class = "fas fa-school"></span>  Intern</h3>
                        </div>
                        <div class = "cardMiddle">
                            ID: ${id}<br>
                            School: ${school}
                        </div>
                        <div class = "cardFooter">
                            <h3>Foot Notes</h3>
                        </div>
                    </div>
                </div>`
}
function htmlFooter(){
    return `        
            </section>
        </main>
    </body>
</html>
    `
}


module.exports = {
    htmlHeader,
    htmlManager,
    htmlEngineer,
    htmlIntern,
    htmlFooter,
}
    