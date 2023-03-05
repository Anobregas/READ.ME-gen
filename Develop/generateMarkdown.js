//const fs = require('fs');
//const inquirer = require('inquirer');
//const path = require('path');
//const index = require('./index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//let MIT = questions.choices[0]
//let GPLv3 = questions.choices[1]
//let AGPL = questions.choices[2]

function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `![MIT License](https://img.shields.io/badge/License-MIT-green.svg)`
  }else if(license === "GPLv3"){
    return `![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)`
  }else if(license === "AGPL"){
    return `![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)`
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return `(https://choosealicense.com/licenses/mit/)`
  }else if(license === "GPLv3"){
    return `(https://opensource.org/licenses/)`
  }else if(license === "AGPL"){
    return `(http://www.gnu.org/licenses/agpl-3.0)`
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT"){
    return `## License

    This project is licensed under the MIT license.`
  }else if(license === "GPLv3"){
    return `## License

    This project is licensed under the GPLv3 license.`
  }else if(license === "AGPL"){
    return `## License

    This project is licensed under the AGPL license.`
  }else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description

  ${data.description}

  ## Tabel of contents
  - [Authors](#Authors)
  - [Deployment](#Deployment)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [license](#license)

  ## Authors

  ${data.authors}

  ## Deployment

  ${data.deployment}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.title} was designed to ${data.Usage}

  ## Contributing

  Contributions are always welcome!

  please reach out to ${data.email} to find out how! Check out more of my work at [${data.github}](https://github.com/${data.github}/).

  ## Running Tests

  To run tests, run the following command

  """bash
    npm run test
  """
 ${renderLicenseSection(data.license)}
 ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}


`;
}

module.exports = generateMarkdown;
