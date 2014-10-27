//declaration of module

declare module VBDateTimeFormattingModule {

    //description of interface
    export interface IVBFormattingHelpers {
        /**
        * Splits and returns just date
        * @param date Date to be parsed
        * @return parsed object with numbers for date, month, year
        */
        SplitDate(date: Date): {
            date: number;
            month: number;
            year: number;
        };

        /**
        * Splits and returns just time
        * @param date Date to be parsed
        * @return parsed object with numbers hours, minutes, seconds
        */
        SplitTime(dateTime: Date): {
            hours: number;
            minutes: number;
            seconds: number;
        };

        /**
        * same as FormatDateTime(d, 0)
        * 0 = vbGeneralDate - Default. Returns date: mm/dd/yy (/ or not depends on current culture) and time if specified: hh:mm:ss PM/AM.
        * @param date Date to be parsed
        * @return formatted string
        */
        FormatShortDateAndTime(date: Date): string;

        /**
        * same as FormatDateTime(d, 1)
        * @param date Date to be parsed
        * @return formatted string
        */
        FormatLongDate(date: Date): string;

        /**
        * same as FormatDateTime(d, 2)
        * @param date Date to be parsed
        * @return formatted string
        */
        FormatShortDate(date: Date): string;

        /**
        * same as FormatDateTime(d, 3)
        * @param dateTime Date and Time to be parsed
        * @return formatted string
        */
        FormatLongTime(dateTime: Date): string;

        /**
        * same as FormatDateTime(d, 4)
        * @param dateTime Date and Time to be parsed
        * @return formatted string
        */
        FormatShortTime(dateTime: Date): string;

        /**
        * same as DatePart ("ww", d, 2, 2)
        * @param date Date to be parsed
        * @return formatted number
        */
        FormatWeek(date: Date): number;

        /**
        * same as WeekdayName(Weekday(d, 0), true, 0)
        * @param date Date to be parsed
        * @return formatted string
        */
        FormatWeekDayName(date: Date): string;

        /**
        * same as WeekdayName(Weekday(d, 0), false, 0)
        * @param date Date to be parsed
        * @return formatted string
        */
        FormatLongWeekDayName(date: Date): string;

        /**
        * returns time from supplied seconds - HH:MM:SS
        * @param seconds Seconds to be parsed
        * @return formatted string
        */
        FormatHMS(seconds: number): string;

        /**
        * converts seconds to date, returns HH:MM
        * @param seconds Seconds to be parsed
        * @return formatted string
        */
        FormatShortDuration(seconds: number): string;

        /**
        * give number nice format, optional parameter with number of digits
        * @param numberToFormat Number to be formatted
        * @param fractionDigits Format to certain number of fractions - optional
        * @return formatted string
        */
        FormatNumber(numberToFormat: number, fractionDigits?: number): string;

        /**
        * give number nice format, optional parameter with number of digits
        * @param numberToFormat String containing number to be formatted
        * @param fractionDigits Format to certain number of fractions - optional
        */
        FormatNumber(numberToFormat: string, fractionDigits?: string): string;

        /**
        * weekday number, Sunday 1, Saturday 7
        * @param date Date to be parsed
        * @return number of the day
        */
        VBWeekday(date: Date): number;

        /**
        * convert value to number
        * @param value Object that needs to be converted to bumber
        * @return number from input
        */
        ScanNumber(value: any): number;
    }
}