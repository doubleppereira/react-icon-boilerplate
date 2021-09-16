module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    { name: 'preset-default' },
    'sortAttrs',
    'removeScriptElement',
    'removeDimensions',
    'removeScriptElement',
    'removeDimensions',
    // Uncomment these options if you want to have cleaner optimized icons.
    // {
    //   name: 'removeElementsByAttr',
    //   params: {
    //     id: 'a',
    //   },
    // },
    // {
    //   name: 'removeAttrs',
    //   params: {
    //     attrs: 'mask',
    //   },
    // },
  ],
};
