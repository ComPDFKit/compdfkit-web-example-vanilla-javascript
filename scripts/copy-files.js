const { execSync } = require('child_process')

function copyFiles() {
  try {
    // Copy the WebViewer files from node_modules to the webviewer directory
    execSync('cp -r ./node_modules/@compdfkit_pdf_sdk/webviewer/dist ./webviewer')

    // Copy the webviewer.global.js file
    execSync('cp ./node_modules/@compdfkit_pdf_sdk/webviewer/webviewer.global.js ./')
  } catch (error) {
    console.error(`exec error: ${error}`)
  }
}

copyFiles()