var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var VBDateTimeFormattingModule;
(function (VBDateTimeFormattingModule) {
    // Class
    var VBFormattingHelpers = (function (_super) {
        __extends(VBFormattingHelpers, _super);
        /** ctor */
        function VBFormattingHelpers() {
            _super.call(this);

            this.monthNamesEng = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            this.dayNameEng = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        }
        /**
        Returns time from start of the day in seconds
        */
        VBFormattingHelpers.prototype.getTimeSeconds = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return (date.getSeconds() + (date.getMinutes() * 60) + (date.getHours() * 60 * 60));
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** Splits and returns just date */
        VBFormattingHelpers.prototype.SplitDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var currDate = date.getDate();
                var currMonth = date.getMonth();
                var currYear = date.getFullYear();

                return { date: currDate, month: currMonth, year: currYear };
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** Splits and returns just time */
        VBFormattingHelpers.prototype.SplitTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                var currHours = dateTime.getHours();
                var currMinutes = dateTime.getMinutes();
                var currSeconds = dateTime.getSeconds();

                return { hours: currHours, minutes: currMinutes, seconds: currSeconds };
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 0)
        0 = vbGeneralDate - Default. Returns date: mm/dd/yy (/ or not depends on current culture) and time if specified: hh:mm:ss PM/AM.
        */
        VBFormattingHelpers.prototype.FormatShortDateAndTime = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.FormatShortDate(date);
                var parsedTime = this.FormatLongTime(date);

                if (parsedTime !== '00:00:00') {
                    return parsedDate + ' ' + this.FormatHMS(this.getTimeSeconds(date));
                } else {
                    return parsedDate;
                }
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
                return this.FormatHMS(this.getTimeSeconds(dateTime));
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 4) */
        VBFormattingHelpers.prototype.FormatShortTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                return this.FormatShortDuration(this.getTimeSeconds(dateTime));
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

                var divisorForMinutes = seconds % (60 * 60);
                var minutes = Math.floor(divisorForMinutes / 60);

                var divisorForSeconds = divisorForMinutes % 60;
                seconds = Math.ceil(divisorForSeconds);

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

        /** weekday number, Sunday 1, Saturday 7 */
        VBFormattingHelpers.prototype.VBWeekday = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return date.getDay() + 1;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };
        return VBFormattingHelpers;
    })(VBDateTimeFormattingModule.VBFormatNumber);
    VBDateTimeFormattingModule.VBFormattingHelpers = VBFormattingHelpers;
})(VBDateTimeFormattingModule || (VBDateTimeFormattingModule = {}));
