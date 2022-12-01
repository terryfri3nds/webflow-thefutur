function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$(document).ready(function () {
  $(".bf-popup-close").on("click", function () {
    $("body").removeClass("overflow-hidden");
  });

  App = {
    Run: function (globalDateTime) {
      for (i = 0; i < itemsPopUp.items.length; i++) {
        var currentItem = itemsPopUp.items[i];
        const currentIndex = itemsPopUp.items.indexOf(currentItem);
        const nextIndex = currentIndex + 1;
        var nextItem = itemsPopUp.items[currentIndex + 1];

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

        var pathname = window.location.pathname.split("/");
        console.log("pathname", pathname[1]);
        if (
          pathname[1] !== "black-friday" &&
          pathname[1] !== "shop" &&
          pathname[1] !== "animation-for-designers" &&
          pathname[1] !== "illustration-for-designers" &&
          pathname[1] !== "brand-strategy-fundamentals" &&
          pathname[1] !== "typography-01" &&
          pathname[1] !== "lettering" &&
          pathname[1] !== "positioning-and-lead-gen" &&
          pathname[1] !== "carousel-design" &&
          pathname[1] !== "design-thinking-guidebook" &&
          pathname[1] !== "instagram-workshop" &&
          window.location.pathname !==
            "/pro-group/progroup-registration-checkout"
        ) {
          // PopUp BF
          if (currentItem.name == "dropBF") {
            console.log("IF bfpopup: ", getCookie("bfpopup"));
            if (!getCookie("bfpopup")) {
              $(".bf-popup-wrapper").addClass("active");
              $("body").addClass("overflow-hidden");

              setCookie("bfpopup", true, 1);
              console.log("ON bfpopup: ", getCookie("bfpopup"));
            }
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
    // App.Run();
  } else {
    console.log($.urlParam("timetravel"));
    // App.Run($.urlParam("timetravel"));
  }
});
