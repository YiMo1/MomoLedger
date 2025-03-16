import { yimo } from 'eslint-config-yimo'

export default yimo({}, {
  settings: { 'import-x/parsers': { 'hermes-eslint': ['.js'] } },
  rules: {
    'stylistic/jsx-self-closing-comp': [ // next version remove
      'error', {
        component: true,
        html: true,
      },
    ],
    // next version remove
    'stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],
  },
})
