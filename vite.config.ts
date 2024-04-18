// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  server: {
    origin: "localhost:3000/api/v1"
  },
  test: {
    name: 'example-tests',
    root: './tests',
    environment: 'node',
  },
})