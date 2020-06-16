module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--mode-tab": "(min-width: 980px)" },
        },
        {
          customMedia: { "--mode-desk": "(min-width: 1270px)" },
        },
      ],
    },
  },
};
