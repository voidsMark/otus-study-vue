module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'no-empty-function': 'error',
    'no-useless-constructor': 'error',
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'quote-props': 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    'vue/require-v-for-key': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', {
      'json': 'always',
      'vue': 'always',
    }],
    'arrow-body-style': ['error', 'as-needed'],
    'semi': ['error', 'never'],
    'linebreak-style': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/attribute-hyphenation': ['error', 'never', {
      'ignore': [],
    }],
    'vue/v-on-event-hyphenation': ['error', 'never', {
      'autofix': false,
      'ignore': [],
    }],
  },
}
