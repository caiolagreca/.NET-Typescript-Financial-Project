# creating frontend:

```javascript
//creating inside frontend folder
npx create-react-app frontend --template typescript

npm i axios --save
npm i --save-dev @types/axios

npm i dotenv --save

npm i uuid
npm i --save-dev @types/uuid

npm i -D tailwindcss
npx tailwindcss init

npm i -save react-router
npm i -save react-router-dom

npm i --save @types/react-router-dom
npm i --save @types/react-router

npm i react-icons

npm i react-spinners /* loading spinners components */

npm i react-toastify

npm i react-hook-form yup @hookform/resolvers
```

Como saber quando instalar uma biblioteca com os tipos separadamentes:

1. Instale a biblioteca com npm install.
2. Verifique se TypeScript está reclamando da falta de definições de tipos. Se você encontrar erros sobre "could not find a declaration file for module", isso significa que a biblioteca não inclui as definições de tipos e você provavelmente precisará instalar o @types/ correspondente (se disponível).
