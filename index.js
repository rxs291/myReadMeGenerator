const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: " ?",
      name: "username",
    },
    {
      type: "input",
      message: "Where do you live?",
      name: "location",
    },
    {
      type: "input",
      message: "Tell me a little about yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "Tell me a little about yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "Tell me a little about yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "Tell me a little about yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "Tell me a little about yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "Tell me a little about yourself.",
      name: "bio",
    },
    {
      type: "input",
      message: "Tell me a little about yourself.",
      name: "bio",
    },
  ])
  .then((response) => {
    let htmlResponse = generateReadMe(response);
    fs.writeFile("README.md", htmlResponse, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );
  });

const generateReadMe = ({
  username,
  email,
  title,
  desciption,
  installation,
  usage,
  license,
  contribution,
  testInstruct,
}) =>
  `#                             ${title}
${license.image}


references to use 
// ## ![Full Page Screenshot](./assets/images/1682008205626.png)


##  Table of Contents  

1. [Description] (#desc)
2. [Installation] (#install)
3. [Usage] (#usage)
4. [License] (#license) 
5. [Contributions] (#contributions)
6. [Testing] (#testing)
7. [Questions] (#questions) 

<a name="desc"></a>
## 1. Descrption

${desciption}

<a name="install"></a>
## Insallation
${installation}

<a name="usage"></a>
## 3. Usage Information

${usage}

<a name="license"></a>
## License  

${license.info}

 
<a name="contributions"></a>
## Contributions 

${contribution}

<a name="testing"></a>
## Tests

${testInstruct}

<a name="questions"></a>
## Questions 

Feel free to browse my github profile here @ https://github.com/${username}
If you have any questions, reach me at my email here, ${email}.

`;
