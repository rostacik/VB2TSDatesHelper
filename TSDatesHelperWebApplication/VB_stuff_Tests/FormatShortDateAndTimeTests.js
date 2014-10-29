/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatShortDateAndTime tests");
test("testFormatDateAndTime1321975111319", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDateAndTime(new Date("February 13, 1975 11:13:19"));

    ok('13. 2. 1975 11:13:19', res);
});

test("testFormatDateAndTime1321975010100", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDateAndTime(new Date("February 13, 1975 01:01:00"));

    ok('13. 2. 1975 01:01:00' === res);
});

test("testFormatDateAndTime1321975000000", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDateAndTime(new Date("February 13, 1975"));

    ok('13. 2. 1975' === res);
});

test("testFormatShortDateAndTimeUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortDateAndTime(undefined);
    }, "FormatShortDateAndTime was undefined");
});

test("testFormatShortDateAndTimeNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortDateAndTime(null);
    }, "FormatShortDateAndTime was null");
});