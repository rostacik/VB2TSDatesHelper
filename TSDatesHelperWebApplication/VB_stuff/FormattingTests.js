/// <reference path="Formatting.ts" />
/// <reference path="../Scripts/tsUnit/tsUnit.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FormattingTestModule;
(function (FormattingTestModule) {
    var FormattingTests = (function (_super) {
        __extends(FormattingTests, _super);
        function FormattingTests() {
            _super.apply(this, arguments);
            this.target = new DateTimeFormattingModule.FormattingHelpers();
        }
        FormattingTests.prototype.testSplitDate111913 = function () {
            var res = this.target.SplitDate(new Date(13, 1, 1));

            this.areIdentical(1, res.date);
            this.areIdentical(1, res.month);
            this.areIdentical(1913, res.year);
        };

        FormattingTests.prototype.testSplitDate112013 = function () {
            var res = this.target.SplitDate(new Date(2013, 1, 1));

            this.areIdentical(1, res.date);
            this.areIdentical(1, res.month);
            this.areIdentical(2013, res.year);
        };

        FormattingTests.prototype.testSplitDateNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.SplitDate(null);
            });
        };

        FormattingTests.prototype.testSplitDateUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.SplitDate(undefined);
            });
        };

        FormattingTests.prototype.testSplitTime = function () {
            var res = this.target.SplitTime(new Date(2013, 1, 1, 12, 15, 50));

            this.areIdentical(12, res.hours);
            this.areIdentical(15, res.minutes);
            this.areIdentical(50, res.seconds);
        };

        FormattingTests.prototype.testSplitTimeNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.SplitTime(null);
            });
        };

        FormattingTests.prototype.testSplitTimeUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.SplitTime(undefined);
            });
        };

        FormattingTests.prototype.testFormatLongDate1january2013 = function () {
            var res = this.target.FormatLongDate(new Date(2013, 0, 1));

            this.areIdentical('1. January 2013', res);
        };

        FormattingTests.prototype.testFormatLongDate13february1975 = function () {
            var res = this.target.FormatLongDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. February 1975', res);
        };

        FormattingTests.prototype.testFormatLongDateNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatLongDate(null);
            });
        };

        FormattingTests.prototype.testFormatLongDateUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatLongDate(undefined);
            });
        };

        FormattingTests.prototype.testFormatDate1321975 = function () {
            var res = this.target.FormatShortDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. 2. 1975', res);
        };

        FormattingTests.prototype.testFormatShortDateUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatShortDate(undefined);
            });
        };

        FormattingTests.prototype.testFormatShortDateNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatShortDate(null);
            });
        };

        FormattingTests.prototype.testFormatTime111319 = function () {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:19"));

            this.areIdentical('11:13:19', res);
        };

        FormattingTests.prototype.testFormatTimeNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatLongTime(null);
            });
        };

        FormattingTests.prototype.testFormatTimeUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatLongTime(undefined);
            });
        };

        FormattingTests.prototype.testFormatShortTime = function () {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 20:30:40"));

            this.areIdentical('20:30', res);
        };

        FormattingTests.prototype.testFormatShortTimeNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatShortTime(null);
            });
        };

        FormattingTests.prototype.testFormatShortTimeUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatShortTime(undefined);
            });
        };

        FormattingTests.prototype.testFormatWeekFeb = function () {
            var res = this.target.FormatWeek(new Date("February 13, 1975 20:30:40"));

            this.areIdentical(7, res);
        };

        FormattingTests.prototype.testFormatWeekJan11975 = function () {
            var res = this.target.FormatWeek(new Date("January 1, 1975 20:30:40"));

            this.areIdentical(1, res);
        };

        FormattingTests.prototype.testFormatWeekAugust23 = function () {
            var res = this.target.FormatWeek(new Date("August 23, 2013 20:30:40"));

            this.areIdentical(34, res);
        };

        FormattingTests.prototype.testFormatWeekDecember22 = function () {
            var res = this.target.FormatWeek(new Date("December 22, 2013 20:30:40"));

            this.areIdentical(51, res);
        };

        FormattingTests.prototype.testFormatWeekDecember27 = function () {
            var res = this.target.FormatWeek(new Date("December 27, 2013 20:30:40"));

            this.areIdentical(52, res);
        };

        FormattingTests.prototype.testFormatWeekDecember31 = function () {
            var res = this.target.FormatWeek(new Date("December 31, 2013 20:30:40"));

            this.areIdentical(1, res);
        };

        FormattingTests.prototype.testFormatWeekDecember30 = function () {
            var res = this.target.FormatWeek(new Date("December 30, 2013 20:30:40"));

            this.areIdentical(1, res);
        };

        FormattingTests.prototype.testFormatWeekDecemberJan = function () {
            var res = this.target.FormatWeek(new Date("January 1, 2014 20:30:40"));

            this.areIdentical(1, res);
        };

        FormattingTests.prototype.testFormatWeekDecember28 = function () {
            var res = this.target.FormatWeek(new Date("December 28, 2013 20:30:40"));

            this.areIdentical(52, res);
        };

        FormattingTests.prototype.testFormatWeekDecember29 = function () {
            var res = this.target.FormatWeek(new Date("December 29, 2013 20:30:40"));

            this.areIdentical(52, res);
        };

        FormattingTests.prototype.testFormatWeekUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatWeek(undefined);
            });
        };

        FormattingTests.prototype.testFormatWeekNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatWeek(null);
            });
        };

        FormattingTests.prototype.testFormatWeekDayNameSu = function () {
            var res = this.target.FormatWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('Su', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameMo = function () {
            var res = this.target.FormatWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('Mo', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatWeekDayName(undefined);
            });
        };

        FormattingTests.prototype.testFormatWeekDayNameNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatWeekDayName(null);
            });
        };

        FormattingTests.prototype.testFormatWeekDayNameSunday = function () {
            var res = this.target.FormatLongWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('Sunday', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameMonday = function () {
            var res = this.target.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('Monday', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameMondaynull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatLongWeekDayName(null);
            });
        };

        FormattingTests.prototype.testFormatWeekDayNameMondayundefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatLongWeekDayName(undefined);
            });
        };

        FormattingTests.prototype.testFormatHMS001 = function () {
            var res = this.target.FormatHMS(1);

            this.areIdentical('00:00:01', res);
        };

        FormattingTests.prototype.testFormatHMS010 = function () {
            var res = this.target.FormatHMS(60);

            this.areIdentical('00:01:00', res);
        };

        FormattingTests.prototype.testFormatHMS012 = function () {
            var res = this.target.FormatHMS(62);

            this.areIdentical('00:01:02', res);
        };

        FormattingTests.prototype.testFormatHMS123 = function () {
            var res = this.target.FormatHMS(3723);

            this.areIdentical('01:02:03', res);
        };

        FormattingTests.prototype.testFormatHMS000 = function () {
            var res = this.target.FormatHMS(0);

            this.areIdentical('00:00:00', res);
        };

        FormattingTests.prototype.testFormatHMSnull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatHMS(null);
            });
        };

        FormattingTests.prototype.testFormatHMSundefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatHMS(undefined);
            });
        };

        FormattingTests.prototype.testFormatShortDuration0 = function () {
            var res = this.target.FormatShortDuration(0);

            this.areIdentical('00:00', res);
        };

        FormattingTests.prototype.testFormatShortDuration0102 = function () {
            var res = this.target.FormatShortDuration(3723);

            this.areIdentical('01:02', res);
        };

        FormattingTests.prototype.testFormatShortDuration00 = function () {
            var res = this.target.FormatShortDuration(1);

            this.areIdentical('00:00', res);
        };

        FormattingTests.prototype.testFormatShortDuration01 = function () {
            var res = this.target.FormatShortDuration(60);

            this.areIdentical('00:01', res);
        };

        FormattingTests.prototype.testFormatShortDuration012 = function () {
            var res = this.target.FormatShortDuration(62);

            this.areIdentical('00:01', res);
        };

        FormattingTests.prototype.testFormatShortDuration159 = function () {
            var res = this.target.FormatShortDuration(119);

            this.areIdentical('00:01', res);
        };

        FormattingTests.prototype.testFormatShortDurationundefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatShortDuration(undefined);
            });
        };

        FormattingTests.prototype.testFormatShortDurationnull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatShortDuration(null);
            });
        };

        FormattingTests.prototype.testFormatNumber1 = function () {
            var res = this.target.FormatNumber(1);

            this.areIdentical('1,00', res);
        };

        FormattingTests.prototype.testFormatNumber1000 = function () {
            var res = this.target.FormatNumber(1000);

            this.areIdentical('1 000,00', res);
        };

        FormattingTests.prototype.testFormatNumber99900630 = function () {
            var res = this.target.FormatNumber(99900630);

            this.areIdentical('99 900 630,00', res);
        };

        FormattingTests.prototype.testFormatNumber1dot3 = function () {
            var res = this.target.FormatNumber(1.3);

            this.areIdentical('1,30', res);
        };

        FormattingTests.prototype.testFormatNumberNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatNumber(null);
            });
        };

        FormattingTests.prototype.testFormatNumberUndefined = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatNumber(undefined);
            });
        };

        FormattingTests.prototype.testFormatNumber1dot36 = function () {
            var res = this.target.FormatNumber(1.3, 6);

            this.areIdentical('1,300000', res);
        };

        FormattingTests.prototype.testFormatNumberUndefinedOptionalParam = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.FormatNumber(undefined, 4);
            });
        };

        FormattingTests.prototype.testVBWeekday2 = function () {
            var res = this.target.VBWeekday(new Date("August 26, 2013 20:30:40"));

            this.areIdentical(2, res);
        };

        FormattingTests.prototype.testVBWeekday7 = function () {
            var res = this.target.VBWeekday(new Date("August 24, 2013 20:30:40"));

            this.areIdentical(7, res);
        };

        FormattingTests.prototype.testVBWeekday1 = function () {
            var res = this.target.VBWeekday(new Date("August 25, 2013 20:30:40"));

            this.areIdentical(1, res);
        };

        FormattingTests.prototype.testVBWeekdayNull = function () {
            var _this = this;
            this.throws(function () {
                var res = _this.target.VBWeekday(null);
            });
        };
        return FormattingTests;
    })(tsUnit.TestClass);
    FormattingTestModule.FormattingTests = FormattingTests;
})(FormattingTestModule || (FormattingTestModule = {}));

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new FormattingTestModule.FormattingTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());
//# sourceMappingURL=FormattingTests.js.map
