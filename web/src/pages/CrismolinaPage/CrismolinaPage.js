import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

const CrismolinaPage = () => {
  return (
    <box>
      <MetaTags title="Cristhian Molina" description="Cristhian's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="striped">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td fontWeight={'medium'}>Cristhian Molina</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td fontWeight={'medium'}>CRIIPI11</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td fontWeight={'medium'}>ElBabyDeLasBabies#9109</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.tenor.com/HIBNvJIL_u4AAAAd/kinkytwt-monkey.gif"
          alt="Monkey resigns"
        />
      </Center>
    </box>
  )
}

export default CrismolinaPage
