import { yimo } from 'eslint-config-yimo'

export default yimo({}, {
  rules: { 'import-x/named': 'off' }, // TODO: in next version remove
  settings: { 'import-x/parsers': { 'hermes-eslint': ['.js'] } },
})
