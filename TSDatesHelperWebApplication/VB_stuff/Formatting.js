// Module refactore from VBScript part in p2form.htc file - new smaller p2form.ts is derving from this file - it could also use it with help of dependency injection
var VBDateTimeFormattingModule;
(function (VBDateTimeFormattingModule) {
    // Class
    var VBFormattingHelpers = (function () {
        /** cotr */
        function VBFormattingHelpers() {
            this.monthNamesEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            this.dayNameEng = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        }
        /** Splits and returns just date */
        VBFormattingHelpers.prototype.SplitDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var curr_date = date.getDate();

                //var curr_month = date.getMonth() + 1; //Months are zero based
                var curr_month = date.getMonth();
                var curr_year = date.getFullYear();

                return { date: curr_date, month: curr_month, year: curr_year };
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** Splits and returns just time */
        VBFormattingHelpers.prototype.SplitTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                var curr_hours = dateTime.getHours();
                var curr_minutes = dateTime.getMinutes();
                var curr_seconds = dateTime.getSeconds();

                return { hours: curr_hours, minutes: curr_minutes, seconds: curr_seconds };
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 1) */
        VBFormattingHelpers.prototype.FormatLongDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + this.monthNamesEng[parsedDate.month] + ' ' + parsedDate.year;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 2) */
        VBFormattingHelpers.prototype.FormatShortDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + (parsedDate.month + 1) + '. ' + parsedDate.year;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 3) */
        VBFormattingHelpers.prototype.FormatLongTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                var parsedTime = this.SplitTime(dateTime);

                return parsedTime.hours + ':' + parsedTime.minutes + ':' + parsedTime.seconds;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 4) */
        VBFormattingHelpers.prototype.FormatShortTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                var parsedTime = this.SplitTime(dateTime);

                return parsedTime.hours + ':' + parsedTime.minutes;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** DatePart ("ww", d, 2, 2) */
        VBFormattingHelpers.prototype.FormatWeek = function (date) {
            if ((date !== undefined) && (date !== null)) {
                //stolen from jQuery UI, shame on me....
                var time, checkDate = new Date(date.getTime());

                // Find Thursday of this week starting on Monday
                checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

                time = checkDate.getTime();
                checkDate.setMonth(0); // Compare with Jan 1
                checkDate.setDate(1);

                return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** WeekdayName(Weekday(d, 0), true, 0) */
        VBFormattingHelpers.prototype.FormatWeekDayName = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()].substr(0, 2);
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** WeekdayName(Weekday(d, 0), false, 0) */
        VBFormattingHelpers.prototype.FormatLongWeekDayName = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()];
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** returns time from supplied seconds - HH:MM:SS */
        VBFormattingHelpers.prototype.FormatHMS = function (seconds) {
            if ((seconds !== undefined) && (seconds !== null)) {
                var hoursStr, minutesStr, secondsStr;

                var hours = Math.floor(seconds / (60 * 60));

                var divisor_for_minutes = seconds % (60 * 60);
                var minutes = Math.floor(divisor_for_minutes / 60);

                var divisor_for_seconds = divisor_for_minutes % 60;
                var seconds = Math.ceil(divisor_for_seconds);

                if (hours < 10) {
                    hoursStr = '0' + hours;
                } else {
                    hoursStr = hours.toString();
                }

                if (minutes < 10) {
                    minutesStr = '0' + minutes;
                } else {
                    minutesStr = minutes.toString();
                }

                if (seconds < 10) {
                    secondsStr = '0' + seconds;
                } else {
                    secondsStr = seconds.toString();
                }

                return (hoursStr + ':' + minutesStr + ':' + secondsStr);
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** converts seconds to date, returns HH:MM */
        VBFormattingHelpers.prototype.FormatShortDuration = function (seconds) {
            return this.FormatHMS(seconds).substr(0, 5);
        };

        /** give number nice format, optional parameter with number of digits */
        VBFormattingHelpers.prototype.FormatNumber = function (numberToFormat, fractionDigits) {
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
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** weekday number, Sunday 1, Saturday 7 */
        VBFormattingHelpers.prototype.VBWeekday = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return date.getDay() + 1;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };
        return VBFormattingHelpers;
    })();
    VBDateTimeFormattingModule.VBFormattingHelpers = VBFormattingHelpers;
})(VBDateTimeFormattingModule || (VBDateTimeFormattingModule = {}));
//# sourceMappingURL=Formatting.js.map
