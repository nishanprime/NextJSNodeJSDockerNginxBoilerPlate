#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const templateDir = path.join(__dirname, './'); // The files are now local to the package

fs.readdirSync(templateDir).forEach(file => {
  const srcFile = path.join(templateDir, file);
  const destFile = path.join(process.cwd(), file);

  // Do not copy the install script or package.json, or other non-boilerplate files
  if (!['install.js', 'package.json', 'package-lock.json', 'node_modules'].includes(file)) {
    fs.copySync(srcFile, destFile);
    console.log(`Copied ${file}`);
  }
});
