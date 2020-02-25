const Usage =(info)=>{
  if(info !== 'None'){
    return `This project is licensed under ${info} license.`
  }
  return ""
}

function generateMarkdown(data) {
  return `
# ${data.title}

![User Badge](https://img.shields.io/badge/license-${encodeURI(data.license)}-blue)

## Description

${data.description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

*[License](#License)

## Installation

\`\`\`
${data.install}
\`\`\`

## Usage
${data.repo}
${Usage(data.license)}

## Questions

<img src="${data.avatar_url}" style='border-radius: 20px' width='40' />

If you have any questions about the repo, open an issue or contact [${data.username}](${data.url}) directly at ${data.contactemail}.

`;
}

module.exports = generateMarkdown;
