/*$(document).ready(function () {
  App = {
    Run: function (globalDateTime) {
      for (i = 0; i < configItems.items.length; i++) {
        var currentItem = configItems.items[i];
        const currentIndex = configItems.items.indexOf(currentItem);
        const nextIndex = currentIndex + 1;
        var nextItem = configItems.items[currentIndex + 1];

        var dateCurrent = new moment(moment(), "YYYY-MM-DDTHH:mm").utc(); //convert local to UTC 0
        //var dateCurrent3 = new moment(globalDateTime, "YYYY-MM-DDTHH:mm").utc();
        //console.log("dateCurrent1",moment().format("YYYY-MM-DDTHH:mm Z"));
        if (globalDateTime) dateCurrent = new moment(globalDateTime).utc();

        console.log("dateCurrent", dateCurrent.format("YYYY-MM-DDTHH:mm Z"));
        //console.log("dateCurrent3", dateCurrent3.format("YYYY-MM-DDTHH:mm Z"));

        var currentItemDateFrom = new moment(currentItem.dateFrom).utc();
        console.log(
          "currentItemDateFrom",
          currentItemDateFrom.format("YYYY-MM-DDTHH:mm Z")
        );

        //Si hoy es menor a fecha desde sigo con el otro elemento
        if (dateCurrent < currentItemDateFrom) continue;

        console.log("currentIndex", currentIndex);
        //console.log("nextIndex", nextIndex);
        //console.log("configItems.items.length", configItems.items.length);

        //si estoy en el ultimo elemento
        if (nextIndex < configItems.items.length) {
          //Si hoy es mayor al siguiente elemento, no se hace nada y continuo con el otro elemento
          var nextItemDateFrom = new moment(nextItem.dateFrom).utc();
         
          if (dateCurrent > nextItemDateFrom) continue;
        }

        console.log("name", currentItem.name);
        console.log("pathname", window.location.pathname);
        let pathname = window.location.pathname;
        if (
          pathname === "/" ||
          pathname.includes("black-friday") ||
          pathname.includes("banners")
        ) {
          // Banner

          $("#bf-drop-displayname").html(currentItem.displayName);

          if (currentItem.name == "Black Friday Sale") {
            $("#bf_banner_bf").removeClass("hidden");
            $("#bf_banner_drops").addClass("hidden");
          } else if (currentItem.name.includes("drop")) {
            $("#bf_banner_drops").removeClass("hidden");
            $("#bf_banner_bf").addClass("hidden");
          }
        }
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
  } else {
    console.log($.urlParam("timetravel"));
    App.Run($.urlParam("timetravel"));
  }
});
*/