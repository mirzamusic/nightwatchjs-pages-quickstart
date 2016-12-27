/* In nightwatch/globals.js */
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
	reportsDirectory: __dirname + '/reports',
  themeName: 'compact'
});
module.exports = {
  waitForConditionTimeout: 50000,
	reporter: reporter.fn
};
