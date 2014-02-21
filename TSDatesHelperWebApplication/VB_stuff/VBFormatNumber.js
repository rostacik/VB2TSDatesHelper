var VBDateTimeFormattingModule;
(function (VBDateTimeFormattingModule) {
    var VBFormatNumber = (function () {
        function VBFormatNumber() {
        }
        /** give number nice format, optional parameter with number of digits */
        VBFormatNumber.prototype.FormatNumber = function (numberToFormat, fractionDigits) {
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
        return VBFormatNumber;
    })();
    VBDateTimeFormattingModule.VBFormatNumber = VBFormatNumber;
})(VBDateTimeFormattingModule || (VBDateTimeFormattingModule = {}));
