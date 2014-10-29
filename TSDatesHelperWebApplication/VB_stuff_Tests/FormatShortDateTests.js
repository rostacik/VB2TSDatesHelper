/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatShortDate tests");
test("testFormatDate1321975", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDate(new Date("February 13, 1975 11:13:00"));

    ok('13. 2. 1975' === res);
});

test("testFormatShortDateUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortDate(undefined);
    }, "FormatShortDate was undefined");
});

test("testFormatShortDateNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortDate(null);
    }, "FormatShortDate was null");
});