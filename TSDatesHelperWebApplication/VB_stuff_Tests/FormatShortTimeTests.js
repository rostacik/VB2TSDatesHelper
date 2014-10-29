/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatShortTime tests");
test("testFormatShortTime", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortTime(new Date("February 13, 1975 20:30:40"));

    ok('20:30' === res);
});

test("testFormatShortTime0000", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortTime(new Date("February 13, 1975 00:00:00"));

    ok('00:00' === res);
});

test("testFormatShortTime0201", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortTime(new Date("February 13, 1975 02:01:00"));

    ok('02:01' === res);
});

test("testFormatShortTimeNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortTime(null);
    }, "FormatShortTime was null");
});

test("testFormatShortTimeUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortTime(undefined);
    }, "FormatShortTime was undefined");
});