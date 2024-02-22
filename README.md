# Testcafe Reporter Issue POC

The `spec` reporter throws a JS error when using the `t.report()` function passing an empty object while there is a reporter hook setup.

To reproduce:

1. Clone this repostitory
2. Install Testcafe: `npm i`
3. Start test: `npm run test` -> WILL SHOW ERROR OUTPUT

Note: the default `test` command uses `chrome:headless` as browser. Other options are:

- `npm run test-ff` (Firefox)
- `npm run test-chromium` (Chromium)

## Output

```
~/git/testcafe-reporter-issue-poc  $ npm run test-chromium

> testcafe-reporter-issue-poc@0.1.0 test-chromium
> node src/run-tests.js chromium:headless

 Running tests in:
 - Chrome 124.0.6316.0 / Monterey 12

 Reporter issue POC
 ✓ Show JS error when attempting to run test (0s)


 1 passed (1s)
[RUN-TESTS] An error occurred:  ReporterPluginError: The "reportTestDone" method of the "spec" reporter produced an uncaught error. Error details:
TypeError: Cannot read properties of undefined (reading 'durationMs')
    at Object.onBeforeWriteHook [as onBeforeWrite] (/Users/di5ko/git/testcafe-reporter-issue-poc/.testcaferc.js:4:66)
    at ReporterPluginHost.write (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/plugin-host.ts:153:25)
    at ReporterPluginHost._renderReportData (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe-reporter-spec/lib/index.js:84:35)
    at ReporterPluginHost.reportTestDone (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe-reporter-spec/lib/index.js:71:12)
    at Reporter.dispatchToPlugin (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:205:38)
    at Reporter._shiftTestQueue (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:408:24)
    at Reporter._resolveTestItem (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:472:20)
    at Reporter._onTaskTestRunDoneHandler (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:627:24)
    at /Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:237:68
    at /Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/emittery/index.js:69:13
    at new ReporterPluginError (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/errors/runtime/index.js:173:9)
    at Reporter.dispatchToPlugin (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:208:35)
    at Reporter._shiftTestQueue (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:408:24)
    at Reporter._resolveTestItem (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:472:20)
    at Reporter._onTaskTestRunDoneHandler (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:627:24)
    at /Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:237:68
    at /Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/emittery/index.js:69:13
    at Array.map (<anonymous>)
    at MessageBus.emit (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/emittery/index.js:67:23)
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'E1058',
  data: [
    'reportTestDone',
    'spec',
    "TypeError: Cannot read properties of undefined (reading 'durationMs')\n" +
      '    at Object.onBeforeWriteHook [as onBeforeWrite] (/Users/di5ko/git/testcafe-reporter-issue-poc/.testcaferc.js:4:66)\n' +
      '    at ReporterPluginHost.write (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/plugin-host.ts:153:25)\n' +
      '    at ReporterPluginHost._renderReportData (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe-reporter-spec/lib/index.js:84:35)\n' +
      '    at ReporterPluginHost.reportTestDone (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe-reporter-spec/lib/index.js:71:12)\n' +
      '    at Reporter.dispatchToPlugin (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:205:38)\n' +
      '    at Reporter._shiftTestQueue (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:408:24)\n' +
      '    at Reporter._resolveTestItem (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:472:20)\n' +
      '    at Reporter._onTaskTestRunDoneHandler (/Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:627:24)\n' +
      '    at /Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/testcafe/src/reporter/index.ts:237:68\n' +
      '    at /Users/di5ko/git/testcafe-reporter-issue-poc/node_modules/emittery/index.js:69:13'
  ]
}
```
