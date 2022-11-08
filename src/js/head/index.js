let pathname = window.location.href;
console.log(pathname);
if (pathname.includes("https://thefutur.com/black-friday"))
  window.location.href = "/404";

/* Horas de comienzo de los drops */
globalThis.datesBF = {
  drop1: "2022-11-15T15:00:00+0000",
  drop2: "2022-11-17T15:00:00+0000",
  drop23: "2022-11-19T15:00:00+0000",
  drop3: "2022-11-21T15:00:00+0000",
  dropBFS: "2022-11-23T15:00:00+0000",
  drop4: "2022-11-28T15:00:00+0000",
  dropBFPS: "2022-12-01T15:00:00+0000",
};

console.log("datesBF", datesBF);

/* Horas de finalizacion de los drops */
globalThis.datesEndCounterBF = {
  drop1: datesBF.drop2,
  drop2: datesBF.drop23,
  drop23: datesBF.drop3,
  drop3: datesBF.dropBFS,
  dropBFS: "2022-11-30T15:00:00+0000",
  drop4: "2022-11-30T15:00:00+0000",
};

console.log("datesEndCounterBF", datesEndCounterBF);

globalThis.configItems = {
  items: [
    {
      /* During Drop 1*/
      displayName: "The Branding Bundle",
      name: "drop1",
      dateFrom: datesBF.drop1,
      showItems: [
        "#bf21_DropActive_01",
        "#bf21_stickynav_Drop01",
        "#bf21_ActiveTag_01",
        "#bf21_ActiveTag_01_Mobile",
        "#bf21_ActiveBtn_01",
        "#DropScroll_Image01_Reveal",
        "#DropScroll_Image01_Reveal_Mobile",
        "#bf21_Faq_01",
      ],
      hideItems: [
        "#bf21_dropdownCounter",
        "#DropScroll_Image01",
        "#DropScroll_Image01_Mobile",
        "#bf21__dropdownCounter",
        "#bf21_WhatNextSection",
        "#bf21_Faq_02",
        "#bf21_Faq_03",
        "#bf21_Faq_ww",
        "#main-nav",
      ],
      cssItems: [
        { id: ".b-nav-logo-embed", key: "color", value: "black" },
        { id: ".nav-link.wiz-nav-link", key: "color", value: "black" },
        { id: ".b-burger-line-top", key: "background-color", value: "black" },
        {
          id: ".b-burger-line-middle",
          key: "background-color",
          value: "black",
        },
        {
          id: ".b-burger-line-bottom",
          key: "background-color",
          value: "black",
        },
      ],
    },

    {
      /* Drop 2 */
      displayName: "Agency In A Box Vol IV",
      name: "drop2",
      dateFrom: datesBF.drop2,
      showItems: [
        "#bf21_BeforeDrops",
        "#bf21_DropActive_02",
        "#bf21_stickynav_Drop02",
        "#bf21_ActiveTag_02",
        "#bf21_ActiveTag_02_Mobile",
        "#bf21_ActiveBtn_02",
        "#DropScroll_Image02_Reveal",
        "#DropScroll_Image02_Reveal_Mobile",
        "#bf21_EndTag_01",
        "#bf21_GoneBtn_01",
        "#bf21_EndTag_01_Mobile",
        "#DropScroll_Image01_Reveal",
        "#DropScroll_Image01_Reveal_Mobile",
        "#bf21_Faq_02",
        "#main-nav",
      ],
      hideItems: [
        "#bf21__BetweenDrops",
        "#bf21_stickynav_Drop01",
        "#bf21__dropdownCounter",
        "#bf21_WhatNextSection",
        "#DropScroll_Image02",
        "#DropScroll_Image02_Mobile",
        "#DropScroll_Image01",
        "#DropScroll_Image01_Mobile",
        "#bf21_Faq_01",
        "#bf21_Faq_03",
        "#bf21_Faq_ww",
      ],
    },
    {
      /* In between drop 1 and 2 */
      displayName: "In between 2 and 3",
      name: "In between 2 and 3",
      dateFrom: datesBF.drop23,
      showItems: [
        "#bf21_BetweenDrops",
        "#bf21_EndTag_01",
        "#bf21_EndTag_01_Mobile",
        "#bf21_GoneBtn_01",
        "#DropScroll_Image01_Reveal",
        "#DropScroll_Image01_Reveal_Mobile",
      ],
      hideItems: [
        "#DropScroll_Image01",
        "#bf21_BeforeDrops",
        "#bf21_DropActive_01",
        "#bf21_ActiveTag_01",
        "#bf21_ActiveTag_01_Mobile",
        "#bf21_ActiveBtn_01",
        "#bf21_WhatNextSection",
        "#main-nav",
      ],
    },
    {
      /* Drop 3 */
      displayName: "The Polished Portfolio",
      name: "drop3",
      dateFrom: datesBF.drop3,
      showItems: [
        "#bf21_DropActive_03",
        "#bf21_stickynav_Drop03",
        "#bf21_ActiveTag_03",
        "#bf21_ActiveTag_03_Mobile",
        "#bf21_ActiveBtn_03",
        "#bf21_EndTag_01",
        "#bf21_GoneBtn_01",
        "#bf21_EndTag_01_Mobile",
        "#bf21_EndTag_02",
        "#bf21_GoneBtn_02",
        "#bf21_EndTag_02_Mobile",
        "#DropScroll_Image01_Reveal",
        "#DropScroll_Image01_Reveal_Mobile",
        "#DropScroll_Image02_Reveal",
        "#DropScroll_Image02_Reveal_Mobile",
        "#DropScroll_Image03_Reveal",
        "#DropScroll_Image03_Reveal_Mobile",
        "#bf21_Faq_03",
      ],
      hideItems: [
        "#bf21_DropActive_02",
        "#bf21_stickynav_Drop01",
        "#bf21_stickynav_Drop02",
        "#bf21__dropdownCounter",
        "#bf21_WhatNextSection",
        "#bf21_ActiveTag_02",
        "#bf21_ActiveTag_02_Mobile",
        "#bf21_ActiveBtn_02",
        "#DropScroll_Image03",
        "#DropScroll_Image03_Mobile",
        "#DropScroll_Image02",
        "#DropScroll_Image02_Mobile",
        "#DropScroll_Image01",
        "#DropScroll_Image01_Mobile",
        "#bf21_Faq_01",
        "#bf21_Faq_02",
        "#bf21_Faq_ww",
        "#main-nav",
      ],
    },
    {
      /* Black Friday Sale */
      displayName: "Black Friday is here!",
      name: "Black Friday Sale",
      dateFrom: datesBF.dropBFS,
      showItems: [
        "#bf21_MainSaleEvent",
        "#bf21_Courses",
        "#bf21_Faq_02",
        "#bf21_EndTag_01",
        "#bf21_GoneBtn_01",
        "#bf21_EndTag_01_Mobile",
        "#bf21_EndTag_02",
        "#bf21_GoneBtn_02",
        "#bf21_GoneBtn_02_Mobile",
        "#bf21_EndTag_03",
        "#bf21_GoneBtn_03",
        "#bf21_EndTag_03_Mobile",
        "#bf21_EndTag_04",
        "#bf21_GoneBtn_04",
        "#bf21_EndTag_04_Mobile",
        "#DropScroll_Image01_Reveal",
        "#DropScroll_Image01_Reveal_Mobile",
        "#DropScroll_Image02_Reveal",
        "#DropScroll_Image02_Reveal_Mobile",
        "#DropScroll_Image03_Reveal",
        "#DropScroll_Image03_Reveal_Mobile",
        "#DropScroll_Image04_Reveal",
        "#DropScroll_Image04_Reveal_Mobile",
      ],
      hideItems: [
        "#bf21__BetweenDrops",
        "#bf21_DropActive_04",
        "#bf21drops",
        "#bf21_BeforeDrops",
        "#bf21_ActiveTag_04",
        "#bf21_ActiveTag_04_Mobile",
        "#bf21_ActiveBtn_04",
        "#bf21_Faq_01",
        "#DropScroll_Image04",
        "#DropScroll_Image04_Mobile",
        "#DropScroll_Image03",
        "#DropScroll_Image03_Mobile",
        "#DropScroll_Image02",
        "#DropScroll_Image02_Mobile",
        "#DropScroll_Image01",
        "#DropScroll_Image01_Mobile",
      ],
    },
    {
      /* Drop 4 page */
      displayName: "The Workshop Vault…",
      name: "drop4",
      dateFrom: datesBF.drop4,
      showItems: [
        "#bf21_DropActive_04",
        "#bf21_stickynav_Drop04",
        "#bf21_ActiveTag_04",
        "#bf21_ActiveTag_04_Mobile",
        "#bf21_ActiveBtn_04",
        "#bf21_EndTag_01",
        "#bf21_GoneBtn_01",
        "#bf21_EndTag_01_Mobile",
        "#bf21_EndTag_02",
        "#bf21_GoneBtn_02",
        "#bf21_GoneBtn_02_Mobile",
        "#bf21_EndTag_03",
        "#bf21_GoneBtn_03",
        "#bf21_EndTag_03_Mobile",
        "#DropScroll_Image01_Reveal",
        "#DropScroll_Image01_Reveal_Mobile",
        "#DropScroll_Image02_Reveal",
        "#DropScroll_Image02_Reveal_Mobile",
        "#DropScroll_Image03_Reveal",
        "#DropScroll_Image03_Reveal_Mobile",
        "#DropScroll_Image04_Reveal",
        "#DropScroll_Image04_Reveal_Mobile",
      ],
      hideItems: [
        "#bf21_stickynav_Drop01",
        "#bf21_stickynav_Drop02",
        "#bf21_stickynav_Drop03",
        "#bf21__dropdownCounter",
        "#bf21_WhatNextSection",
        "#DropScroll_Image04",
        "#DropScroll_Image04_Mobile",
        "#DropScroll_Image03",
        "#DropScroll_Image03_Mobile",
        "#DropScroll_Image02",
        "#DropScroll_Image02_Mobile",
        "#DropScroll_Image01",
        "#DropScroll_Image01_Mobile",
      ],
      cssItems: [
        { id: ".b-nav-logo-embed", key: "color", value: "black" },
        { id: ".nav-link.wiz-nav-link", key: "color", value: "black" },
        { id: ".b-burger-line-top", key: "background-color", value: "black" },
        {
          id: ".b-burger-line-middle",
          key: "background-color",
          value: "black",
        },
        {
          id: ".b-burger-line-bottom",
          key: "background-color",
          value: "black",
        },
      ],
    },
    /*   {
        /*Cyber Monday Page /
        name: "Cyber Monday Page",
        dateFrom: "2022-11-30T00:00:00+0000",
        showItems: [
          "#bf21_DropActive_05",
          "#bf21_stickynav_Drop05",
          "#bf21_Events",
          "#bf21__WinterWorkshops_indrop",
          "#bf21__SaleExtended",
          "#bf21_Faq_03",
        ],
        hideItems: [
          "#bf21_MainSaleEvent",
          "#bf21_Faq_01",
          "#bf21_BeforeDrops",
          "#bf21drops",
          "#bf21_WWCounterContainer",
          "#bf21_newlive_Title",
        ],
        cssItems: [
          { id: ".b-nav-logo-embed", key: "color", value: "black" },
          { id: ".nav-link.wiz-nav-link", key: "color", value: "black" },
          { id: ".b-burger-line-top", key: "background-color", value: "black" },
          {
            id: ".b-burger-line-middle",
            key: "background-color",
            value: "black",
          },
          {
            id: ".b-burger-line-bottom",
            key: "background-color",
            value: "black",
          },
        ],
      },*/
    {
      /* Black Fridar Post Sale Page */
      name: "Black Fridar Post Sale Page",
      dateFrom: datesBF.dropBFPS,
      showItems: ["#bf21__PostSale"],
      hideItems: ["#bf21_BeforeDrops", "#bf21drops", "#bf21_Faq_01"],
    },
  ],
};

console.log("configItems", configItems);

globalThis.itemsPopUp = {
  items: [
    {
      /* Show Pop UP */
      displayName: "BF",
      name: "dropBF",
      dateFrom: "2022-11-08T13:00:00+0000",
    },
    {
      /* Not Show Pop UP */
      displayName: "BF End",
      name: "dropEnd",
      dateFrom: "2022-11-30T05:00:00+0000",
    },
  ],
};
