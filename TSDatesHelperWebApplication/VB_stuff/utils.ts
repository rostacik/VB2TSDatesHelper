module utilsModule {
    /**
        * convert value to number
        * @param value Object that needs to be converted to bumber
        * @return number from input
        */
    export function ScanNumber(value: any): number {
        //checking like this, since we can have also 0 passed in to "scan"
        if ((value !== undefined) && (value !== null)) {
            //is array?
            if (Object.prototype.toString.call(value) === '[object Array]') {
                throw 'unable to convert supplied array to number';
            }

            if ((typeof value) === "string") {
                value = value.replace(',', '.');
            }

            var outcome: number = Number(value);

            if (isNaN(outcome)) {
                throw 'unable to convert supplied object to number';
            } else {
                return outcome;
            }
        } else {
            throw 'no value supplied';
        }
    }
}