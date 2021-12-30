import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import markdown from '@jackfranklin/rollup-plugin-markdown';
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname, 'docs'),
    plugins: [react(), markdown()],
    resolve: {
        alias: {
            '@brewkit/components': resolve(__dirname, 'src'),
            docs: resolve(__dirname, 'docs/src'),
        },
    },
});
