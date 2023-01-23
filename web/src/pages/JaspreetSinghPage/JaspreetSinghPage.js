import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const JaspreetSinghPage = () => {
  return (
    <box>
      <MetaTags title="Jaspreet Singh" description="Jaspreet's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Jaspreet Singh</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>jsingh0507</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>jasingh</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media1.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif?cid=ecf05e47v401yjvmyc417l1czpjwhw2gjdywps5vxsbir7xi&rid=giphy.gif&ct=g"
          alt="Error page not found"
        />
      </Center>
    </box>
  )
}

export default JaspreetSinghPage
