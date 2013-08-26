/// <reference path="Formatting.ts" />
/// <reference path="../Scripts/tsUnit/tsUnit.ts" />

module FormattingTestModule {
    export class FormattingTests extends tsUnit.TestClass {

        private target = new DateTimeFormattingModule.FormattingHelpers();

        testSplitDate111913() {
            var res = this.target.SplitDate(new Date(13, 1, 1));

            this.areIdentical(1, res.date);
            this.areIdentical(1, res.month);
            this.areIdentical(1913, res.year);
        }

        testSplitDate112013() {
            var res = this.target.SplitDate(new Date(2013, 1, 1));

            this.areIdentical(1, res.date);
            this.areIdentical(1, res.month);
            this.areIdentical(2013, res.year);
        }

        testSplitDateNull() {
            try {
                var res = this.target.SplitDate(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testSplitDateUndefined() {
            try {
                var res = this.target.SplitDate(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testSplitTime() {
            var res = this.target.SplitTime(new Date(2013, 1, 1, 12, 15, 50));

            this.areIdentical(12, res.hours);
            this.areIdentical(15, res.minutes);
            this.areIdentical(50, res.seconds);
        }

        testSplitTimeNull() {
            try {
                var res = this.target.SplitTime(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testSplitTimeUndefined() {
            try {
                var res = this.target.SplitTime(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatLongDate1january2013() {
            var res = this.target.FormatLongDate(new Date(2013, 0, 1));

            this.areIdentical('1. January 2013', res);
        }

        testFormatLongDate13february1975() {
            var res = this.target.FormatLongDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. February 1975', res);
        }

        testFormatLongDateNull() {
            try {
                var res = this.target.FormatLongDate(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatLongDateUndefined() {
            try {
                var res = this.target.FormatLongDate(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatDate1321975() {
            var res = this.target.FormatShortDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. 2. 1975', res);
        }

        testFormatShortDateUndefined() {
            try {
                var res = this.target.FormatShortDate(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatShortDateNull() {
            try {
                var res = this.target.FormatShortDate(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatTime111319() {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:19"));

            this.areIdentical('11:13:19', res);
        }

        testFormatTimeNull() {
            try {
                var res = this.target.FormatLongTime(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatTimeUndefined() {
            try {
                var res = this.target.FormatLongTime(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatShortTime() {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 20:30:40"));

            this.areIdentical('20:30', res);
        }

        testFormatShortTimeNull() {
            try {
                var res = this.target.FormatShortTime(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatShortTimeUndefined() {
            try {
                var res = this.target.FormatShortTime(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatWeekFeb() {
            var res = this.target.FormatWeek(new Date("February 13, 1975 20:30:40"));

            this.areIdentical(7, res);
        }

        testFormatWeekJan11975() {
            var res = this.target.FormatWeek(new Date("January 1, 1975 20:30:40"));

            this.areIdentical(1, res);
        }

        testFormatWeekAugust23() {
            var res = this.target.FormatWeek(new Date("August 23, 2013 20:30:40"));

            this.areIdentical(34, res);
        }

        testFormatWeekDecember22() {
            var res = this.target.FormatWeek(new Date("December 22, 2013 20:30:40"));

            this.areIdentical(51, res);
        }

        testFormatWeekDecember27() {
            var res = this.target.FormatWeek(new Date("December 27, 2013 20:30:40"));

            this.areIdentical(52, res);
        }

        testFormatWeekDecember31() {
            var res = this.target.FormatWeek(new Date("December 31, 2013 20:30:40"));

            this.areIdentical(1, res);
        }

        testFormatWeekDecember30() {
            var res = this.target.FormatWeek(new Date("December 30, 2013 20:30:40"));

            this.areIdentical(1, res);
        }

        testFormatWeekDecemberJan() {
            var res = this.target.FormatWeek(new Date("January 1, 2014 20:30:40"));

            this.areIdentical(1, res);
        }

        testFormatWeekDecember28() {
            var res = this.target.FormatWeek(new Date("December 28, 2013 20:30:40"));

            this.areIdentical(52, res);
        }

        testFormatWeekDecember29() {
            var res = this.target.FormatWeek(new Date("December 29, 2013 20:30:40"));

            this.areIdentical(52, res);
        }

        testFormatWeekUndefined() {
            try {
                var res = this.target.FormatWeek(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatWeekNull() {
            try {
                var res = this.target.FormatWeek(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatWeekDayNameSu() {
            var res = this.target.FormatWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('su', res);
        }

        testFormatWeekDayNameMo() {
            var res = this.target.FormatWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('mo', res);
        }

        testFormatWeekDayNameUndefined() {
            try {
                var res = this.target.FormatWeekDayName(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatWeekDayNameNull() {
            try {
                var res = this.target.FormatWeekDayName(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatWeekDayNameSunday() {
            var res = this.target.FormatLongWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('sunday', res);
        }

        testFormatWeekDayNameMonday() {
            var res = this.target.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('monday', res);
        }

        testFormatWeekDayNameMondaynull() {
            try {
                var res = this.target.FormatLongWeekDayName(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatWeekDayNameMondayundefined() {
            try {
                var res = this.target.FormatLongWeekDayName(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatHMS001() {
            var res = this.target.FormatHMS(1);

            this.areIdentical('00:00:01', res);
        }

        testFormatHMS010() {
            var res = this.target.FormatHMS(60);

            this.areIdentical('00:01:00', res);
        }

        testFormatHMS012() {
            var res = this.target.FormatHMS(62);

            this.areIdentical('00:01:02', res);
        }

        testFormatHMS123() {
            var res = this.target.FormatHMS(3723);

            this.areIdentical('01:02:03', res);
        }

        testFormatHMS000() {
            var res = this.target.FormatHMS(0);

            this.areIdentical('00:00:00', res);
        }

        testFormatHMSnull() {
            try {
                var res = this.target.FormatHMS(null);
            }            
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatHMSundefined() {
            try {
                var res = this.target.FormatHMS(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatShortDuration0() {
            var res = this.target.FormatShortDuration(0);

            this.areIdentical('00:00', res);
        }

        testFormatShortDuration0102() {
            var res = this.target.FormatShortDuration(3723);

            this.areIdentical('01:02', res);
        }

        testFormatShortDuration00() {
            var res = this.target.FormatShortDuration(1);

            this.areIdentical('00:00', res);
        }

        testFormatShortDuration01() {
            var res = this.target.FormatShortDuration(60);

            this.areIdentical('00:01', res);
        }

        testFormatShortDuration012() {
            var res = this.target.FormatShortDuration(62);

            this.areIdentical('00:01', res);
        }

        testFormatShortDuration159() {
            var res = this.target.FormatShortDuration(119);

            this.areIdentical('00:01', res);
        }

        testFormatShortDurationundefined() {
            try {
                var res = this.target.FormatShortDuration(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatShortDurationnull() {
            try {
                var res = this.target.FormatShortDuration(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatNumber1() {
            var res = this.target.FormatNumber(1);

            this.areIdentical('1,00', res);
        }

        testFormatNumber1000() {
            var res = this.target.FormatNumber(1000);

            this.areIdentical('1 000,00', res);
        }

        testFormatNumber99900630() {
            var res = this.target.FormatNumber(99900630);

            this.areIdentical('99 900 630,00', res);
        }

        testFormatNumber1dot3() {
            var res = this.target.FormatNumber(1.3);

            this.areIdentical('1,30', res);
        }

        testFormatNumberNull() {
            try {
                var res = this.target.FormatNumber(null);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatNumberUndefined() {
            try {
                var res = this.target.FormatNumber(undefined);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testFormatNumber1dot36() {
            var res = this.target.FormatNumber(1.3,6);

            this.areIdentical('1,300000', res);
        }

        testFormatNumberUndefinedOptionalParam() {
            try {
                var res = this.target.FormatNumber(undefined, 4);
            }
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }

        testVBWeekday2() {
            var res = this.target.VBWeekday(new Date("August 26, 2013 20:30:40"));

            this.areIdentical(2, res);
        }

        testVBWeekday7() {
            var res = this.target.VBWeekday(new Date("August 24, 2013 20:30:40"));

            this.areIdentical(7, res);
        }

        testVBWeekday1() {
            var res = this.target.VBWeekday(new Date("August 25, 2013 20:30:40"));

            this.areIdentical(1, res);
        }

        testVBWeekdayNull() {
            try {
                var res = this.target.VBWeekday(null);
            }            
            catch (ex) {
                this.areIdentical(ex.toString(), 'Error: Parameter undefined or null.');
            }
        }
    }
}

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new FormattingTestModule.FormattingTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());