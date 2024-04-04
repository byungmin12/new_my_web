module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended"
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["react", "react-hooks", "jsx-a11y"],
    parser: "@typescript-eslint/parser",
    rules: {
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/label-has-associated-control": [2, {
            "required": {
                "some": ["nesting", "id"]
            }
        }],
        "no-unused-vars": "warn",
        "no-useless-catch": 'warn',
        "react/no-unknown-property": "warn",
    },
    settings: {
        react: {version: "detect"}
    }
};