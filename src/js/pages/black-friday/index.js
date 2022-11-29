/*addEventListener("DOMContentLoaded", (event) => {
  let pathname = window.location.href;
  console.log(pathname);
  if (pathname.includes("https://thefutur.com/black-friday"))
    window.location.href = "/404";
});*/

$(document).ready(function () {
  App = {
    Run: function (globalDateTime) {
      console.log("start process");
      for (i = 0; i < configItems.items.length; i++) {
        var currentItem = configItems.items[i];
        const currentIndex = configItems.items.indexOf(currentItem);
        const nextIndex = currentIndex + 1;
        var nextItem = configItems.items[currentIndex + 1];

        var dateCurrent = new moment(moment(), "YYYY-MM-DDTHH:mm").utc(); //convert local to UTC 0
        //var dateCurrent3 = new moment(globalDateTime, "YYYY-MM-DDTHH:mm").utc();
        //console.log("dateCurrent1",moment().format("YYYY-MM-DDTHH:mm Z"));
        if (globalDateTime) dateCurrent = new moment(globalDateTime).utc();

        // console.log("dateCurrent", dateCurrent.format("YYYY-MM-DDTHH:mm Z"));
        //console.log("dateCurrent3", dateCurrent3.format("YYYY-MM-DDTHH:mm Z"));

        var currentItemDateFrom = new moment(currentItem.dateFrom).utc();
        /*console.log(
          "currentItemDateFrom",
          currentItemDateFrom.format("YYYY-MM-DDTHH:mm Z")
        );
*/
        //Si hoy es menor a fecha desde sigo con el otro elemento
        if (dateCurrent < currentItemDateFrom) continue;

        //  console.log("currentIndex", currentIndex);
        //console.log("nextIndex", nextIndex);
        //console.log("configItems.items.length", configItems.items.length);

        //si estoy en el ultimo elemento
        if (nextIndex < configItems.items.length) {
          //Si hoy es mayor al siguiente elemento, no se hace nada y continuo con el otro elemento
          var nextItemDateFrom = new moment(nextItem.dateFrom).utc();
          /*console.log(
            "nextItemDateFrom",
            nextItemDateFrom.format("YYYY-MM-DDTHH:mm Z")
          );
          */
          if (dateCurrent > nextItemDateFrom) continue;
        }

        console.log("name", currentItem.name);

        //set title page
        document.title = "The Futur - " + currentItem.displayName;
        //Actions
        if (currentItem.showItems)
          currentItem.showItems.forEach((key) => {
            //console.log(key);
            $(key).removeClass("hidden");
          });

        if (currentItem.hideItems)
          currentItem.hideItems.forEach((key) => {
            $(key).addClass("hidden");
          });

        if (currentItem.cssItems)
          currentItem.cssItems.forEach((items) => {
            $(items.id).css(items.key, items.value);
          });

        // $("html, body").animate({ scrollTop: 0 }, 1000);
      }
    },
  };

  $.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    if (results == null) {
      return null;
    } else {
      return results[1] || 0;
    }
  };

  if ($.urlParam("timetravel") == null) {
    App.Run();
    setInterval(() => {
      App.Run();
    }, 5000);
  } else {
    console.log($.urlParam("timetravel"));
    App.Run($.urlParam("timetravel"));
  }

  let sectionsVisible = 0;
  $(".js-number").each(function () {
    const isVisible = $(this).is(":visible");
    if (isVisible) {
      sectionsVisible += 1;
      $(this).html(`0${sectionsVisible}`);
    }
  });
});
