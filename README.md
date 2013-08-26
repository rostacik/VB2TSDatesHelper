VBScript to TypeScript Dates Helper
=

What is this project about
-
This is mall JavaScript library, generated in TypeScript and unit tested with tsUnit to simulate some of VBScript stuff namely :

- FormatDateTime (with 1,2,3 and 4 param),
- DatePart with ww param,
- WeekdayName

and bunch of other stuff I needed for one legacy project, maybe it will suite your needs or you can reuse existing stuff. Feel free to use, reuse, derive, misuse and abuse.

Content
-
Formatting.ts - contains all the logic implemented with Interface and Class.
FormattingTests.ts - contains unit tests implemented with tsUnit.
FormattingTests.html - contains small markup to hold all needed css and js files for tests.

Samples
-
Best samples you will find in tsUnit file, anyway these are some common usages:

```javascript
var res = this.target.FormatLongDate(new Date("February 13, 1975 11:13:00"));
this.areIdentical('13. February 1975', res);

var res = this.target.FormatShortDate(new Date("February 13, 1975 11:13:00"));
this.areIdentical('13. 2. 1975', res);

var res = this.target.FormatLongTime(new Date("February 13, 1975 11:13:19"));
this.areIdentical('11:13:19', res);

var res = this.target.FormatWeek(new Date("December 27, 2013 20:30:40"));
this.areIdentical(52, res);

var res = this.target.FormatWeekDayName(new Date("December 29, 2013 20:30:40"));
this.areIdentical('su', res);

var res = this.target.FormatLongWeekDayName(new Date("August 26, 2013 20:30:40"));
this.areIdentical('monday', res);

var res = this.target.FormatHMS(3723);
this.areIdentical('01:02:03', res);

var res = this.target.FormatNumber(99900630);
this.areIdentical('99 900 630,00', res);

var res = this.target.VBWeekday(new Date("August 25, 2013 20:30:40"));
this.areIdentical(1, res);
```
Used tools
-
VS2012, TypeScript 0.9.1.1