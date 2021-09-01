import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './src/index.ts',
    plugins: [
      typescript({
        tsconfigDefaults: {
          compilerOptions: {
            declaration: true,
          },
        },
      }),
    ],
    output: {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'default',
    },
  },
  {
    input: './src/index.ts',
    plugins: [
      typescript(),
      terser(),
    ],
    output: {
      file: './dist/index.iife.js',
      format: 'iife',
      name: 'sivutin',
    },
  },
];
