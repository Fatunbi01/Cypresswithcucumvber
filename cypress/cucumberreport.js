const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'cypress/cucumber-json',  // path to your JSON files
  reportPath: 'cypress/reports',     // where you want to save the report
  openReportInBrowser: true,
  disableLog: true,
  pageTitle: 'Cucumber Test Report',
  reportName: 'Cucumber Test Report',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: 'XX'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  }
});