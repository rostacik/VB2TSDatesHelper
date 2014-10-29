/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatLongDate tests");
test("testFormatLongDate1january2013", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongDate(new Date(2013, 0, 1));

    ok('1. Januar 2013' === res);
});

test("testFormatLongDate13february1975", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongDate(new Date("February 13, 1975 11:13:00"));

    ok('13. Februar 1975' === res);
});

test("testSplitTimeNulltestFormatLongDateNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatLongDate(null);
    }, "FormatLongDate was null");
});

test("testFormatLongDateUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatLongDate(undefined);
    }, "FormatLongDate was undefined");
});