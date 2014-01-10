/// <reference path="VBFormatting.ts" />
/// <reference path="../Scripts/tsUnit/tsUnit.ts" />

module VBFormattingTestModule {
    export class VBFormattingTests extends tsUnit.TestClass {

        private target = new VBDateTimeFormattingModule.VBFormattingHelpers();

        //#region SplitDate tests
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
            this.throws(() => { var res = this.target.SplitDate(null); });
        }

        testSplitDateUndefined() {
            this.throws(() => { var res = this.target.SplitDate(undefined); });
        }
        //#endregion

        //#region SplitTime tests
        testSplitTime() {
            var res = this.target.SplitTime(new Date(2013, 1, 1, 12, 15, 50));

            this.areIdentical(12, res.hours);
            this.areIdentical(15, res.minutes);
            this.areIdentical(50, res.seconds);
        }

        testSplitTimeNull() {
            this.throws(() => { var res = this.target.SplitTime(null); });
        }

        testSplitTimeUndefined() {
            this.throws(() => { var res = this.target.SplitTime(undefined); });
        }
        //#endregion

        //#region FormatLongDate tests
        testFormatLongDate1january2013() {
            var res = this.target.FormatLongDate(new Date(2013, 0, 1));

            this.areIdentical('1. January 2013', res);
        }

        testFormatLongDate13february1975() {
            var res = this.target.FormatLongDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. February 1975', res);
        }

        testFormatLongDateNull() {
            this.throws(() => { var res = this.target.FormatLongDate(null); });
        }

        testFormatLongDateUndefined() {
            this.throws(() => { var res = this.target.FormatLongDate(undefined); });
        }
        //#endregion

        //#region FormatShortDate tests
        testFormatDate1321975() {
            var res = this.target.FormatShortDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. 2. 1975', res);
        }

        testFormatShortDateUndefined() {
            this.throws(() => { var res = this.target.FormatShortDate(undefined); });
        }

        testFormatShortDateNull() {
            this.throws(() => { var res = this.target.FormatShortDate(null); });
        }
        //#endregion

        //#region FormatShortDateAndTime tests
        testFormatDateAndTime1321975111319() {
            var res = this.target.FormatShortDateAndTime(new Date("February 13, 1975 11:13:19"));

            this.areIdentical('13. 2. 1975 11:13:19', res);
        }

        testFormatDateAndTime1321975010100() {
            var res = this.target.FormatShortDateAndTime(new Date("February 13, 1975 01:01:00"));

            this.areIdentical('13. 2. 1975 01:01:00', res);
        }

        testFormatDateAndTime1321975000000() {
            var res = this.target.FormatShortDateAndTime(new Date("February 13, 1975"));

            this.areIdentical('13. 2. 1975', res);
        }

        testFormatShortDateAndTimeUndefined() {
            this.throws(() => { var res = this.target.FormatShortDateAndTime(undefined); });
        }

        testFormatShortDateAndTimeNull() {
            this.throws(() => { var res = this.target.FormatShortDateAndTime(null); });
        }
        //#endregion

        //#region FormatShortDate tests
        testFormatTime111319() {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:19"));

            this.areIdentical('11:13:19', res);
        }

        testFormatTime111300() {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('11:13:00', res);
        }

        testFormatTime000000() {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 00:00:00"));

            this.areIdentical('00:00:00', res);
        }

        testFormatTime010203() {
            var res = this.target.FormatLongTime(new Date("February 13, 1975 01:02:03"));

            this.areIdentical('01:02:03', res);
        }

        testFormatTimeNull() {
            this.throws(() => { var res = this.target.FormatLongTime(null); });

        }

        testFormatTimeUndefined() {
            this.throws(() => { var res = this.target.FormatLongTime(undefined); });
        }
        //#endregion

        //#region FormatShortTime tests
        testFormatShortTime() {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 20:30:40"));

            this.areIdentical('20:30', res);
        }

        testFormatShortTime0000() {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 00:00:00"));

            this.areIdentical('00:00', res);
        }

        testFormatShortTime0201() {
            var res = this.target.FormatShortTime(new Date("February 13, 1975 02:01:00"));

            this.areIdentical('02:01', res);
        }

        testFormatShortTimeNull() {
            this.throws(() => { var res = this.target.FormatShortTime(null); });
        }

        testFormatShortTimeUndefined() {
            this.throws(() => { var res = this.target.FormatShortTime(undefined); });
        }
        //#endregion

        //#region FormatWeek tests
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
            this.throws(() => { var res = this.target.FormatWeek(undefined); });
        }

        testFormatWeekNull() {
            this.throws(() => { var res = this.target.FormatWeek(null); });
        }

        testFormatWeekDayNameSu() {
            var res = this.target.FormatWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('Su', res);
        }

        testFormatWeekDayNameMo() {
            var res = this.target.FormatWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('Mo', res);
        }

        testFormatWeekDayNameUndefined() {
            this.throws(() => { var res = this.target.FormatWeekDayName(undefined); });
        }

        testFormatWeekDayNameNull() {
            this.throws(() => { var res = this.target.FormatWeekDayName(null); });
        }

        testFormatWeekDayNameSunday() {
            var res = this.target.FormatLongWeekDayName(new Date("December 29, 2013 20:30:40"));

            this.areIdentical('Sunday', res);
        }

        testFormatWeekDayNameMonday() {
            var res = this.target.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40"));

            this.areIdentical('Monday', res);
        }

        testFormatWeekDayNameMondaynull() {
            this.throws(() => { var res = this.target.FormatLongWeekDayName(null); });
        }

        testFormatWeekDayNameMondayundefined() {
            this.throws(() => { var res = this.target.FormatLongWeekDayName(undefined); });
        }
        //#endregion

        //#region FormatHMS tests
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
            this.throws(() => { var res = this.target.FormatHMS(null); });
        }

        testFormatHMSundefined() {
            this.throws(() => { var res = this.target.FormatHMS(undefined); });
        }
        //#endregion

        //#region FormatShortDuration tests
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
            this.throws(() => { var res = this.target.FormatShortDuration(undefined); });
        }

        testFormatShortDurationnull() {
            this.throws(() => { var res = this.target.FormatShortDuration(null); });
        }
        //#endregion

        //#region FormatNumber tests
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
            this.throws(() => { var res = this.target.FormatNumber(null); });
        }

        testFormatNumberUndefined() {
            this.throws(() => { var res = this.target.FormatNumber(undefined); });
        }

        testFormatNumber1dot36() {
            var res = this.target.FormatNumber(1.3, 6);

            this.areIdentical('1,300000', res);
        }

        testFormatNumberUndefinedOptionalParam() {
            this.throws(() => { var res = this.target.FormatNumber(undefined, 4); });
        }
        //#endregion

        //#region VBWeekday tests
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
            this.throws(() => { var res = this.target.VBWeekday(null); });
        }
        //#endregion
    }
}

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new VBFormattingTestModule.VBFormattingTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());