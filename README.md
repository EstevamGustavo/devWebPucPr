# Somativa 1

Aplicação em React com cadastro e login de usuários, usando Firebase Authentication (e-mail/senha) e Firestore para os dados de perfil.

## Configuração

Crie um arquivo `.env` na raiz do projeto com as credenciais do seu projeto Firebase (veja `.env.example`):

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

No Firebase, habilite o provedor E-mail/senha em Authentication e crie um banco Firestore.

## Rodando localmente

```
npm install
npm run dev
```

## Deploy

O projeto está pronto para deploy no Azure Static Web Apps (workflow em `.github/workflows/azure-static-web-apps.yml`). Cadastre as variáveis `VITE_FIREBASE_*` e `AZURE_STATIC_WEB_APPS_API_TOKEN` como secrets do repositório no GitHub.
