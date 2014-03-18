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
            this.throws(() => { this.target.SplitDate(null); });
        }

        testSplitDateUndefined() {
            this.throws(() => { this.target.SplitDate(undefined); });
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
            this.throws(() => { this.target.SplitTime(null); });
        }

        testSplitTimeUndefined() {
            this.throws(() => { this.target.SplitTime(undefined); });
        }
        //#endregion

        //#region FormatLongDate tests
        testFormatLongDate1january2013() {
            var res = this.target.FormatLongDate(new Date(2013, 0, 1));

            this.areIdentical('1. Januar 2013', res);
        }

        testFormatLongDate13february1975() {
            var res = this.target.FormatLongDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. Februar 1975', res);
        }

        testFormatLongDateNull() {
            this.throws(() => { this.target.FormatLongDate(null); });
        }

        testFormatLongDateUndefined() {
            this.throws(() => { this.target.FormatLongDate(undefined); });
        }
        //#endregion

        //#region FormatShortDate tests
        testFormatDate1321975() {
            var res = this.target.FormatShortDate(new Date("February 13, 1975 11:13:00"));

            this.areIdentical('13. 2. 1975', res);
        }

        testFormatShortDateUndefined() {
            this.throws(() => { this.target.FormatShortDate(undefined); });
        }

        testFormatShortDateNull() {
            this.throws(() => { this.target.FormatShortDate(null); });
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
            this.throws(() => { this.target.FormatShortDateAndTime(undefined); });
        }

        testFormatShortDateAndTimeNull() {
            this.throws(() => { this.target.FormatShortDateAndTime(null); });
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
            this.throws(() => { this.target.FormatLongTime(null); });

        }

        testFormatTimeUndefined() {
            this.throws(() => { this.target.FormatLongTime(undefined); });
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
            this.throws(() => { this.target.FormatShortTime(null); });
        }

        testFormatShortTimeUndefined() {
            this.throws(() => { this.target.FormatShortTime(undefined); });
        }
        //#endregion

        //#region FormatWeek tests
        testFormatWeekFeb() {
            this.areIdentical(7, this.target.FormatWeek(new Date("February 13, 1975 20:30:40")));
        }

        testFormatWeekJan11975() {
            this.areIdentical(1, this.target.FormatWeek(new Date("January 1, 1975 20:30:40")));
        }

        testFormatWeekAugust23() {
            this.areIdentical(34, this.target.FormatWeek(new Date("August 23, 2013 20:30:40")));
        }

        testFormatWeekDecember22() {
            this.areIdentical(51, this.target.FormatWeek(new Date("December 22, 2013 20:30:40")));
        }

        testFormatWeekDecember27() {
            this.areIdentical(52, this.target.FormatWeek(new Date("December 27, 2013 20:30:40")));
        }

        testFormatWeekDecember31() {
            this.areIdentical(1, this.target.FormatWeek(new Date("December 31, 2013 20:30:40")));
        }

        testFormatWeekDecember30() {
            this.areIdentical(1, this.target.FormatWeek(new Date("December 30, 2013 20:30:40")));
        }

        testFormatWeekDecemberJan() {
            this.areIdentical(1, this.target.FormatWeek(new Date("January 1, 2014 20:30:40")));
        }

        testFormatWeekDecember28() {
            this.areIdentical(52, this.target.FormatWeek(new Date("December 28, 2013 20:30:40")));
        }

        testFormatWeekDecember29() {
            this.areIdentical(52, this.target.FormatWeek(new Date("December 29, 2013 20:30:40")));
        }

        testFormatWeekUndefined() {
            this.throws(() => {
                this.target.FormatWeek(undefined);
            });
        }

        testFormatWeekNull() {
            this.throws(() => {
                this.target.FormatWeek(null);
            });
        }

        testFormatWeekDayNameSu() {
            this.areIdentical('So', this.target.FormatWeekDayName(new Date("December 29, 2013 20:30:40")));
        }

        testFormatWeekDayNameMo() {
            this.areIdentical('Mo', this.target.FormatWeekDayName(new Date("August 26, 2013 20:30:40")));
        }

        testFormatWeekDayNameUndefined() {
            this.throws(() => {
                this.target.FormatWeekDayName(undefined);
            });
        }

        testFormatWeekDayNameNull() {
            this.throws(() => {
                this.target.FormatWeekDayName(null);
            });
        }

        testFormatWeekDayNameSunday() {
            this.areIdentical('Sonntag', this.target.FormatLongWeekDayName(new Date("December 29, 2013 20:30:40")));
        }

        testFormatWeekDayNameMonday() {
            this.areIdentical('Montag', this.target.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40")));
        }

        testFormatWeekDayNameMondaynull() {
            this.throws(() => {
                this.target.FormatLongWeekDayName(null);
            });
        }

        testFormatWeekDayNameMondayundefined() {
            this.throws(() => {
                this.target.FormatLongWeekDayName(undefined);
            });
        }
        //#endregion

        //#region FormatHMS tests
        testFormatHMS001() {
            this.areIdentical('00:00:01', this.target.FormatHMS(1));
        }

        testFormatHMS010() {
            this.areIdentical('00:01:00', this.target.FormatHMS(60));
        }

        testFormatHMS012() {
            this.areIdentical('00:01:02', this.target.FormatHMS(62));
        }

        testFormatHMS123() {
            this.areIdentical('01:02:03', this.target.FormatHMS(3723));
        }

        testFormatHMS000() {
            this.areIdentical('00:00:00', this.target.FormatHMS(0));
        }

        testFormatHMSnull() {
            this.throws(() => {
                this.target.FormatHMS(null);
            });
        }

        testFormatHMSundefined() {
            this.throws(() => {
                this.target.FormatHMS(undefined);
            });
        }
        //#endregion

        //#region FormatShortDuration tests
        testFormatShortDuration0() {
            this.areIdentical('00:00', this.target.FormatShortDuration(0));
        }

        testFormatShortDuration0102() {
            this.areIdentical('01:02', this.target.FormatShortDuration(3723));
        }

        testFormatShortDuration00() {
            this.areIdentical('00:00', this.target.FormatShortDuration(1));
        }

        testFormatShortDuration01() {
            var res = this.target.FormatShortDuration(60);

            this.areIdentical('00:01', res);
        }

        testFormatShortDuration012() {
            this.areIdentical('00:01', this.target.FormatShortDuration(62));
        }

        testFormatShortDuration159() {
            var res = this.target.FormatShortDuration(119);

            this.areIdentical('00:01', res);
        }

        testFormatShortDurationundefined() {
            this.throws(() => {
                this.target.FormatShortDuration(undefined);
            });
        }

        testFormatShortDurationnull() {
            this.throws(() => {
                this.target.FormatShortDuration(null);
            });
        }
        //#endregion

        //#region FormatNumber tests
        testFormatNumber1() {
            this.areIdentical('1,00', this.target.FormatNumber(1));
        }

        testFormatNumber1000() {
            this.areIdentical('1 000,00', this.target.FormatNumber(1000));
        }

        testFormatNumber99900630() {
            this.areIdentical('99 900 630,00', this.target.FormatNumber(99900630));
        }

        testFormatNumber1dot3() {
            this.areIdentical('1,30', this.target.FormatNumber(1.3));
        }

        testFormatNumberNull() {
            this.throws(() => {
                this.target.FormatNumber(null);
            });
        }

        testFormatNumberUndefined() {
            this.throws(() => {
                this.target.FormatNumber(undefined);
            });
        }

        testFormatNumber1dot36() {
            this.areIdentical('1,300000', this.target.FormatNumber(1.3, 6));
        }

        testFormatNumberUndefinedOptionalParam() {
            this.throws(() => {
                this.target.FormatNumber(undefined, 4);
            });
        }
        //#endregion

        //#region VBWeekday tests
        testVBWeekday2() {
            this.areIdentical(2, this.target.VBWeekday(new Date("August 26, 2013 20:30:40")));
        }

        testVBWeekday7() {
            this.areIdentical(7, this.target.VBWeekday(new Date("August 24, 2013 20:30:40")));
        }

        testVBWeekday1() {
            this.areIdentical(1, this.target.VBWeekday(new Date("August 25, 2013 20:30:40")));
        }

        testVBWeekdayNull() {
            this.throws(() => {
                this.target.VBWeekday(null);
            });
        }
        //#endregion

        testScanNumberZero() {
            this.areIdentical(0, this.target.ScanNumber(0));
        }

        testScanNumberZeroFromString() {
            this.areIdentical(0, this.target.ScanNumber(' 0 '));
        }

        testScanNumberZeroFromString2() {
            this.areIdentical(0, this.target.ScanNumber(' 00000000 '));
        }

        testScanNumberZeroFraction() {
            this.areIdentical(0.123, this.target.ScanNumber(0.123));
        }

        testScanNumberLongFraction() {
            this.areIdentical(0.1111111111111111, this.target.ScanNumber(0.11111111111111111111111111111111111));
        }

        testScanNumberLongFractionFromString() {
            this.areIdentical(0.1111111111111111, this.target.ScanNumber('0.11111111111111111111111111111111111'));
        }

        testScanNumberUndefined() {
            this.throws(() => {
                this.target.ScanNumber(undefined);
            });
        }

        testScanNumberNull() {
            this.throws(() => {
                this.target.ScanNumber(null);
            });
        }

        testScanNumberChars() {
            this.throws(() => {
                this.target.ScanNumber('abcd');
            });
        }

        testScanNumberCharsWithNumbers() {
            this.throws(() => {
                this.target.ScanNumber(' 0 a 0 9');
            });
        }

        testScanNumberCharsWithTrue() {
            this.areIdentical(1, this.target.ScanNumber(true));
        }

        testScanNumberCharsWithFalse() {
            this.areIdentical(0, this.target.ScanNumber(false));
        }

        testScanNumberCharsWithObject() {
            this.throws(() => {
                this.target.ScanNumber({});
            });
        }

        testScanNumberCharsWithObjectWithProps() {
            this.throws(() => {
                this.target.ScanNumber({ a: '12', b: 98 });
            });
        }

        testScanNumberCharsWithArray() {
            this.throws(() => {
                this.target.ScanNumber([]);
            });
        }

        testScanNumberCharsWithArrayWithObjs() {
            this.throws(() => {
                this.target.ScanNumber([1, 2, {}]);
            });
        }

        testScanNumberFromNegative() {
            this.areIdentical(-12345.12345, this.target.ScanNumber(-12345.12345));
        }

        testScanNumberLongPositive() {
            this.areIdentical(234.45678466667783, this.target.ScanNumber(234.45678466667784459874213654987));
        }

        testScanNumberLongPositiveFromString() {
            this.areIdentical(234.45678466667783, this.target.ScanNumber('234.45678466667784459874213654987'));
        }
    }
}

// new instance of tsUnit
var test = new tsUnit.Test();

// add your test class (you can call this multiple times)
test.addTestClass(new VBFormattingTestModule.VBFormattingTests());

// Use the built in results display
test.showResults(document.getElementById('results'), test.run());