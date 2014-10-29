/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatWeekDayName tests");
test("testFormatWeekDayNameSu", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeekDayName(new Date("December 29, 2013 20:30:40"));

    ok('So' === res);
});

test("testFormatWeekDayNameMo", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeekDayName(new Date("August 26, 2013 20:30:40"));

    ok('Mo' === res);
});

test("testFormatWeekDayNameUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatWeekDayName(undefined);
    }, "FormatWeekDayName was undefined");
});

test("testFormatWeekDayNameNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatWeekDayName(null);
    }, "FormatWeekDayName was null");
});