/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("ScanNumber tests");
test("testSplitDate111913", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.SplitDate(new Date(13, 1, 1));

    ok(1, res.date);
    ok(1, res.month);
    ok(1913, res.year);
});

test("testSplitDate111913", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.SplitDate(new Date(2013, 1, 1));

    ok(1, res.date);
    ok(1, res.month);
    ok(2013, res.year);
});

test("testSplitDateNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        var res = vbf.SplitDate(null);

    }, "split date was null");
});

test("testSplitDateUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        var res = vbf.SplitDate(undefined);

    }, "split date was undefined");
});