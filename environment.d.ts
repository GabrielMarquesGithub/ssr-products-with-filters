declare global {
  namespace NodeJS {
    //declarando as variáveis dentro do .env
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_API_BASE_URL: string;
    }
  }
}
