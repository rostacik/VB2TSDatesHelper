/// <reference path="../VB_stuff/utils.js" />

module("ScanNumber tests");
test("testScanNumberZero", function () {
    ok(0 === utilsModule.ScanNumber(0));
});

test("testScanNumberZeroFromString", function () {
    ok(0 === utilsModule.ScanNumber(' 0 '));
});

test("testScanNumberZeroFromString2", function () {
    ok(0 === utilsModule.ScanNumber(' 00000000 '));
});

test("testScanNumberZeroFraction", function () {
    ok(0.123 === utilsModule.ScanNumber(0.123));
});

test("testScanNumberLongFraction", function () {
    ok(0.1111111111111111 === utilsModule.ScanNumber(0.11111111111111111111111111111111111));
});

test("testScanNumberUndefined", function () {
    throws(function () {
        utilsModule.ScanNumber(undefined);
    }, "scan number was undefined");
});

test("testScanNumberNull", function () {
    throws(function () {
        utilsModule.ScanNumber(null);
    }, "scan number was null");
});

test("testScanNumberChars", function () {
    throws(function () {
        utilsModule.ScanNumber('abcd');
    }, "scan number was string");
});

test("testScanNumberCharsWithNumbers", function () {
    throws(function () {
        utilsModule.ScanNumber(' 0 a 0 9');
    }, "scan number was string and some numbers");
});

test("testScanNumberCharsWithTrue", function () {
    ok(1 === utilsModule.ScanNumber(true));
});

test("testScanNumberCharsWithFalse", function () {
    ok(0 === utilsModule.ScanNumber(false));
});

test("testScanNumberCharsWithObject", function () {
    throws(function () {
        utilsModule.ScanNumber({});
    }, "scan number was object");
});

test("testScanNumberCharsWithObjectWithProps", function () {
    throws(function () {
        utilsModule.ScanNumber({ a: '12', b: 98 });
    }, "scan number was object");
});

test("testScanNumberCharsWithArray", function () {
    throws(function () {
        utilsModule.ScanNumber([]);
    }, "scan number was array");
});

test("testScanNumberCharsWithArrayWithObjs", function () {
    throws(function () {
        utilsModule.ScanNumber([1, 2, {}]);
    }, "scan number was array");
});

test("testScanNumberFromNegative", function () {
    ok(-12345.12345 === utilsModule.ScanNumber(-12345.12345));
});

test("testScanNumberLongPositive", function () {
    ok(234.45678466667783 === utilsModule.ScanNumber(234.45678466667784459874213654987));
});

test("testScanNumberLongPositiveFromString", function () {
    ok(234.45678466667783 === utilsModule.ScanNumber('234.45678466667784459874213654987'));
});

test("testScanNumber2Digits", function () {
    ok(1.01 === utilsModule.ScanNumber('1,01'));
});

test("testScanNumber3Digits", function () {
    ok(1.001 === utilsModule.ScanNumber('1,001'));
});