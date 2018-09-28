module.exports = {
    
        "extends": [
          "airbnb",
          "plugin:react/recommended",
          "prettier",
          "prettier/react"
        ],
        "parser": "babel-eslint",
        "parserOptions": {
          "ecmaVersion": 8,
          "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true,
            "classes": true
          }
        },
        "env": {
          "browser": true,
          "node": true,
          "es6": true
        },
        "rules": {
          "react/jsx-filename-extension": 0,
          "quotes": [
            2,
            "single",
            {
              "avoidEscape": true,
              "allowTemplateLiterals": true
            }
          ],
          "radix:": 0,
          "react/prop-types": 0,
          "no-console": 2,
          "no-return-assign": 0,
          "jsx-a11y/label-has-for":0,
         "import/no-named-as-default": 0,
         "import/no-named-as-default-member": 0,
          "no-shadow": 0,
          "prettier/prettier": [
            "error",
            {
              "trailingComma": "es5",
              "singleQuote": true,
              "printWidth": 150,
              "tabWidth": 4
            }
          ]
        },
        "globals": {
          "__API_URL__": true,
          "__SOCKET_URL__": true,
          "__STRIPE_KEY__": true
        },
        "plugins": [
          "prettier"
        ]
      
      
};