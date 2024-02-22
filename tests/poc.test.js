import { Selector } from "testcafe";

fixture("Reporter issue POC")
    .page("https://devexpress.github.io/testcafe/example")
    .before(async ctx => {
        ctx.testData = {};
    })
    .afterEach(async t => {
        // From: https://testcafe.io/documentation/404350/reference/test-api/testcontroller/report
        //
        // t.report Method
        // Use the t.report method to pass custom data to the reporter.
        // Specify arguments of any type (string, array, Object, etc). Separate arguments with a comma:
        // await
        //   t.report( 
        //       'text', 
        //       {'key': 'value'},
        //       ['arrayItem1', 'arrayItem2']
        //   );

        await t.report(t.fixtureCtx.testData) // report empty object {};
    })

test("Show JS error when attempting to run test", async t => {
    await t.typeText(Selector("#developer-name"), "John Smith");
});
