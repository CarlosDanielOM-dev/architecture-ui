import inquirer from "inquirer";

import { detectPackageManager } from "./helpers/detect-package-manager";
import { installComponent } from "./helpers/install-component";

import { Components } from "./components";

(async () => {
  const packageManager = detectPackageManager();

  const answers = await inquirer.prompt([
    {
      type: "checkbox",
      name: "selectedComponents",
      message: "Quais componentes você deseja instalar?",
      choices: Components,
    },
  ]);

  const { selectedComponents } = answers;
  if (selectedComponents.length === 0) {
    console.log("Nenhum componente selecionado. Saindo...");
    return;
  }

  console.log(
    `Instalando os seguintes componentes: ${selectedComponents.join(", ")}`
  );

  selectedComponents.forEach((component) => {
    try {
      installComponent(packageManager, component);
    } catch (error) {
      console.error(`Erro ao instalar ${component}:`, error.message);
    }
  });

  console.log("Instalação concluída!");
})();
