const path = require('path');
const reporter = require('cucumber-html-reporter');
const yargs = require('yargs').argv;

const reportOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, '../reports/report.json'),
    output: path.join(__dirname, '../reports/cucumber-report.html'),
    reportSuitsAsScenarios: true
};

exports.config = {
    allScriptsTimeout: 60000,
    getPagetimeout: 60000,
    specs: [path.resolve('./test/features/**/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--window-size=1366,768']
        },
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/step_definitions/**/*.js')],
        // ignoreUncaughtExceptions: true,
        format: ['json:./test/reports/report.json', './node_modules/@cucumber/pretty-formatter'],
        tags: yargs.tags || '@smoke',
    },
    onPrepare: () => {
        return browser.waitForAngularEnabled(false);
    },
    afterLaunch: () => {
        return reporter.generate(reportOptions)
    }
};