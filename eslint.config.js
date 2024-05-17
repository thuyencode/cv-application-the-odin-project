// @ts-check

import eslint from '@eslint/js'
import react from '@eslint-react/eslint-plugin'
import ts_eslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...ts_eslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...react.configs.recommended
  }
]
