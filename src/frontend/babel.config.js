module.exports = {
  presets: [
    '@babel/preset-env',

    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-class-properties',
    [
      'module-resolver',
      {
        root: [
          './'
        ]
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  },
  "exclude": []
};
