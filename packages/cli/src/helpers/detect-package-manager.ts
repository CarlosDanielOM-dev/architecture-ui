import { existsSync } from "node:fs";

export function detectPackageManager() {
  if (existsSync("pnpm-lock.yaml")) {
    return "pnpm";
  } else if (existsSync("yarn.lock")) {
    return "yarn";
  } else {
    return "npm";
  }
}
