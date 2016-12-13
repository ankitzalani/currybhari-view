exports.corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

exports.throwError = function(response, message) {
    response.json(200, {
        error: message
    });
}

exports.throwSuccess = function(response, obj) {
    if (obj) {
        response.json(200, obj);
    } else {
        response.json(200, {
            success: true
        });
    }
}

exports.convertToMoney = function(num) {
    return (num / 100).toFixed(2);
}
