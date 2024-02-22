function onBeforeWriteHook (writeInfo) {
    if (writeInfo.initiator === "reportTestDone") {
        const { name, testRunInfo, meta } = writeInfo.data || {};
        const testDurationDate            = new Date(testRunInfo.durationMs);
        let testDuration;

        if (testRunInfo.durationMs > 60000) { // Test took more than 1 minute
            testDuration = `${testDurationDate.getMinutes()}m ${testDurationDate.getSeconds()}s`
        } else {
            testDuration = `${testDurationDate.getSeconds()}s`
        }

        writeInfo.formattedText = writeInfo.formattedText + " (" + testDuration + ")";
    }
}

module.exports = { 
    assertionTimeout: 8000,
    pageLoadTimeout: 5000,
    selectorTimeout: 5000,
    hooks: {
        reporter: {
            onBeforeWrite: {
                "spec": onBeforeWriteHook, // This hook will fire when using the default reporter
            }
        }
    }
}
