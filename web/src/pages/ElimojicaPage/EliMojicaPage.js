import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ElimojicaPage = () => {
  return (
      <box>
      <MetaTags title="Eli Mojica" description="Eli's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Eli Mojica</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>elmojica</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>eli#0714</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.tenor.com/do8q_eYrsW4AAAAd/crying-black-guy-meme.gif"
          alt="Guy crying"
        />
      </Center>
    </box>
  )
}

export default ElimojicaPage
