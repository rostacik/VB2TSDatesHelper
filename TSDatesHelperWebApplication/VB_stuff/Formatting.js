// Module
var DateTimeFormattingModule;
(function (DateTimeFormattingModule) {
    // Class
    var FormattingHelpers = (function () {
        /** cotr */
        function FormattingHelpers() {
            this.monthNamesEng = new Array();
            this.monthNamesEng.push('January');
            this.monthNamesEng.push('February');
            this.monthNamesEng.push('March');
            this.monthNamesEng.push('April');
            this.monthNamesEng.push('May');
            this.monthNamesEng.push('June');
            this.monthNamesEng.push('July');
            this.monthNamesEng.push('August');
            this.monthNamesEng.push('September');
            this.monthNamesEng.push('October');
            this.monthNamesEng.push('November');
            this.monthNamesEng.push('December');

            this.dayNameEng = new Array();
            this.dayNameEng.push('sunday');
            this.dayNameEng.push('monday');
            this.dayNameEng.push('tuesday');
            this.dayNameEng.push('wednesday');
            this.dayNameEng.push('thursday');
            this.dayNameEng.push('friday');
            this.dayNameEng.push('saturday');
        }
        /** Splits and returns just date */
        FormattingHelpers.prototype.SplitDate = function (date) {
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
        FormattingHelpers.prototype.SplitTime = function (dateTime) {
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
        FormattingHelpers.prototype.FormatLongDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + this.monthNamesEng[parsedDate.month] + ' ' + parsedDate.year;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 2) */
        FormattingHelpers.prototype.FormatShortDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + (parsedDate.month + 1) + '. ' + parsedDate.year;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 3) */
        FormattingHelpers.prototype.FormatLongTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                var parsedTime = this.SplitTime(dateTime);

                return parsedTime.hours + ':' + parsedTime.minutes + ':' + parsedTime.seconds;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** same as FormatDateTime(d, 4) */
        FormattingHelpers.prototype.FormatShortTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                var parsedTime = this.SplitTime(dateTime);

                return parsedTime.hours + ':' + parsedTime.minutes;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** DatePart ("ww", d, 2, 2) */
        FormattingHelpers.prototype.FormatWeek = function (date) {
            if ((date !== undefined) && (date !== null)) {
                //stolen from jQuery UI, shame on me....
                var time, checkDate = new Date(date.getTime());

                // Find Thursday of this week starting on Monday
                checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

                time = checkDate.getTime();
                checkDate.setMonth(0);
                checkDate.setDate(1);

                return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** WeekdayName(Weekday(d, 0), true, 0) */
        FormattingHelpers.prototype.FormatWeekDayName = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()].substr(0, 2);
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** WeekdayName(Weekday(d, 0), false, 0) */
        FormattingHelpers.prototype.FormatLongWeekDayName = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()];
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        /** returns time from supplied seconds - HH:MM:SS */
        FormattingHelpers.prototype.FormatHMS = function (seconds) {
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
        FormattingHelpers.prototype.FormatShortDuration = function (seconds) {
            return this.FormatHMS(seconds).substr(0, 5);
        };

        /** give number nice format, optional parameter with number of digits */
        FormattingHelpers.prototype.FormatNumber = function (numberToFormat, fractionDigits) {
            if ((numberToFormat !== undefined) && (numberToFormat !== null)) {
                if ((fractionDigits === undefined) || (fractionDigits === null)) {
                    fractionDigits = 2;
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
        FormattingHelpers.prototype.VBWeekday = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return date.getDay() + 1;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };
        return FormattingHelpers;
    })();
    DateTimeFormattingModule.FormattingHelpers = FormattingHelpers;
})(DateTimeFormattingModule || (DateTimeFormattingModule = {}));
