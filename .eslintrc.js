module.exports = {
  extends: ['wolox-react', 'wolox-typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      "babel-module": {
        root: ["./src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@hooks": "./src/hooks",
          "@interfaces": "./src/interfaces",
          "@assets": "./src/assets"
        }
      }
    }
  },
  rules: {
    'max-nested-callbacks': ['error', { max: 5 }],
    '@typescript-eslint/ban-ts-ignore': 'warn',
    'react/react-in-jsx-scope': 'off'
  }
};
