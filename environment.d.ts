export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number;
      JWT_SECRATE: string;
    }
  }
}
