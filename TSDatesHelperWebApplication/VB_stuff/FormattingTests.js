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
            try  {
                var res = this.target.SplitDate(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testSplitDateUndefined = function () {
            try  {
                var res = this.target.SplitDate(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testSplitTime = function () {
            var res = this.target.SplitTime(new Date(2013, 1, 1, 12, 15, 50));

            this.areIdentical(12, res.hours);
            this.areIdentical(15, res.minutes);
            this.areIdentical(50, res.seconds);
        };

        FormattingTests.prototype.testSplitTimeNull = function () {
            try  {
                var res = this.target.SplitTime(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testSplitTimeUndefined = function () {
            try  {
                var res = this.target.SplitTime(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
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
            try  {
                var res = this.target.FormatLongDate(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatLongDateUndefined = function () {
            try  {
                var res = this.target.FormatLongDate(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatDate1321975 = function () {
            var res = this.target.FormatShortDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. 2. 1975', res);
        };

        FormattingTests.prototype.testFormatShortDateUndefined = function () {
            try  {
                var res = this.target.FormatShortDate(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatShortDateNull = function () {
            try  {
                var res = this.target.FormatShortDate(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatTime111319 = function () {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:19"));

            this.areIdentical('11:13:19', res);
        };

        FormattingTests.prototype.testFormatTimeNull = function () {
            try  {
                var res = this.target.FormatLongTime(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatTimeUndefined = function () {
            try  {
                var res = this.target.FormatLongTime(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatShortTime = function () {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 20:30:40"));

            this.areIdentical('20:30', res);
        };

        FormattingTests.prototype.testFormatShortTimeNull = function () {
            try  {
                var res = this.target.FormatShortTime(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatShortTimeUndefined = function () {
            try  {
                var res = this.target.FormatShortTime(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
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
            try  {
                var res = this.target.FormatWeek(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatWeekNull = function () {
            try  {
                var res = this.target.FormatWeek(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatWeekDayNameSu = function () {
            var res = this.target.FormatWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('su', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameMo = function () {
            var res = this.target.FormatWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('mo', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameUndefined = function () {
            try  {
                var res = this.target.FormatWeekDayName(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatWeekDayNameNull = function () {
            try  {
                var res = this.target.FormatWeekDayName(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatWeekDayNameSunday = function () {
            var res = this.target.FormatLongWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('sunday', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameMonday = function () {
            var res = this.target.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('monday', res);
        };

        FormattingTests.prototype.testFormatWeekDayNameMondaynull = function () {
            try  {
                var res = this.target.FormatLongWeekDayName(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatWeekDayNameMondayundefined = function () {
            try  {
                var res = this.target.FormatLongWeekDayName(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
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
            try  {
                var res = this.target.FormatHMS(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatHMSundefined = function () {
            try  {
                var res = this.target.FormatHMS(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
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
            try  {
                var res = this.target.FormatShortDuration(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatShortDurationnull = function () {
            try  {
                var res = this.target.FormatShortDuration(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
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
            try  {
                var res = this.target.FormatNumber(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatNumberUndefined = function () {
            try  {
                var res = this.target.FormatNumber(undefined);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        };

        FormattingTests.prototype.testFormatNumber1dot36 = function () {
            var res = this.target.FormatNumber(1.3, 6);

            this.areIdentical('1,300000', res);
        };

        FormattingTests.prototype.testFormatNumberUndefinedOptionalParam = function () {
            try  {
                var res = this.target.FormatNumber(undefined, 4);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
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
            try  {
                var res = this.target.VBWeekday(null);
            } catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
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
