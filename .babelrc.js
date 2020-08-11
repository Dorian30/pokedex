module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@hooks": "./src/hooks",
          "@interfaces": "./src/interfaces",
          "@assets": "./src/assets"
        }
      }
    ]
  ]
}
