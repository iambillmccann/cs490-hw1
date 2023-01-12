console.log('=============================================')
console.log('Script: buildhomepage.js')
console.log('---------------------------------------------')
console.log('Start')

const fileSystem = require('fs')
const utilities = require('util')
const folder = '../web/src/pages/'
const homePage = utilities.format('%s/HomePage/HomePage.js', folder)

// Step 1. Create an array of folders. The folders are files
//         to include in the Home Page

const folders = fileSystem.readdirSync(folder).filter((e) => {
  const fullPath = utilities.format('%s%s', folder, e)
  return (
    fileSystem.statSync(fullPath).isDirectory() &&
    e !== 'HomePage' &&
    e !== 'FatalErrorPage' &&
    e !== 'NotFoundPage'
  )
})

console.log(folders)

// Step 2. Read the Home Page into an array

const contents = fileSystem.readFileSync(homePage, 'utf-8')
const pageContent = contents.split(/\r?\n/)
console.log(pageContent)

console.log('End')
console.log('=============================================')
