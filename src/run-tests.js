const testsPath = [
    "./tests/"
];

const BROWSER_OPTIONS = (process.argv.length === 3) ? process.argv[2] : "chrome:headless";

const createTestCafe = require("testcafe");

const runTests = async (testPath) => {
    const testcafe = await createTestCafe("localhost");
    const runner = testcafe.createRunner();
    const failedCount = await runner
        .src(testPath)
        .browsers(BROWSER_OPTIONS)
        .screenshots({
            takeOnFails: true,
        })
        .run();

    if (failedCount > 0) {
        console.log("[RUN-TESTS] " + failedCount + " test(s) failed - exiting.");
        process.exit(1);
    }
};

const runAllTests = async () => {
    await runTests(testsPath);
};

runAllTests()
    .then(() => console.log("[RUN-TESTS] All tests done!"))
    .catch(err => console.error("[RUN-TESTS] An error occurred: ", err))
    .finally(() => process.exit(0));
