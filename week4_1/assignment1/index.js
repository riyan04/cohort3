import fs from 'fs'
import {Command} from 'commander'

const program = new Command()
let res;
program
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', '/')
  .action((str, options) => {
    res = str.split(options.separator)
  });

program.parse();

const path = res.join('/')
console.log(path)
const fileContent = fs.readFileSync(path, 'utf-8')
console.log(`There are ${fileContent.split(' ').length} words in this file`)


