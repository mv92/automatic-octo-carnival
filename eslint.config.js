// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
		],
		processor: angular.processInlineTemplates,
		rules: {
			// my overrides
			indent: ['error', 'tab'],
			'object-curly-spacing': ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],

			// angular rules
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'app',
					style: 'kebab-case',
				},
			],
		},
	},
	{
		files: ['**/*.html'],
		extends: [
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility,
		],
		rules: {},
	},
	{
		files: ['**/*.json'],
		rules: {
			indent: ['error', 'space'],
		},
	},
);
