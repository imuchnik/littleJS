function Utilities(_) {
}
Utilities.prototype.concatinate = function () {
    var result = "";

    for (var i = 0; i < arguments.length; i++) {

        if (_.isString(arguments[i])) {
            result = result.concat(arguments[i]);
        }

        else if (_.isArray(arguments[i])) //array is passed in, concat all of it a values
        {
            for (var x = 0; x < arguments[i].length; x++) {
                if (_.isString(arguments[i][x])) {
                    result = result.concat(arguments[i][x]);
                }
                else {
                    result = "";
                    break;
                }
            }
        }

        else {
            result = "";
            break;
        }
    }
    return result;
};
