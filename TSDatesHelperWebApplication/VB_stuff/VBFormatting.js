var VBDateTimeFormattingModule;
(function (VBDateTimeFormattingModule) {
    var VBFormattingHelpers = (function () {
        function VBFormattingHelpers() {
            this.monthNamesEng = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            this.dayNameEng = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        }
        VBFormattingHelpers.prototype.getTimeSeconds = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return (date.getSeconds() + (date.getMinutes() * 60) + (date.getHours() * 60 * 60));
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

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

        VBFormattingHelpers.prototype.FormatLongDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + this.monthNamesEng[parsedDate.month] + ' ' + parsedDate.year;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        VBFormattingHelpers.prototype.FormatShortDate = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var parsedDate = this.SplitDate(date);

                return parsedDate.date + '. ' + (parsedDate.month + 1) + '. ' + parsedDate.year;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        VBFormattingHelpers.prototype.FormatLongTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                return this.FormatHMS(this.getTimeSeconds(dateTime));
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        VBFormattingHelpers.prototype.FormatShortTime = function (dateTime) {
            if ((dateTime !== undefined) && (dateTime !== null)) {
                return this.FormatShortDuration(this.getTimeSeconds(dateTime));
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        VBFormattingHelpers.prototype.FormatWeek = function (date) {
            if ((date !== undefined) && (date !== null)) {
                var time, checkDate = new Date(date.getTime());

                checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

                time = checkDate.getTime();
                checkDate.setMonth(0);
                checkDate.setDate(1);

                return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        VBFormattingHelpers.prototype.FormatWeekDayName = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()].substr(0, 2);
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

        VBFormattingHelpers.prototype.FormatLongWeekDayName = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return this.dayNameEng[date.getDay()];
            } else {
                throw new Error('Parameter undefined or null.');
            }
        };

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

        VBFormattingHelpers.prototype.FormatShortDuration = function (seconds) {
            return this.FormatHMS(seconds).substr(0, 5);
        };

        VBFormattingHelpers.prototype.FormatNumber = function (numberToFormat, fractionDigits) {
            if (typeof fractionDigits === "undefined") { fractionDigits = 2; }
            if ((typeof fractionDigits !== "undefined") && (fractionDigits !== null)) {
                numberToFormat = parseFloat(numberToFormat);

                if (!isNaN(numberToFormat)) {
                    if (isNaN(fractionDigits)) {
                        fractionDigits = parseFloat(fractionDigits);
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
                    throw 'object supplied was not number';
                }
            } else {
                throw 'parameter undefined or null.';
            }
        };

        VBFormattingHelpers.prototype.VBWeekday = function (date) {
            if ((date !== undefined) && (date !== null)) {
                return date.getDay() + 1;
            } else {
                throw 'parameter undefined or null.';
            }
        };

        VBFormattingHelpers.prototype.ScanNumber = function (value) {
            if ((value !== undefined) && (value !== null)) {
                if (Object.prototype.toString.call(value) === '[object Array]') {
                    throw 'unable to convert supplied array to number';
                }

                var outcome = Number(value);

                if (isNaN(outcome)) {
                    throw 'unable to convert supplied object to number';
                } else {
                    return outcome;
                }
            } else {
                throw 'no value supplied';
            }
        };
        return VBFormattingHelpers;
    })();
    VBDateTimeFormattingModule.VBFormattingHelpers = VBFormattingHelpers;
})(VBDateTimeFormattingModule || (VBDateTimeFormattingModule = {}));
//# sourceMappingURL=VBFormatting.js.map
