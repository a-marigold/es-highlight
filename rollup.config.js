import { defineConfig } from 'rollup';

import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import postcss from 'rollup-plugin-postcss';

import terser from '@rollup/plugin-terser';

export default defineConfig([
    {
        input: './src/index.ts',

        external: ['./src/__tests__/**'],

        output: {
            file: './dist/index.js',
            format: 'esm',
        },
        plugins: [
            typescript({ exclude: ['**__tests__/**'] }),
            terser(),
            postcss({
                minimize: true,
                modules: { generateScopedName: '[local]__[hash:base64:6]' },
                extract: true,
            }),
        ],
    },

    {
        input: './src/index.ts',

        external: ['./src/__tests__/**'],

        output: {
            file: './dist/index.d.ts',

            format: 'esm',
        },

        plugins: [dts()],
    },
]);
