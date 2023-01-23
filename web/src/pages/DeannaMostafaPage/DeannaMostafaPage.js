import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DeannaMostafaPage = () => {
  return (
    <box>
      <MetaTags title="Deanna Mostafa" description="Deanna Mostafa's page" />

      {/* <h1>DeannaMostafaPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/DeannaMostafaPage/DeannaMostafaPage.js</code>
      </p>
      <p>
        My default route is named <code>deannaMostafa</code>, link to me with `
        <Link to={routes.deannaMostafa()}>DeannaMostafa</Link>`
      </p> */}

      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Deanna Mostafa</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>dm658</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Thoth-Bubble#3342</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.discordapp.net/attachments/847291089656217612/1047689234485612564/help.gif"
          alt="dondozo"
        />
      </Center>
    </box>
  )
}

export default DeannaMostafaPage
