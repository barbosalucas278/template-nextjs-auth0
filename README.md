Template de una web app creada con NextJs y Typescript con Auth0 integrado.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Configuration needed
You need create a .env file and declares this variables for run correctly tin dev mode.
[Auth0 documentation](https://auth0.com/docs/quickstart/webapp/nextjs/interactive#configure-the-sdk)

```bash
AUTH0_SECRET='YOUR_SECRET_AUTH0_KEY' # (A long secret value used to encrypt the session cookie. You can generate a suitable string using openssl rand -hex 32 on the command line.)
AUTH0_BASE_URL='YOUR_BASE_URL' # (In this case, I used http://localhost:3000 and I declared this url in my tenant how allowed url for all)
AUTH0_ISSUER_BASE_URL='BASE_URL_OF_YOUR_TENANT'
AUTH0_CLIENT_ID='CLIENT_ID_OF_YOUR_APPLICATION_IN_AUTH0'
AUTH0_CLIENT_SECRET='CLIENT_SECRET_OF_YOUR_APPLICATION_IN_AUTH0' 
```

After that you need create secrets with this values in your deployment service.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.