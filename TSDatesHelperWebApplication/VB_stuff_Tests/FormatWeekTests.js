/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatWeek tests");
test("testFormatWeekFeb", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("February 13, 1975 20:30:40"));

    ok(7 === res);
});

test("testFormatWeekJan11975", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("January 1, 1975 20:30:40"));

    ok(1 === res);
});

test("testFormatWeekAugust23", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("August 23, 2013 20:30:40"));

    ok(34 === res);
});

test("testFormatWeekDecember22", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("December 22, 2013 20:30:40"));

    ok(51 === res);
});

test("testFormatWeekDecember27", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("December 27, 2013 20:30:40"));

    ok(52 === res);
});

test("testFormatWeekDecember31", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("December 31, 2013 20:30:40"));

    ok(1 === res);
});

test("testFormatWeekDecember30", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("December 30, 2013 20:30:40"));

    ok(1 === res);
});

test("testFormatWeekDecemberJan", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("January 1, 2014 20:30:40"));

    ok(1 === res);
});

test("testFormatWeekDecember28", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("December 28, 2013 20:30:40"));

    ok(52 === res);
});

test("testFormatWeekDecember29", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatWeek(new Date("December 29, 2013 20:30:40"));

    ok(52 === res);
});

test("testFormatWeekUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatWeek(undefined);
    }, "FormatWeek was undefined");
});

test("testFormatWeekNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatWeek(null);
    }, "FormatWeek was null");
});