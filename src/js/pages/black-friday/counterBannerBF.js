
//$(document).ready(function () {

    var tz = moment.tz.guess(true);

    var utcDate = new moment(datesEndCounterBF.dropBFS).utc();

    console.log("datesBF.drop2", datesEndCounterBF.dropBFS)
    console.log("new moment(datesBF.drop2).utc()", utcDate.format('YYYY/MM/DD HH:mmZ'))
    console.log("moment(datesBF.drop2).tz(moment().format(z))", utcDate.tz(tz).format('YYYY/MM/DD HH:mmZ'))
    console.log("moment().forma Z", tz)
    let localDateUtcdropBFS = utcDate.tz(tz);

    console.log(localDateUtcdropBFS.format('YYYY/MM/DD HH:mm'))
        
    $('#bf_counter_banner').countdown(localDateUtcdropBFS.format('YYYY/MM/DD HH:mm'), function(event) {
        $(this).html(
            event.strftime(
            "" +
                '<span class="wiz-p-counter">%D:</span>' +
                '<span class="wiz-p-counter">%H:</span>' +
                '<span class="wiz-p-counter">%M:</span>' +
                '<span class="wiz-p-counter">%S</span>'
            )
        );
    });

//});