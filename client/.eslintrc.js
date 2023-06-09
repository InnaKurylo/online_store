module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:jsx-a11y/strict",
		"airbnb",
	],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"spaced-comment": "off",
		"operator-linebreak": "off",
		"react-hooks/exhaustive-deps": 0,
		"no-console": 0,
		"linebreak-style": "off",
		"no-trailing-spaces": ["error", { skipBlankLines: true }],
		"object-curly-newline": 0,
		quotes: ["error", "double"],
		"jsx-quotes": ["error", "prefer-double"],
		"implicit-arrow-linebreak": "off",
		"react/function-component-definition": "off",
		"no-lonely-if": "off",
		"react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
		"react/jsx-one-expression-per-line": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/alt-text": 0,
		"jsx-a11y/no-autofocus": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"react/jsx-no-useless-fragment": "off",
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"react/jsx-boolean-value": "off",
		"react/no-array-index-key": 0,
		"arrow-body-style": "off",
		"no-return-assign": 0,
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"react/self-closing-comp": [
			"error",
			{
				component: true,
				html: true,
			},
		],
		tab_size: 0,
		indent: 0,
		translate_tabs_to_spaces: 0,
		"eol-last": 0,
		"no-tabs": 0,
		ignoredNodes: 0,
		"react/prop-types": [0],
		"react/require-default-props": "off",
		"react/jsx-indent": [0],
		"react/jsx-indent-props": [2, "tab"],
		semi: 0,
		camelcase: 0,
		"object-curly-spacing": 0,
		"comma-dangle": 0,
		"react/react-in-jsx-scope": "off",
		"no-unused-vars": "off",
		"no-undef": "off",
		"no-restricted-exports": "off",
		"no-param-reassign": "off",
		"jsx-a11y/no-noninteractive-element-interactions": "off",
		"prettier/prettier": ["error", { endOfLine: "auto" }],
		"react/jsx-props-no-spreading": "off",
		"no-underscore-dangle": "off",
		"react/jsx-wrap-multilines": "off",
	},
};
