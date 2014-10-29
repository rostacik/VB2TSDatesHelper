/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatHMS tests");
test("testFormatHMS001", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatHMS(1);

    ok('00:00:01' === res);
});

test("testFormatHMS010", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatHMS(60);

    ok('00:01:00' === res);
});

test("testFormatHMS012", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatHMS(62);

    ok('00:01:02' === res);
});

test("testFormatHMS123", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatHMS(3723);

    ok('01:02:03' === res);
});

test("testFormatHMS000", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatHMS(0);

    ok('00:00:00' === res);
});

test("testFormatHMSnull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatHMS(null);
    }, "testFormatHMSnull was null");
});

test("testFormatHMSundefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatHMS(undefined);
    }, "testFormatHMSundefined was undefined");
});