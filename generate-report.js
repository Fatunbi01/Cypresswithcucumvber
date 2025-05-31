const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: 'cypress/reports',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  durationInMS: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Your Project Name' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() }
    ]
  }
});

console.log('HTML report generated in cypress/reports folder');