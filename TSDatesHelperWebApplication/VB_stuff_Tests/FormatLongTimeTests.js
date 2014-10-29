/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatLongDate tests");
test("testFormatTime111319", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongTime(new Date("February 13, 1975 11:13:19"));

    ok('11:13:19' === res);
});

test("testFormatTime111300", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongTime(new Date("February 13, 1975 11:13:00"));

    ok('11:13:00' === res);
});

test("testFormatTime000000", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongTime(new Date("February 13, 1975 00:00:00"));

    ok('00:00:00' === res);
});

test("testFormatTime010203", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongTime(new Date("February 13, 1975 01:02:03"));

    ok('01:02:03' === res);
});

test("testFormatTimeNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatLongTime(null);
    }, "FormatLongDate was null");
});

test("testFormatTimeUndefined", function() {
    throws(function() {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatLongTime(undefined);
    }, "FormatLongDate was undefined");
});