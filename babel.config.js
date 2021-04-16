module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
    // @babel/preset-env是一个智能预设，可让您使用最新的JavaScript
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
