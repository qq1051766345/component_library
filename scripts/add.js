const path = require("path");
const { spawn } = require("child_process");
const glob = require('glob');
const fs = require('fs-extra')
const handlebars = require("handlebars");


/**
 * abc-xyz => AbcXyz
 * @param {*} str 
 */
const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/, m => m.toUpperCase());
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '');


(() => {
  const component = process.argv[2];
  const dirName = lowCase(component);
  const componentName = varCase(component);

  spawn("mkdir", ["-p", path.join(process.cwd(), `src/${dirName}`)]);

  const tplFiles = glob.sync(path.join(__dirname,'template/*.hbs'));


  tplFiles.forEach(async filePath => {
    const content = await fs.readFile(filePath,'utf-8');

    const template = handlebars.compile(content);
    console.log(template,'template')
    const result = template({
      dirName,
      componentName
    });

    const newPath = filePath.replace('scripts/template',`src/${dirName}`)
      .replace('component',dirName)
      .replace('Component',componentName)
      .replace('.hbs','');

    await fs.writeFile(newPath,result);

    console.log(`write ${newPath} succeed`)
  })
})();
