/* eslint-disable no-console */
import esbuild from 'esbuild';

const buildDirectory = '../dist';
const production = process.env.NODE_ENV === 'production';

// Config entrypoint files
const entryPoints = [
  'src/cms/populate/index.ts',
  'src/cms/populate/courses.ts',
  'src/cms/populate/videos.ts',
  'src/cms/populate/podcasts.ts',
  'src/cms/populate/blogs.ts',
  'src/cms/populate/testimonials.ts'
];

/**
 * Default Settings
 * @type {esbuild.BuildOptions}
 */
const defaultSettings = {
  bundle: true,
  outdir: buildDirectory,
  minify: false,
  sourcemap: !production,
  target: 'esnext',
  entryPoints,
};

// Files building
if (production) {
  esbuild.build(defaultSettings);
}

// Files serving
else {
  esbuild
    .serve(
      {
        servedir: buildDirectory,
        port: 3000,
      },
      defaultSettings
    )
    .then((server) => {
      console.log(`Serving at http://localhost:${server.port}`);
    });
}
