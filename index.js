const inquirer = require("inquirer");
const fs = require("fs"); 


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What would you like your title of your ReadMe to be?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Could you please give a quick description on how your application works?",
      name: "description",
    },
    {
      type: "input",
      message: "Are there any installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "Have any 'Usage' information you would like to add?",
      name: "usage",
    },
    {
      type: "list",
      message: "What license applies here?",
      name: "license",
      choices: [
        {
          name: "BSD 2-Clause License",
          value:{
            name: "BSD 2-Clause License",
            badge:"[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
          }
 
        },
        {
          name: "BSD 3-Clause License",
          value: {
            name: "BSD 3-Clause License",
            badge:"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
          }
        },
        {
          name: "Boost Software License 1.0",
          value:{
            name: "Boost Software License 1.0",
           badge:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
          }
        },
        {
          name: "Apache 2.0 License",
          value:
          {
            name: "Apache 2.0 License",
            badge:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          }
        },
      ],
    },
    {
      type: "input",
      message: "Any contribution guidelines?",
      name: "contribution",
    },
    {
      type: "input",
      message: "Lastly, any testing instructions?",
      name: "testInstruct",
    },
  ])
  .then((response) => {
    let readMeResponse = generateReadMe(response);
    fs.writeFile("README.md", readMeResponse, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    ); 

//     references to use 
// // ## ![Full Page Screenshot](./assets/images/1682008205626.png)
  });

const generateReadMe = ({
  username,
  email,
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  testInstruct,
}) =>
  `#                             ${title}
${license.badge}


 


##  Table of Contents  

1. [Description](#desc)
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#license) 
5. [Contributions](#contributions)
6. [Testing](#testing)
7. [Questions](#questions) 

<a name="desc"></a>
## 1. Descrption

${description} 

<a name="install"></a>
## Insallation
${installation}

<a name="usage"></a>
## 3. Usage Information

${usage}

<a name="license"></a>
## License  

${license.name}

 
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
