import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const JillianjacintoPage = () => {
  return (
    <box>
      <MetaTags title="Jillian Jacinto" description="Jill's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Jill Jacinto</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>jillacinth</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>DanKay</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://tenor.com/view/bloons-btd6-btd-bloon-balloons-gif-20551051"
          alt="turning into monkey"
        />
      </Center>
    </box>
  )
}

export default JillianjacintoPage
