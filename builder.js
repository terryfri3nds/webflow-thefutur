require("esbuild").buildSync({
  entryPoints: [
    "src/js/body/index.js",
    "src/js/head/index.js",
    "src/js/pages/black-friday/index.js",

    "src/css/body/style.css",
    "src/css/head/style.css",
  ],
  bundle: true,
  minify: true,
  sourcemap: true,
  outExtension: { ".js": ".min.js", ".css": ".min.css" },
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outdir: "dist",
});
