import { execSync } from "node:child_process";

export function installComponent(packageManager, component) {
  const installCommand = {
    npm: `npm install ${component}`,
    yarn: `yarn add ${component}`,
    pnpm: `pnpm add ${component}`,
  }[packageManager];

  console.log(`Executando: ${installCommand}`);
  execSync(installCommand, { stdio: "inherit" });
}
