/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("VBWeekday tests");
test("testVBWeekday2", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.VBWeekday(new Date("August 26, 2013 20:30:40"));

    ok(2 === res);
});

test("testVBWeekday7", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.VBWeekday(new Date("August 24, 2013 20:30:40"));

    ok(7 === res);
});

test("testVBWeekday1", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.VBWeekday(new Date("August 25, 2013 20:30:40"));

    ok(1 === res);
});

test("testVBWeekdayNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.VBWeekday(null);
    }, "testVBWeekdayNull was null");
});

test("testVBWeekdayundefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.VBWeekday(undefined);
    }, "testVBWeekdayNull was undefined");
});
