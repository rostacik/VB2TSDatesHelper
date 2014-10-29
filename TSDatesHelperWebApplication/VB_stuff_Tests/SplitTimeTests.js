/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("SplitTime tests");
test("testSplitTime", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.SplitTime(new Date(2013, 1, 1, 12, 15, 50));

    ok(12 === res.hours);
    ok(15 === res.minutes);
    ok(50 === res.seconds);
});

test("testSplitTimeNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.SplitTime(null);
    }, "SplitTime was null");
});

test("testSplitTimeUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.SplitTime(undefined);
    }, "SplitTime was undefined");
});