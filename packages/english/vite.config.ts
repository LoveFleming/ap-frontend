import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    server: {
        port: 5173,
        cors: true, // 開啟全域 CORS，或進階設 origin

    },
    plugins: [
        react(),
        federation({
            name: 'englishArticle',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App.tsx',
                './IrregularVerbTable': './src/components/IrregularVerbTable.tsx',
                './ArticlePractice': './src/components/ArticlePractice.tsx'
            },
            shared: ['react', 'react-dom']
        })
    ],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
});