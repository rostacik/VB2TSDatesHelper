/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatShortDuration tests");
test("testFormatShortDuration0", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDuration(0);

    ok('00:00' === res);
});

test("testFormatShortDuration0102", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDuration(3723);

    ok('01:02' === res);
});

test("testFormatShortDuration00", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDuration(1);

    ok('00:00' === res);
});

test("testFormatShortDuration01", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDuration(60);

    ok('00:01' === res);
});

test("testFormatShortDuration012", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDuration(62);

    ok('00:01' === res);
});

test("testFormatShortDuration159", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatShortDuration(119);

    ok('00:01' === res);
});

test("testFormatShortDurationundefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortDuration(undefined);
    }, "FormatShortDuration was undefined");
});

test("testFormatShortDurationnull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatShortDuration(null);
    }, "FormatShortDuration was null");
});