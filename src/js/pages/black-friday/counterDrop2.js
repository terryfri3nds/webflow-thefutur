//GET LOCAL TIMEZONE
var tz = moment.tz.guess(true);

//CONVERT TO UTC
var utcDate = new moment(datesEndCounterBF.drop2).utc();

//CONVERT TO LOCAL TIMEZONE
let localDateUtcDrop2 = utcDate.tz(tz);

console.log(
  "localDateUtcDrop2",
  localDateUtcDrop2.format("YYYY/MM/DD HH:mm")
);

//SET COUNTER
$("#dropCountdown_02").countdown(
  localDateUtcDrop2.format("YYYY/MM/DD HH:mm"),
  function (event) {
    $(this).html(
      event.strftime(
        "" +
          '<div class="bf21coundown__number"><div class="bf21-coundown__border"><div class="bf21coundown__number-text is--grey-g">%D</div></div><span class="bf21coundown__detail">DAYS</span></div>' +
          '<div class="bf21coundown__number"><div class="bf21-coundown__border"><div class="bf21coundown__number-text is--grey-g">%H</div></div><span class="bf21coundown__detail">HOURS</span></div>' +
          '<div class="bf21coundown__number"><div class="bf21-coundown__border"><div class="bf21coundown__number-text is--grey-g">%M</div></div><span class="bf21coundown__detail">MINUTES</span></div>' +
          '<div class="bf21coundown__number"><div class="bf21-coundown__border"><div class="bf21coundown__number-text is--grey-g">%S</div></div><span class="bf21coundown__detail">SECONDS</span></div>'
      )
    );
  }
);