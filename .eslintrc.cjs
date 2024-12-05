module.exports = {
    env: {
        browser: true, // Para habilitar variables globales del navegador
        es2021: true,  // Para usar características modernas de ES
        node: true     // Para usar variables globales de Node.js
    },
    extends: [
        "eslint:recommended",               // Reglas básicas recomendadas de ESLint
        "plugin:@typescript-eslint/recommended", // Reglas específicas de TypeScript
        "plugin:playwright/recommended"     // Reglas específicas de Playwright
    ],
    parser: "@typescript-eslint/parser",    // Analizador para TypeScript
    parserOptions: {
        ecmaVersion: "latest",              // Soporte para ES más reciente
        sourceType: "module",               // Usar módulos ES (import/export)
        tsconfigRootDir: __dirname,         // Ruta base del tsconfig.json
        project: ['./tsconfig.json'],       // Archivos TypeScript a analizar
    },
    plugins: [
        "@typescript-eslint",               // Plugin para reglas de TypeScript
        "playwright"                        // Plugin de Playwright
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": ["warn"], // Advertencia para variables no usadas
        "playwright/no-wait-for-timeout": "warn",      // Advertencia para evitar esperas explícitas
        "playwright/expect-expect": "error"           // Requiere una aserción en cada prueba
    },
    overrides: [
        {
            files: [
                "*.ts",   // Archivos TypeScript
                "*.tsx"   // Archivos TypeScript con JSX
            ],
            rules: {
                "no-undef": "off" // TypeScript ya maneja esto
            }
        }
    ]
};
