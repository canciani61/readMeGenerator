function renderLicenseBadge(license) {
    const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
      'GPL 3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'BSD 3-Clause': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
    };
    return badges[license] || '';
  }
  
  function renderLicenseSection(license) {
    return license && license !== 'None' 
      ? `## License\nThis project is licensed under the [${license}](https://opensource.org/licenses/${license.replace(' ', '-')}) license.\n`
      : '';
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.license && data.license !== 'None' ? '- [License](#license)' : ''}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For questions, contact me at **${data.email}** or visit [GitHub/${data.github}](https://github.com/${data.github}).
  `;
  }
  
  export default generateMarkdown;
  