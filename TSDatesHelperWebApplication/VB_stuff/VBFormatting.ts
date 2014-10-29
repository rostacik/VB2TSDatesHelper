/// <reference path="utils.ts" />
/// <reference path="vbformatting.d.ts" />

module VBDateTimeFormattingModule {
    // Class
    export class VBFormattingHelpers implements IVBFormattingHelpers {
        /** helper object with DE names */
        private monthNamesDE: Array<string>;
        /** days names in DE - shorted */
        private dayNameDE: Array<string>;

        /** ctor */
        constructor() {
            this.monthNamesDE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            this.dayNameDE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        }

        /**
        Returns time from start of the day in seconds
        */
        private getTimeSeconds(date: Date): number {
            if (date) {
                return (date.getSeconds() + (date.getMinutes() * 60) + (date.getHours() * 60 * 60));
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * Splits and returns just date
        * @param date Date to be parsed
        * @return parsed object with numbers for date, month, year
        */
        public SplitDate(date: Date): { date: number; month: number; year: number } {
            if (date) {
                var currDate = date.getDate();
                var currMonth = date.getMonth();
                var currYear = date.getFullYear();

                return { date: currDate, month: currMonth, year: currYear };
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * Splits and returns just time
        * @param date Date to be parsed
        * @return parsed object with numbers hours, minutes, seconds
        */
        public SplitTime(dateTime: Date): { hours: number; minutes: number; seconds: number } {
            if (dateTime) {
                var currHours = dateTime.getHours();
                var currMinutes = dateTime.getMinutes();
                var currSeconds = dateTime.getSeconds();

                return { hours: currHours, minutes: currMinutes, seconds: currSeconds };
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as FormatDateTime(d, 0)
        * 0 = vbGeneralDate - Default. Returns date: mm/dd/yy (/ or not depends on current culture) and time if specified: hh:mm:ss PM/AM.
        * @param date Date to be parsed
        * @return formatted string
        */
        public FormatShortDateAndTime(date: Date): string {
            if (date) {
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
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as FormatDateTime(d, 1)
        * @param date Date to be parsed
        * @return formatted string
        */
        public FormatLongDate(date: Date): string {
            if (date) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + this.monthNamesDE[parsedDate.month]
                    + ' ' + parsedDate.year;
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as FormatDateTime(d, 2)
        * @param date Date to be parsed
        * @return formatted string
        */
        public FormatShortDate(date: Date): string {
            if (date) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + (parsedDate.month + 1) + '. '
                    + parsedDate.year;
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as FormatDateTime(d, 3)
        * @param dateTime Date and Time to be parsed
        * @return formatted string
        */
        public FormatLongTime(dateTime: Date): string {
            if (dateTime) {
                return this.FormatHMS(this.getTimeSeconds(dateTime));
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as FormatDateTime(d, 4)
        * @param dateTime Date and Time to be parsed
        * @return formatted string
        */
        public FormatShortTime(dateTime: Date): string {
            if (dateTime) {
                return this.FormatShortDuration(this.getTimeSeconds(dateTime));
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as DatePart ("ww", d, 2, 2)
        * @param date Date to be parsed
        * @return formatted number
        */
        public FormatWeek(date: Date): number {
            if (date) {
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
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as WeekdayName(Weekday(d, 0), true, 0)
        * @param date Date to be parsed
        * @return formatted string
        */
        public FormatWeekDayName(date: Date): string {
            if (date) {
                return this.dayNameDE[date.getDay()].substr(0, 2);
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * same as WeekdayName(Weekday(d, 0), false, 0)
        * @param date Date to be parsed
        * @return formatted string
        */
        public FormatLongWeekDayName(date: Date): string {
            if (date) {
                return this.dayNameDE[date.getDay()];
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * returns time from supplied seconds - HH:MM:SS
        * @param seconds Seconds to be parsed
        * @return formatted string
        */
        public FormatHMS(seconds: number): string {
            if ((typeof seconds !== "undefined") && (seconds !== null)) {
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
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * converts seconds to date, returns HH:MM
        * @param seconds Seconds to be parsed
        * @return formatted string
        */
        public FormatShortDuration(seconds: number): string {
            if ((typeof seconds !== "undefined") && (seconds !== null)) {
                return this.FormatHMS(seconds).substr(0, 5);
            }
            else {
                throw 'Parameter undefined or null.';
            }
        }

        /**
        * give number nice format, optional parameter with number of digits
        * @param numberToFormat Number of string to be formatted
        * @param fractionDigits Format to certain number of fractions - optional
        * @return formatted string
        */
        public FormatNumber(numberToFormat: any, fractionDigits: any = 2): string {
            if ((typeof numberToFormat !== "undefined") && (numberToFormat !== null)) {

                if ((typeof numberToFormat) === "string") {
                    numberToFormat = numberToFormat.replace(',', '.');
                    numberToFormat = numberToFormat.replace(/ /g, '');
                }

                numberToFormat = parseFloat(numberToFormat);

                if (!isNaN(numberToFormat)) {
                    if (isNaN(fractionDigits)) {
                        throw 'second object supplied was not number';
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
                    throw 'object supplied was not number';
                }
            }
            else {
                throw 'parameter undefined or null.';
            }
        }

        /**
        * weekday number, Sunday 1, Saturday 7
        * @param date Date to be parsed
        * @return number of the day
        */
        public VBWeekday(date: Date): number {
            if (date) {
                return date.getDay() + 1;
            }
            else {
                throw 'parameter undefined or null.';
            }
        }

        /**
        * convert value to number
        * @param value Object that needs to be converted to bumber
        * @return number from input
        */
        public ScanNumber(value: any): number {
            return utilsModule.ScanNumber(value);
        }
    }
}