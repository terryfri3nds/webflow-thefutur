$( document ).ready(function() {
    
  var configItems = 
  {
      "items" : 
      [
          { /* During Drop 1*/  
              "name" : "drop1",
              "dateFrom"  : "2022-10-12T22:00:00+0000",
              "showItems" : [ "#bf21_DropActive_01", "#bf21_stickynav_Drop01", "#bf21_ActiveTag_01", "#bf21_ActiveTag_01_Mobile", "#bf21_ActiveBtn_01" , "#DropScroll_Image01_Reveal", "#DropScroll_Image01_Reveal_Mobile" ],
              "hideItems" : [ "#bf21_dropdownCounter", "#DropScroll_Image01", "#DropScroll_Image01_Mobile", "#bf21__dropdownCounter", "#bf21_WhatNextSection", "#bf21_Faq_01" ],
              "cssItems"	: [	{ "id" : ".b-nav-logo-embed", "key" : "color" , "value" : "black" },
                              { "id" : ".nav-link.wiz-nav-link", "key" : "color" , "value" : "black"	},
                              { "id" : ".b-burger-line-top", "key" : "background-color" , "value" : "black" },
                              { "id" : ".b-burger-line-middle", "key" : "background-color" , "value" : "black" },
                              { "id" : ".b-burger-line-bottom", "key" : "background-color" , "value" : "black" },]
          },
          { /* In between drop 1 and 2 */
              "name" : "In between drop 1 and 2",
              "dateFrom" 	: "2022-10-27T14:00:00+0000",
              "showItems"	: [ "#bf21_BetweenDrops", "#bf21_EndTag_01", "#bf21_EndTag_01_Mobile", "#bf21_GoneBtn_01", "#DropScroll_Image01_Reveal",  "#DropScroll_Image01_Reveal_Mobile" ],
              "hideItems" : [ "#DropScroll_Image01", "#bf21_BeforeDrops", "#bf21_DropActive_01", "#bf21_ActiveTag_01", "#bf21_ActiveTag_01_Mobile", "#bf21_ActiveBtn_01", "#bf21_WhatNextSection" ]
          },
          { /* Drop 2 */
              "name" : "Drop 2",
              "dateFrom" 	: "2022-10-29T14:00:00+0000", 
              "showItems"	: [ "#bf21_BeforeDrops", "#bf21_DropActive_02", "#bf21_stickynav_Drop02", "#bf21_ActiveTag_02", "#bf21_ActiveTag_02_Mobile", "#bf21_ActiveBtn_02", "#DropScroll_Image02_Reveal", "#DropScroll_Image02_Reveal_Mobile", "#bf21_EndTag_01", "#bf21_GoneBtn_01",  "#bf21_EndTag_01_Mobile","#DropScroll_Image01_Reveal", "#DropScroll_Image01_Reveal_Mobile"],
              "hideItems" : [ "#bf21__BetweenDrops", "#bf21_stickynav_Drop01", "#bf21__dropdownCounter", "#bf21_WhatNextSection", "#DropScroll_Image02", "#DropScroll_Image02_Mobile", "#DropScroll_Image01", "#DropScroll_Image01_Mobile" ]
          },
          { /* Drop 3 */
              "name" : "Drop 3",
              "dateFrom"  : "2022-10-30T14:00:00+0000", 
              "showItems" : [ "#bf21_DropActive_03", "#bf21_stickynav_Drop03", "#bf21_ActiveTag_03", "#bf21_ActiveTag_03_Mobile", "#bf21_ActiveBtn_03", "#bf21_EndTag_01", "#bf21_GoneBtn_01", "#bf21_EndTag_01_Mobile","#bf21_EndTag_02", "#bf21_GoneBtn_02", "#bf21_EndTag_02_Mobile", "#DropScroll_Image01_Reveal", "#DropScroll_Image01_Reveal_Mobile","#DropScroll_Image02_Reveal", "#DropScroll_Image02_Reveal_Mobile", "#DropScroll_Image03_Reveal", "#DropScroll_Image03_Reveal_Mobile"],
              "hideItems" : [ "#bf21_DropActive_02", "#bf21_stickynav_Drop01", "#bf21_stickynav_Drop02", "#bf21__dropdownCounter", "#bf21_WhatNextSection", "#bf21_ActiveTag_02", "#bf21_ActiveTag_02_Mobile", "#bf21_ActiveBtn_02", "#DropScroll_Image03", "#DropScroll_Image03_Mobile", "#DropScroll_Image02", "#DropScroll_Image02_Mobile","#DropScroll_Image01", "#DropScroll_Image01_Mobile"]
          },
          { /* Beetween Drop 3 and 4 */
              "name" : "Beetween Drop 3 and 4",
              "dateFrom"  : "2022-10-31T14:00:00+0000", 
              "showItems" : [ "#bf21_BetweenDrops", "#between-countdown-02",
                              "#bf21_EndTag_01", "#bf21_GoneBtn_01", "#bf21_EndTag_01_Mobile", "#bf21_EndTag_02", "#bf21_GoneBtn_02", "#bf21_EndTag_02_Mobile", "#bf21_EndTag_03", "#bf21_GoneBtn_03", "#bf21_EndTag_03_Mobile", "#DropScroll_Image01_Reveal", "#DropScroll_Image01_Reveal_Mobile", "#DropScroll_Image02_Reveal", "#DropScroll_Image02_Reveal_Mobile", "#DropScroll_Image03_Reveal", "#DropScroll_Image03_Reveal_Mobile" ],		"hideItems" : [ "#bf21_DropActive_03", "#bf21_ActiveTag_03", "#bf21_ActiveTag_03_Mobile", "#bf21_ActiveBtn_03", "#between-countdown-01", "#bf21_BeforeDrops", "#bf21_WhatNextSection",
                              "#DropScroll_Image03", "#DropScroll_Image03_Mobile", "#DropScroll_Image02", "#DropScroll_Image02_Mobile", "#DropScroll_Image01", "#DropScroll_Image01_Mobile" ]
          },   
          { /* Drop 4 page */
              "name" : "Drop 4 page",
              "dateFrom"  : "2022-11-04T14:00:00+0000", 
              "showItems" : [	"#bf21_DropActive_04", "#bf21_stickynav_Drop04", "#bf21_ActiveTag_04", "#bf21_ActiveTag_04_Mobile", "#bf21_ActiveBtn_04", "#bf21_EndTag_01", "#bf21_GoneBtn_01", "#bf21_EndTag_01_Mobile", "#bf21_EndTag_02", "#bf21_GoneBtn_02", "#bf21_GoneBtn_02_Mobile",
                              "#bf21_EndTag_03", "#bf21_GoneBtn_03", "#bf21_EndTag_03_Mobile", "#DropScroll_Image01_Reveal", "#DropScroll_Image01_Reveal_Mobile", "#DropScroll_Image02_Reveal", "#DropScroll_Image02_Reveal_Mobile", "#DropScroll_Image03_Reveal", "#DropScroll_Image03_Reveal_Mobile", "#DropScroll_Image04_Reveal", "#DropScroll_Image04_Reveal_Mobile"],
              "hideItems"   : [ "#bf21_stickynav_Drop01","#bf21_stickynav_Drop02", "#bf21_stickynav_Drop03", "#bf21__dropdownCounter", "#bf21_WhatNextSection",
                                  "#DropScroll_Image04", "#DropScroll_Image04_Mobile", "#DropScroll_Image03", "#DropScroll_Image03_Mobile", "#DropScroll_Image02", "#DropScroll_Image02_Mobile", "#DropScroll_Image01", "#DropScroll_Image01_Mobile"],
              "cssItems"	: [	{ "id" : ".b-nav-logo-embed", "key" : "color" , "value" : "black" },
                              { "id" : ".nav-link.wiz-nav-link", "key" : "color" , "value" : "black"	},
                              { "id" : ".b-burger-line-top", "key" : "background-color" , "value" : "black" },
                              { "id" : ".b-burger-line-middle", "key" : "background-color" , "value" : "black" },
                              { "id" : ".b-burger-line-bottom", "key" : "background-color" , "value" : "black" },]
          },
          { /*Black Friday page*/
              "name" : "Black Friday page",
              "dateFrom"  : "2022-11-12T18:00:00+0000", 
              "showItems" : [ 	"#bf21_MainSaleEvent", "#bf21_Courses", "#bf21_Faq_02",	"#bf21_EndTag_01", "#bf21_GoneBtn_01", "#bf21_EndTag_01_Mobile", "#bf21_EndTag_02", "#bf21_GoneBtn_02", "#bf21_GoneBtn_02_Mobile", "#bf21_EndTag_03", "#bf21_GoneBtn_03", "#bf21_EndTag_03_Mobile", "#bf21_EndTag_04", "#bf21_GoneBtn_04", "#bf21_EndTag_04_Mobile", "#DropScroll_Image01_Reveal", "#DropScroll_Image01_Reveal_Mobile", "#DropScroll_Image02_Reveal", "#DropScroll_Image02_Reveal_Mobile", "#DropScroll_Image03_Reveal", "#DropScroll_Image03_Reveal_Mobile", "#DropScroll_Image04_Reveal", "#DropScroll_Image04_Reveal_Mobile"],
              "hideItems" : [   "#bf21__BetweenDrops", "#bf21_DropActive_04", "#bf21drops", "#bf21_BeforeDrops", "#bf21_ActiveTag_04", "#bf21_ActiveTag_04_Mobile", "#bf21_ActiveBtn_04", "#bf21_Faq_01",	"#DropScroll_Image04", "#DropScroll_Image04_Mobile", "#DropScroll_Image03", "#DropScroll_Image03_Mobile", "#DropScroll_Image02", "#DropScroll_Image02_Mobile", "#DropScroll_Image01", "#DropScroll_Image01_Mobile"]
          },
          { /*Cyber Monday Page */ 
              "name" : "Cyber Monday Page",
              "dateFrom"  : "2022-11-19T14:00:00+0000", 
              "showItems" : [ "#bf21_DropActive_05", "#bf21_stickynav_Drop05", "#bf21_Events", "#bf21__WinterWorkshops_indrop", "#bf21__SaleExtended", "#bf21_Faq_03" ],
              "hideItems" : [ "#bf21_MainSaleEvent", "#bf21_Faq_01", "#bf21_BeforeDrops", "#bf21drops", "#bf21_WWCounterContainer", "#bf21_newlive_Title"],
              "cssItems"	: [	{ "id" : ".b-nav-logo-embed", "key" : "color" , "value" : "black" },
                              { "id" : ".nav-link.wiz-nav-link", "key" : "color" , "value" : "black"	},
                              { "id" : ".b-burger-line-top", "key" : "background-color" , "value" : "black" },
                              { "id" : ".b-burger-line-middle", "key" : "background-color" , "value" : "black" },
                              { "id" : ".b-burger-line-bottom", "key" : "background-color" , "value" : "black" },]
          },
          { /*After Drop 5 */
              "name" : "After Drop 5",
              "dateFrom"  : "2022-11-22T14:00:00+0000", 
                  "showItems" : [ "#bf21__WinterWorkshops", "#bf21_Events", "#bf21_Faq_ww" ],
                  "hideItems" : [ "#bf21_MainSaleEvent", "#bf21_Faq_01", "#bf21_BeforeDrops", "#bf21drops" ],
              "cssItems"	: [	{ "id" : ".b-nav-logo-embed", "key" : "color" , "value" : "black" },
                  { "id" : ".nav-link.wiz-nav-link", "key" : "color" , "value" : "black"	},
              { "id" : ".b-burger-line-top", "key" : "background-color" , "value" : "black" },
              { "id" : ".b-burger-line-middle", "key" : "background-color" , "value" : "black" },
              { "id" : ".b-burger-line-bottom", "key" : "background-color" , "value" : "black" },]
          },
          { /* Black Fridar Post Sale Page */ 
              "name" : "Black Fridar Post Sale Page",
              "dateFrom"  	: "2022-11-25T14:00:00+0000",
              "showItems" 	: [ "#bf21__PostSale" ],
              "hideItems"     : [ "#bf21_BeforeDrops", "#bf21drops", "#bf21_Faq_01" ]
          }
      ]
  };

  App = {

      Run: function(globalDateTime)
      {	
          for (i = 0; i < configItems.items.length; i++) {
          
              var currentItem = configItems.items[i];				
              const currentIndex = configItems.items.indexOf(currentItem);
              const nextIndex = currentIndex + 1;				
              var nextItem = configItems.items[currentIndex + 1];

              var dateCurrent = new moment(moment(), "YYYY-MM-DDTHH:mm").utc();
              //console.log("dateCurrent1",moment().format("YYYY-MM-DDTHH:mm Z"));
              if (globalDateTime)
                  dateCurrent = new moment(globalDateTime).utc();
               
              //console.log("dateCurrent",dateCurrent.format("YYYY-MM-DDTHH:mm Z"));

              var currentItemDateFrom = new moment(currentItem.dateFrom).utc();
              //console.log("currentItemDateFrom", currentItemDateFrom.format("YYYY-MM-DDTHH:mm Z"));

              //Si hoy es menor a fecha desde sigo con el otro elemento
              if (dateCurrent < currentItemDateFrom)
                  continue;	
              
             /* console.log("currentIndex",currentIndex)
              console.log("nextIndex", nextIndex)
              console.log("configItems.items.length",   configItems.items.length)
              */
            
              //si estoy en el ultimo elemento 
              if (nextIndex < configItems.items.length)
              {		
                  //Si hoy es mayor al siguiente elemento, no se hace nada y continuo con el otro elemento
                  var nextItemDateFrom = new moment(nextItem.dateFrom).utc();
                  //console.log("nextItemDateFrom", nextItemDateFrom.format("YYYY-MM-DDTHH:mm Z"));
                  if (dateCurrent >= nextItemDateFrom)	
                      continue;
              }		

              console.log("name", currentItem.name);
              //Actions	
              if (currentItem.showItems)
                  currentItem.showItems.forEach(key => { $(key).removeClass('hidden'); });
              
              if (currentItem.hideItems)
                  currentItem.hideItems.forEach(key => { $(key).addClass('hidden'); });
              
              if (currentItem.cssItems)
                  currentItem.cssItems.forEach(items => { $(items.id).css(items.key, items.value); });						
          }
      }
  }

  $.urlParam = function(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null){
         return null;
      }
      else{
         return results[1] || 0;
      }
  }	
  
  if ($.urlParam('timetravel') == null)
  {
      App.Run(); 
  }
  else
  {
      console.log($.urlParam('timetravel'));
      App.Run($.urlParam('timetravel')); 
  }

let sectionsVisible = 0;
  $('.js-number').each(function() {
    const isVisible = $(this).is(':visible');
      if (isVisible) {
          sectionsVisible += 1;
          $(this).html(`0${sectionsVisible}`);
      }
  });
});