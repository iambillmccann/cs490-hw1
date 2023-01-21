import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RitikasureshPage = () => {
  return (
    <>
      <MetaTags title="Ritikasuresh" description="Ritikasuresh page" />

      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td textAlign={'center'} backgroundColor={'#FFA500'} fontWeight={'bold'}>My Name:</Td>
                <Td textAlign={'center'} backgroundColor={'#00FF00'} fontWeight={'bold'}>My GitHub Id:</Td>
                <Td textAlign={'center'} backgroundColor={'#ADD8E6'} fontWeight={'bold'}>My Discord Id:</Td>
              </Tr>
              <Tr>
                <Td textAlign={'center'} backgroundColor={'#FFA500'}>Ritika Suresh</Td>
                <Td textAlign={'center'} backgroundColor={'#00FF00'}>sureshritika</Td>
                <Td textAlign={'center'} backgroundColor={'#ADD8E6'}>rs</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media1.giphy.com/media/cJMlR1SsCSkUjVY3iK/giphy.gif?cid=790b761176bb5b909f15c5fac0b0021e3fef4a751bc63c0a&rid=giphy.gif&ct=g"
          alt="Suspicious Meme"
        />
      </Center>
    </>
  )
}

export default RitikasureshPage
