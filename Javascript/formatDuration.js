console.log(formatDuration(3662));

function formatDuration (seconds) {
    if (seconds == 0) {
        return "now";
    }

    let result = []
    let units = {
        "year" : 31536000,
        "day" : 86400,
        "hour" : 3600,
        "minute" : 60,
        "second" : 1
    }

    Object.keys(units).sort(function(a, b) {return units[a] + units[b]}).forEach(unit => {
        if (!(units[unit] > seconds)) {
            let amount = Math.floor(seconds / units[unit]);
            result.push(amount == 1 ? amount + " " + unit : amount + " " + unit + "s");
            seconds = seconds % units[unit];
        }
    });

    console.log(result);

    return result.length == 1 ? result[0] : result.slice(0, -1).join(", ") + " and " + result[result.length - 1];
}
