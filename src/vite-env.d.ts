interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_AUTH_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
