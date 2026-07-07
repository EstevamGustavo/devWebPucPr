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

### Azure Static Web Apps

O projeto está pronto para deploy no Azure Static Web Apps (workflow em `.github/workflows/azure-static-web-apps.yml`). Cadastre as variáveis `VITE_FIREBASE_*` e `AZURE_STATIC_WEB_APPS_API_TOKEN` como secrets do repositório no GitHub.

### GitHub Pages

O workflow `.github/workflows/gh-pages.yml` publica o build em GitHub Pages a cada push na `master`.

1. Cadastre as variáveis `VITE_FIREBASE_*` como secrets do repositório (**Settings → Secrets and variables → Actions**).
2. Em **Settings → Pages**, mude "Source" para **GitHub Actions**.
3. Dê um push na `master` — o workflow builda e publica automaticamente em `https://<usuario>.github.io/<repositorio>/`.
4. Depois do primeiro deploy, adicione essa URL em **Firebase Console → Authentication → Settings → Authorized domains**.

A aplicação usa `HashRouter`, então as rotas aparecem como `/#/login`, `/#/home` etc. — isso evita problemas de recarregamento de página que o GitHub Pages tem com rotas "limpas".

