// https://stackoverflow.com/questions/76439439/using-postcss-global-data-with-next-js
module.exports = {
  plugins: [
    [
      "@csstools/postcss-global-data",
      {
        files: ["src/ui/globals/media.css"],
      },
    ],
    [
      "postcss-preset-env",
      {
        stage: 3,
        features: {
          "custom-media-queries": true,
          "nesting-rules": true,
        },
      },
    ],
  ],
};
