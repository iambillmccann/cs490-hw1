console.log('=============================================')
console.log('Script: buildhomepage.js')
console.log('---------------------------------------------')
console.log('Start')

const fileSystem = require('fs')
const utilities = require('util')
const folder = '../web/src/pages/'
const homePage = utilities.format('%s/HomePage/HomePage.js', folder)
const startTag = '{/* Start */}'
const endTag = '{/* End */}'

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

// Step 2. Read the Home Page into an array

const contents = fileSystem.readFileSync(homePage, 'utf-8')
const pageContent = contents.split(/\r?\n/)

// Step 3. Slice the array

const startItem = pageContent.findIndex((item) => item.includes(startTag))
const startSlice = pageContent.slice(0, startItem + 1)

const endItem = pageContent.findIndex((item) => item.includes(endTag))
const endSlice = pageContent.slice(endItem)

// Step 4. Add the links in the Home Page

console.log(folders)
const links = folders.map((item) => {
  const routeName = item.slice(0, item.length - 4).toLowerCase()
  return utilities.format(
    '          <Link to={routes.%s()}>%s</Link><br />',
    routeName,
    routeName
  )
})

// Step 5. Stitch them back together

const newPage = [...startSlice, ...links, ...endSlice]
console.log(newPage)

// Step 6. Write the file back out

const newHomePage = fileSystem.createWriteStream(homePage)
newHomePage.on('error', (err) => {
  console.log(err)
})
newPage.forEach(function (item) {
  newHomePage.write(item + '\n')
})
newHomePage.end()

console.log('End')
console.log('=============================================')
