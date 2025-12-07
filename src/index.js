//O 'index.js' ele é a ponte entre o componente que você criou no arquivo App.js e o navegador.
/* As linhas 1 a 5 reúnem todas as peças necessárias:

1. React
2. A biblioteca do React para conversar com navegadores de internet (React DOM)
3. Os estilos de seus componentes
4. O componente que você criou em App.js. */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/style.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);