import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const DhyeyKansagaraPage = () => {
  return (
    <box>
      <MetaTags title="Dhyey Kansagara" description="Dhyey's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Dhyeykumar Kansagara</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>DhyeyKansagara</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Dhyey</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.giphy.com/media/nrXif9YExO9EI/giphy.gif"
          alt="Spongebob scared on fire"
        />
      </Center>
    </box>
  )
}

export default DhyeyKansagaraPage
