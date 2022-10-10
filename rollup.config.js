import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/logger.js',
      format: 'cjs',
      plugins: [terser()],
    },
    {
      file: 'dist/logger.min.js',
      format: 'iife',
      name: 'yeLogger',
      plugins: [terser()],
    },
  ],
  plugins: [typescript({ compilerOptions: { target: 'es6' } }, terser())],
}
