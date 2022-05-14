module.exports = templateData => {
  console.log(templateData);

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible content="IE=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${templateData.name}</h1>
    <h2><a href="http://https://github.com/${templateData.github}">GitHub</a></h2>
  </body>
  </html>
  `;
};
// Notice how we had to change the template literal data to use properties 
// of templateData instead of the individual parameters? We'll revisit and 
// refactor this soon to make it look cleaner, but we don't want any errors 
// to pop up as we test the code.