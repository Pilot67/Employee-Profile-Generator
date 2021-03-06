function htmlHeader(companyName) {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Cards</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
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

function htmlManager(name,id,email, officeNumber){
    return `
                <div class = "cardBody">
                    <div class = "cardContainer">
                        <div class = "cardHeading text-center">
                            <h3>${name}</h3>
                            <h4 class= "headingText"><span class = "fas fa-user-tie"></span>  Manager</h4>
                        </div>
                        <div class = "cardMiddle">
                            ID: ${id}<br>
                            Email: <span><a href="mailto:${email}">${email}</a></span><br>
                            Office Phone: ${officeNumber}
                        </div>
                    </div>
                </div>`
}
function htmlEngineer(name,id,email,github){
    return `
                <div class = "cardBody">
                    <div class = "cardContainer">
                        <div class = "cardHeading text-center">
                            <h3>${name}</h3>
                            <h4 class= "headingText"><span class = "fas fa-glasses"></span>  Engineer</h4>
                        </div>
                        <div class = "cardMiddle">
                            ID: ${id}<br>
                            Email: <span><a href="mailto:${email}">${email}</a></span><br>
                            Github: <span><a href="https://github.com/${github}" target="_blank" rel="noopener">${github}</a></span>
                        </div>
                    </div>
                </div>`
}
function htmlIntern(name,id,email,school){
    return `
                <div class = "cardBody">
                    <div class = "cardContainer">
                        <div class = "cardHeading text-center">
                            <h3>${name}</h3>
                            <h4 class= "headingText"><span class = "fas fa-school"></span>  Intern</h4>
                        </div>
                        <div class = "cardMiddle">
                            ID: ${id}<br>
                            Email: <span><a href="mailto:${email}">${email}</a></span><br>
                            School: ${school}
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
    