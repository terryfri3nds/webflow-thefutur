require("esbuild").buildSync({
  entryPoints: [

    'api-cms/src/cms/populate/index.ts',
    "src/js/body/index.js",
    "src/js/head/index.js",
    "src/js/pages/black-friday/index.js",
    "src/js/pages/black-friday/counterBeforeDrops.js",
    "src/js/pages/black-friday/counterDrop1.js",
    "src/js/pages/black-friday/counterDrop2.js",
    "src/js/pages/black-friday/counterDrop3.js",
    "src/js/pages/black-friday/counterBetween23.js",
    "src/js/pages/black-friday/counterDrop4.js",
    "src/js/pages/black-friday/counterBF.js",
    "src/js/pages/black-friday/banners.js",
    "src/js/pages/black-friday/popup.js",
    "src/js/pages/black-friday/counterBannerBF.js",
    
    "src/css/body/style.css",
    "src/css/head/style.css",
  ],
  bundle: true,
  minify: true,
  sourcemap: false,
  outExtension: { ".js": ".min.js", ".css": ".min.css" },
 //target: ["chrome58", "firefox57", "safari11", "edge16"],
  outdir: "dist",
});
