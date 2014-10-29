/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatLongWeekDayName tests");
test("testFormatWeekDayNameSunday", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongWeekDayName(new Date("December 29, 2013 20:30:40"));

    ok('Sonntag' === res);
});

test("testFormatWeekDayNameMonday", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40"));

    ok('Montag' === res);
});

test("testFormatWeekDayNameMondaynull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatLongWeekDayName(null);
    }, "FormatLongWeekDayName was null");
});

test("testFormatWeekDayNameMondayundefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatLongWeekDayName(undefined);
    }, "FormatLongWeekDayName was undefined");
});