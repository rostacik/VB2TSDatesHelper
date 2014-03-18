var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var VBFormattingTestModule;
(function (VBFormattingTestModule) {
    var VBFormattingTests = (function (_super) {
        __extends(VBFormattingTests, _super);
        function VBFormattingTests() {
            _super.apply(this, arguments);
            this.target = new VBDateTimeFormattingModule.VBFormattingHelpers();
        }
        VBFormattingTests.prototype.testSplitDate111913 = function () {
            var res = this.target.SplitDate(new Date(13, 1, 1));

            this.areIdentical(1, res.date);
            this.areIdentical(1, res.month);
            this.areIdentical(1913, res.year);
        };

        VBFormattingTests.prototype.testSplitDate112013 = function () {
            var res = this.target.SplitDate(new Date(2013, 1, 1));

            this.areIdentical(1, res.date);
            this.areIdentical(1, res.month);
            this.areIdentical(2013, res.year);
        };

        VBFormattingTests.prototype.testSplitDateNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.SplitDate(null);
            });
        };

        VBFormattingTests.prototype.testSplitDateUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.SplitDate(undefined);
            });
        };

        VBFormattingTests.prototype.testSplitTime = function () {
            var res = this.target.SplitTime(new Date(2013, 1, 1, 12, 15, 50));

            this.areIdentical(12, res.hours);
            this.areIdentical(15, res.minutes);
            this.areIdentical(50, res.seconds);
        };

        VBFormattingTests.prototype.testSplitTimeNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.SplitTime(null);
            });
        };

        VBFormattingTests.prototype.testSplitTimeUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.SplitTime(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatLongDate1january2013 = function () {
            var res = this.target.FormatLongDate(new Date(2013, 0, 1));

            this.areIdentical('1. Januar 2013', res);
        };

        VBFormattingTests.prototype.testFormatLongDate13february1975 = function () {
            var res = this.target.FormatLongDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. Februar 1975', res);
        };

        VBFormattingTests.prototype.testFormatLongDateNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatLongDate(null);
            });
        };

        VBFormattingTests.prototype.testFormatLongDateUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatLongDate(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatDate1321975 = function () {
            var res = this.target.FormatShortDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. 2. 1975', res);
        };

        VBFormattingTests.prototype.testFormatShortDateUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortDate(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatShortDateNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortDate(null);
            });
        };

        VBFormattingTests.prototype.testFormatDateAndTime1321975111319 = function () {
            var res = this.target.FormatShortDateAndTime(new Date("February 13, 1975 11:13:19"));

            this.areIdentical('13. 2. 1975 11:13:19', res);
        };

        VBFormattingTests.prototype.testFormatDateAndTime1321975010100 = function () {
            var res = this.target.FormatShortDateAndTime(new Date("February 13, 1975 01:01:00"));

            this.areIdentical('13. 2. 1975 01:01:00', res);
        };

        VBFormattingTests.prototype.testFormatDateAndTime1321975000000 = function () {
            var res = this.target.FormatShortDateAndTime(new Date("February 13, 1975"));

            this.areIdentical('13. 2. 1975', res);
        };

        VBFormattingTests.prototype.testFormatShortDateAndTimeUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortDateAndTime(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatShortDateAndTimeNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortDateAndTime(null);
            });
        };

        VBFormattingTests.prototype.testFormatTime111319 = function () {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:19"));

            this.areIdentical('11:13:19', res);
        };

        VBFormattingTests.prototype.testFormatTime111300 = function () {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('11:13:00', res);
        };

        VBFormattingTests.prototype.testFormatTime000000 = function () {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 00:00:00"));

            this.areIdentical('00:00:00', res);
        };

        VBFormattingTests.prototype.testFormatTime010203 = function () {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 01:02:03"));

            this.areIdentical('01:02:03', res);
        };

        VBFormattingTests.prototype.testFormatTimeNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatLongTime(null);
            });
        };

        VBFormattingTests.prototype.testFormatTimeUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatLongTime(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatShortTime = function () {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 20:30:40"));

            this.areIdentical('20:30', res);
        };

        VBFormattingTests.prototype.testFormatShortTime0000 = function () {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 00:00:00"));

            this.areIdentical('00:00', res);
        };

        VBFormattingTests.prototype.testFormatShortTime0201 = function () {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 02:01:00"));

            this.areIdentical('02:01', res);
        };

        VBFormattingTests.prototype.testFormatShortTimeNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortTime(null);
            });
        };

        VBFormattingTests.prototype.testFormatShortTimeUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortTime(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatWeekFeb = function () {
            this.areIdentical(7, this.target.FormatWeek(new Date("February 13, 1975 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekJan11975 = function () {
            this.areIdentical(1, this.target.FormatWeek(new Date("January 1, 1975 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekAugust23 = function () {
            this.areIdentical(34, this.target.FormatWeek(new Date("August 23, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDecember22 = function () {
            this.areIdentical(51, this.target.FormatWeek(new Date("December 22, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDecember27 = function () {
            this.areIdentical(52, this.target.FormatWeek(new Date("December 27, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDecember31 = function () {
            this.areIdentical(1, this.target.FormatWeek(new Date("December 31, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDecember30 = function () {
            this.areIdentical(1, this.target.FormatWeek(new Date("December 30, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDecemberJan = function () {
            this.areIdentical(1, this.target.FormatWeek(new Date("January 1, 2014 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDecember28 = function () {
            this.areIdentical(52, this.target.FormatWeek(new Date("December 28, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDecember29 = function () {
            this.areIdentical(52, this.target.FormatWeek(new Date("December 29, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatWeek(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatWeekNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatWeek(null);
            });
        };

        VBFormattingTests.prototype.testFormatWeekDayNameSu = function () {
            this.areIdentical('So', this.target.FormatWeekDayName(new Date("December 29, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDayNameMo = function () {
            this.areIdentical('Mo', this.target.FormatWeekDayName(new Date("August 26, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDayNameUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatWeekDayName(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatWeekDayNameNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatWeekDayName(null);
            });
        };

        VBFormattingTests.prototype.testFormatWeekDayNameSunday = function () {
            this.areIdentical('Sonntag', this.target.FormatLongWeekDayName(new Date("December 29, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDayNameMonday = function () {
            this.areIdentical('Montag', this.target.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testFormatWeekDayNameMondaynull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatLongWeekDayName(null);
            });
        };

        VBFormattingTests.prototype.testFormatWeekDayNameMondayundefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatLongWeekDayName(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatHMS001 = function () {
            this.areIdentical('00:00:01', this.target.FormatHMS(1));
        };

        VBFormattingTests.prototype.testFormatHMS010 = function () {
            this.areIdentical('00:01:00', this.target.FormatHMS(60));
        };

        VBFormattingTests.prototype.testFormatHMS012 = function () {
            this.areIdentical('00:01:02', this.target.FormatHMS(62));
        };

        VBFormattingTests.prototype.testFormatHMS123 = function () {
            this.areIdentical('01:02:03', this.target.FormatHMS(3723));
        };

        VBFormattingTests.prototype.testFormatHMS000 = function () {
            this.areIdentical('00:00:00', this.target.FormatHMS(0));
        };

        VBFormattingTests.prototype.testFormatHMSnull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatHMS(null);
            });
        };

        VBFormattingTests.prototype.testFormatHMSundefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatHMS(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatShortDuration0 = function () {
            this.areIdentical('00:00', this.target.FormatShortDuration(0));
        };

        VBFormattingTests.prototype.testFormatShortDuration0102 = function () {
            this.areIdentical('01:02', this.target.FormatShortDuration(3723));
        };

        VBFormattingTests.prototype.testFormatShortDuration00 = function () {
            this.areIdentical('00:00', this.target.FormatShortDuration(1));
        };

        VBFormattingTests.prototype.testFormatShortDuration01 = function () {
            var res = this.target.FormatShortDuration(60);

            this.areIdentical('00:01', res);
        };

        VBFormattingTests.prototype.testFormatShortDuration012 = function () {
            this.areIdentical('00:01', this.target.FormatShortDuration(62));
        };

        VBFormattingTests.prototype.testFormatShortDuration159 = function () {
            var res = this.target.FormatShortDuration(119);

            this.areIdentical('00:01', res);
        };

        VBFormattingTests.prototype.testFormatShortDurationundefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortDuration(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatShortDurationnull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatShortDuration(null);
            });
        };

        VBFormattingTests.prototype.testFormatNumber1 = function () {
            this.areIdentical('1,00', this.target.FormatNumber(1));
        };

        VBFormattingTests.prototype.testFormatNumber1000 = function () {
            this.areIdentical('1 000,00', this.target.FormatNumber(1000));
        };

        VBFormattingTests.prototype.testFormatNumber99900630 = function () {
            this.areIdentical('99 900 630,00', this.target.FormatNumber(99900630));
        };

        VBFormattingTests.prototype.testFormatNumber1dot3 = function () {
            this.areIdentical('1,30', this.target.FormatNumber(1.3));
        };

        VBFormattingTests.prototype.testFormatNumberNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatNumber(null);
            });
        };

        VBFormattingTests.prototype.testFormatNumberUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatNumber(undefined);
            });
        };

        VBFormattingTests.prototype.testFormatNumber1dot36 = function () {
            this.areIdentical('1,300000', this.target.FormatNumber(1.3, 6));
        };

        VBFormattingTests.prototype.testFormatNumberUndefinedOptionalParam = function () {
            var _this = this;
            this.throws(function () {
                _this.target.FormatNumber(undefined, 4);
            });
        };

        VBFormattingTests.prototype.testVBWeekday2 = function () {
            this.areIdentical(2, this.target.VBWeekday(new Date("August 26, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testVBWeekday7 = function () {
            this.areIdentical(7, this.target.VBWeekday(new Date("August 24, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testVBWeekday1 = function () {
            this.areIdentical(1, this.target.VBWeekday(new Date("August 25, 2013 20:30:40")));
        };

        VBFormattingTests.prototype.testVBWeekdayNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.VBWeekday(null);
            });
        };

        VBFormattingTests.prototype.testScanNumberZero = function () {
            this.areIdentical(0, this.target.ScanNumber(0));
        };

        VBFormattingTests.prototype.testScanNumberZeroFromString = function () {
            this.areIdentical(0, this.target.ScanNumber(' 0 '));
        };

        VBFormattingTests.prototype.testScanNumberZeroFromString2 = function () {
            this.areIdentical(0, this.target.ScanNumber(' 00000000 '));
        };

        VBFormattingTests.prototype.testScanNumberZeroFraction = function () {
            this.areIdentical(0.123, this.target.ScanNumber(0.123));
        };

        VBFormattingTests.prototype.testScanNumberLongFraction = function () {
            this.areIdentical(0.1111111111111111, this.target.ScanNumber(0.11111111111111111111111111111111111));
        };

        VBFormattingTests.prototype.testScanNumberLongFractionFromString = function () {
            this.areIdentical(0.1111111111111111, this.target.ScanNumber('0.11111111111111111111111111111111111'));
        };

        VBFormattingTests.prototype.testScanNumberUndefined = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber(undefined);
            });
        };

        VBFormattingTests.prototype.testScanNumberNull = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber(null);
            });
        };

        VBFormattingTests.prototype.testScanNumberChars = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber('abcd');
            });
        };

        VBFormattingTests.prototype.testScanNumberCharsWithNumbers = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber(' 0 a 0 9');
            });
        };

        VBFormattingTests.prototype.testScanNumberCharsWithTrue = function () {
            this.areIdentical(1, this.target.ScanNumber(true));
        };

        VBFormattingTests.prototype.testScanNumberCharsWithFalse = function () {
            this.areIdentical(0, this.target.ScanNumber(false));
        };

        VBFormattingTests.prototype.testScanNumberCharsWithObject = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber({});
            });
        };

        VBFormattingTests.prototype.testScanNumberCharsWithObjectWithProps = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber({ a: '12', b: 98 });
            });
        };

        VBFormattingTests.prototype.testScanNumberCharsWithArray = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber([]);
            });
        };

        VBFormattingTests.prototype.testScanNumberCharsWithArrayWithObjs = function () {
            var _this = this;
            this.throws(function () {
                _this.target.ScanNumber([1, 2, {}]);
            });
        };

        VBFormattingTests.prototype.testScanNumberFromNegative = function () {
            this.areIdentical(-12345.12345, this.target.ScanNumber(-12345.12345));
        };

        VBFormattingTests.prototype.testScanNumberLongPositive = function () {
            this.areIdentical(234.45678466667783, this.target.ScanNumber(234.45678466667784459874213654987));
        };

        VBFormattingTests.prototype.testScanNumberLongPositiveFromString = function () {
            this.areIdentical(234.45678466667783, this.target.ScanNumber('234.45678466667784459874213654987'));
        };
        return VBFormattingTests;
    })(tsUnit.TestClass);
    VBFormattingTestModule.VBFormattingTests = VBFormattingTests;
})(VBFormattingTestModule || (VBFormattingTestModule = {}));

var test = new tsUnit.Test();

test.addTestClass(new VBFormattingTestModule.VBFormattingTests());

test.showResults(document.getElementById('results'), test.run());
//# sourceMappingURL=VBFormattingTests.js.map
