/// <reference path="../VB_stuff/utils.js" />
/// <reference path="../VB_stuff/VBFormatting.js" />

module("FormatNumber tests");
test("testFormatNumber1", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber(1);

    ok('1,00' === res);
});

test("testFormatString1", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('1');

    ok('1,00' === res);
});


test("testFormatNumber1000", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber(1000);

    ok('1 000,00' === res);
});

test("testFormatString1000", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('1000');

    ok('1 000,00' === res);
});

test("testFormatNumber99900630", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber(99900630);

    ok('99 900 630,00' === res);
});

test("testFormatString99900630", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('99 900 630');

    ok('99 900 630,00' === res);
});

test("testFormatNumber1dot3", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber(1.3);

    ok('1,30' === res);
});

test("testFormatString1dot3", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('1.3');

    ok('1,30' === res);
});

test("testFormatString1comma3", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('1,3');

    ok('1,30' === res);
});


test("testFormatNumberNull", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber(null);
    }, "FormatNumber was null");
});

test("testFormatNumberUndefined", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber(undefined);
    }, "FormatNumber was undefined");
});

test("testFormatNumberUndefinedOptionalParam", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber(undefined, 4);
    }, "FormatNumber was undefined");
});

test("testFormatNumber1dot36", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber(1.3, 6);

    ok('1,300000' === res);
});

test("testFormatString1dot36", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('1.3', 6);

    ok('1,300000' === res);
});


test("testFormatString1dot36BothStrings", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('1.3', '6');

    ok('1,300000' === res);
});

test("testFormatNuberFirstStringParam", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("132199,00");

    ok("132 199,00" === res);
});

test("testFormatNuberFirstStringParamWithSecondParamNumber", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("132199,00", 2);

    ok("132 199,00" === res);
});

test("testFormatNuberFirstStringParamWithSecondParamString", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("132199,00", '2');

    ok("132 199,00" === res);
});

test("testFormatNuberFirstStringParamNoTrailingZeros", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("132199");

    ok("132 199,00" === res);
});

test("testFormatNuberFirstStringParamNoTrailingZerosWithSecondParamNumber", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("132199", 2);

    ok("132 199,00" === res);
});

test("testFormatNuberFirstStringParamNoTrailingZerosWithSecondParamString", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("132199", '2');

    ok("132 199,00" === res);
});

test("testFormatNumberStringAsFirstParam", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber('hahaha');
    }, "FormatNumber was some string");
});

test("testFormatNumberFirstZeroNumber", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber(0);

    ok("0,00" === res);
});

test("testFormatNumberFirstZeroString", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber('0');

    ok("0,00" === res);
});

test("testFormatNumberFirstEmptyString", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber('');
    }, "FormatNumber was empty string");
});

test("testFormatNumberBothEmptyString", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber('', '');
    }, "FormatNumber was empty string");
});

test("testFormatNumberCombinedObject", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber('', '');
    }, "FormatNumber was empty string");
});

test("testFormatNumberSmallDigits01", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("1,01");

    ok("1,01" === res);
});

test("testFormatNumberSmallDigits001", function () {
    var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
    var res = vbf.FormatNumber("1,001", 3);

    ok("1,001" === res);
});

test("testFormatNumberSecondObjectString", function () {
    throws(function () {
        var vbf = new VBDateTimeFormattingModule.VBFormattingHelpers();
        vbf.FormatNumber("132199", 'hahaha');
    }, "FormatNumber second object was non number string");
});