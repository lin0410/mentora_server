// script.js
const { getCodeSandboxHost } = require('@codesandbox/utils');

const port = 3000;
const previewUrl = `https://${getCodeSandboxHost(port)}`;
console.log(previewUrl);
