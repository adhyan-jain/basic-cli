// src/main.js
import chalk from "chalk";
import fs from "fs";
import path from "path";
import ncp from "ncp";
import { promisify } from "util";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
// import exaca from 'exaca';
// import Listr from 'listr';

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };
    
  const currentFilePath = fileURLToPath(import.meta.url);
  const projectRoot = path.resolve(path.dirname(currentFilePath), ".."); // one ".." from src/

  const templateDir = path.join(
    projectRoot,
    "templates",
    options.template.toLowerCase()
  );

  console.log("Looking for template at:", templateDir);

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error("%s Invalid template name", chalk.red.bold("ERROR"));
    process.exit(1);
  }

  console.log("Copying project files...");
  await copyTemplateFiles({
    ...options,
    templateDirectory: templateDir,
  });

  if (options.git) {
    try {
      execSync("git init", { cwd: options.targetDirectory, stdio: "inherit" });
      console.log("%s Git initialized", chalk.green.bold("DONE"));
    } catch (err) {
      console.warn("%s Git initialization failed", chalk.yellow.bold("WARN"));
    }
  }

  if (options.runInstall) {
    try {
      execSync("npm install", {
        cwd: options.targetDirectory,
        stdio: "inherit",
      });
      console.log("%s Dependencies installed", chalk.green.bold("DONE"));
    } catch (err) {
      console.warn("%s npm install failed", chalk.yellow.bold("WARN"));
    }
  }

  console.log("%s Project Ready", chalk.green.bold("DONE"));
  return true;
}
