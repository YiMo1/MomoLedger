import { yimo } from 'eslint-config-yimo'

export default yimo({}, {
  settings: { 'import-x/parsers': { 'hermes-eslint': ['.js'] } },
})
