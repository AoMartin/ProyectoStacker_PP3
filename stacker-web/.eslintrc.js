module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        //'plugin:prettier/recommended'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        //"prettier"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        //"prettier/prettier": "warn",
        "linebreak-style": 0,
        "no-unused-vars": 0,
        "react/prop-types": 0,
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["@mui/*/*/*", "!@mui/material/test-utils/*"]
            }
        ]
    }
};
