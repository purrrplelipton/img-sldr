/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ACCESS_KEY: any;
  readonly VITE_APP_TITLE: string;
  // readonly ACCESS_KEY: string;
  // readonly SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
