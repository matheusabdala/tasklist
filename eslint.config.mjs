import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import googleConfig from 'eslint-config-google';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,jsx}']},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  googleConfig,
  {rules: {'require-jsdoc': 'off'}},
];
