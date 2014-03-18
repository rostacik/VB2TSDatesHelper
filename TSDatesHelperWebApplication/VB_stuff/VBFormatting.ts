module VBDateTimeFormattingModule {
    export interface IVBFormattingHelpers {
        /** Splits and returns just date */
        SplitDate(date: Date): {
            date: number;
            month: number;
            year: number;
        };
        /** Splits and returns just time */
        SplitTime(dateTime: Date): {
            hours: number;
            minutes: number;
            seconds: number;
        };
        /** same as FormatDateTime(d, 0) */
        FormatShortDateAndTime(date: Date): string;
        /** same as FormatDateTime(d, 1) */
        FormatLongDate(date: Date): string;
        /** same as FormatDateTime(d, 2) */
        FormatShortDate(date: Date): string;
        /** same as FormatDateTime(d, 3) */
        FormatLongTime(dateTime: Date): string;
        /** same as FormatDateTime(d, 4) */
        FormatShortTime(dateTime: Date): string;
        /** DatePart ("ww", d, 2, 2) */
        FormatWeek(date: Date): number;
        /** WeekdayName(Weekday(d, 0), true, 0) */
        FormatWeekDayName(date: Date): string;
        /** WeekdayName(Weekday(d, 0), false, 0) */
        FormatLongWeekDayName(date: Date): string;
        /** returns time from supplied seconds - HH:MM:SS */
        FormatHMS(seconds: number): string;
        /** converts seconds to date, returns HH:MM */
        FormatShortDuration(seconds: number): string;
        /** give number nice format, optional parameter with number of digits */
        FormatNumber(numberToFormat: number, fractionDigits?: number): string;
        /** weekday number, Sunday 1, Saturday 7 */
        VBWeekday(date: Date): number;
        /** convert value to number */
        ScanNumber(value: any): number;
    }

    // Class
    export class VBFormattingHelpers implements IVBFormattingHelpers {
        /** helper object with english names */
        private monthNamesEng: Array<string>;
        /** days names in english - shorted */
        private dayNameEng: Array<string>;

        /** ctor */
        constructor() {
            this.monthNamesEng = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            this.dayNameEng = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        }

        /**
        Returns time from start of the day in seconds
        */
        private getTimeSeconds(date: Date): number {
            if ((date !== undefined) && (date !== null)) {
                return (date.getSeconds() + (date.getMinutes() * 60) + (date.getHours() * 60 * 60));
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** Splits and returns just date */
        public SplitDate(date: Date): { date: number; month: number; year: number } {
            if ((date !== undefined) && (date !== null)) {
                var currDate = date.getDate();
                var currMonth = date.getMonth();
                var currYear = date.getFullYear();

                return { date: currDate, month: currMonth, year: currYear };
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** Splits and returns just time */
        public SplitTime(dateTime: Date): { hours: number; minutes: number; seconds: number } {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                var currHours = dateTime.getHours();
                var currMinutes = dateTime.getMinutes();
                var currSeconds = dateTime.getSeconds();

                return { hours: currHours, minutes: currMinutes, seconds: currSeconds };
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** same as FormatDateTime(d, 0)
        0 = vbGeneralDate - Default. Returns date: mm/dd/yy (/ or not depends on current culture) and time if specified: hh:mm:ss PM/AM.
        */
        public FormatShortDateAndTime(date: Date): string {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate: string = this.FormatShortDate(date);
                var parsedTime: string = this.FormatLongTime(date);

                if (parsedTime !== '00:00:00') {
                    return parsedDate + ' ' + this.FormatHMS(this.getTimeSeconds(date));
                }
                else {
                    return parsedDate;
                }
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** same as FormatDateTime(d, 1) */
        public FormatLongDate(date: Date): string {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + this.monthNamesEng[parsedDate.month]
                    + ' ' + parsedDate.year;
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** same as FormatDateTime(d, 2) */
        public FormatShortDate(date: Date): string {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + (parsedDate.month + 1) + '. '
                    + parsedDate.year;
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** same as FormatDateTime(d, 3) */
        public FormatLongTime(dateTime: Date): string {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                return this.FormatHMS(this.getTimeSeconds(dateTime));
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** same as FormatDateTime(d, 4) */
        public FormatShortTime(dateTime: Date): string {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                return this.FormatShortDuration(this.getTimeSeconds(dateTime));
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** DatePart ("ww", d, 2, 2) */
        public FormatWeek(date: Date): number {
            if ((date !== undefined) && (date !== null)) {
                //stolen from jQuery UI, shame on me....
                var time: number, checkDate = new Date(date.getTime());

                // Find Thursday of this week starting on Monday
                checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

                time = checkDate.getTime();
                checkDate.setMonth(0); // Compare with Jan 1
                checkDate.setDate(1);

                return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** WeekdayName(Weekday(d, 0), true, 0) */
        public FormatWeekDayName(date: Date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()].substr(0, 2);
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** WeekdayName(Weekday(d, 0), false, 0) */
        public FormatLongWeekDayName(date: Date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()];
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** returns time from supplied seconds - HH:MM:SS */
        public FormatHMS(seconds: number): string {
            if ((seconds !== undefined) && (seconds !== null)) {
                var hoursStr: string, minutesStr: string, secondsStr: string;

                var hours = Math.floor(seconds / (60 * 60));

                var divisorForMinutes = seconds % (60 * 60);
                var minutes = Math.floor(divisorForMinutes / 60);

                var divisorForSeconds = divisorForMinutes % 60;
                seconds = Math.ceil(divisorForSeconds);

                if (hours < 10) {
                    hoursStr = '0' + hours;
                }
                else {
                    hoursStr = hours.toString();
                }

                if (minutes < 10) {
                    minutesStr = '0' + minutes;
                }
                else {
                    minutesStr = minutes.toString();
                }

                if (seconds < 10) {
                    secondsStr = '0' + seconds;
                }
                else {
                    secondsStr = seconds.toString();
                }

                return (hoursStr + ':' + minutesStr + ':' + secondsStr);
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** converts seconds to date, returns HH:MM */
        public FormatShortDuration(seconds: number): string {
            return this.FormatHMS(seconds).substr(0, 5);
        }

        /** give number nice format, optional parameter with number of digits */
        public FormatNumber(numberToFormat: number, fractionDigits?: number) {
            if ((numberToFormat !== undefined) && (numberToFormat !== null)) {
                if ((fractionDigits === undefined) || (fractionDigits === null)) {
                    fractionDigits = 2; //default value
                }

                var numberToFormatStr = numberToFormat.toFixed(fractionDigits) + '';
                var x = numberToFormatStr.split('.');
                var x1 = x[0];
                var x2 = x.length > 1 ? ',' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;

                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ' ' + '$2');
                }

                return x1 + x2;
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** weekday number, Sunday 1, Saturday 7 */
        public VBWeekday(date: Date) {
            if ((date !== undefined) && (date !== null)) {
                return date.getDay() + 1;
            }
            else {
                throw new Error('Parameter undefined or null.');
            }
        }

        /** 
        try to convert value/object to number
        @param value Object with value we need to convert to number
        @returns number converted from supplied object
        */
        public ScanNumber(value: any): number {
            //checking like this, since we can have also 0 passed in to "scan"
            if ((value !== undefined) && (value !== null)) {
                //is array?
                if (Object.prototype.toString.call(value) === '[object Array]') {
                    throw Error('unable to convert supplied array to number');
                }

                var outcome: number = Number(value);

                if (isNaN(outcome)) {
                    throw Error('unable to convert supplied object to number');
                } else {
                    return outcome;
                }
            } else {
                throw Error('no value supplied');
            }
        }
    }
}