interface ImportMetaEnv {
  readonly LIB_NAME: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
