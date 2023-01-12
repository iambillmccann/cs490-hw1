console.log('=============================================')
console.log('Script: buildhomepage.js')
console.log('---------------------------------------------')
console.log('Start')

const fileSystem = require('fs')
const utilities = require('util')
const folder = '../web/src/pages/'

fileSystem.readdirSync(folder).forEach((file) => {
  const fullPath = utilities.format('%s%s', folder, file)
  const stat = fileSystem.statSync(fullPath).isDirectory()
  console.log(file, fullPath, stat)
})

const folders = fileSystem.readdirSync(folder).filter((e) => {
  const fullPath = utilities.format('%s%s', folder, e)
  return fileSystem.statSync(fullPath).isDirectory()
})

console.log(folders)

console.log('End')
console.log('=============================================')
