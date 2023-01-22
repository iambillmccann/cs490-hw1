import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

//import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DhyeyPage = () => {
  return (
    <box>
      <MetaTags title="Dhyey" description="Dhyey page" />

      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Dhyey Patel</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>Dhyey79</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Dhyey#0659</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://memesboy.com/wp-content/uploads/2019/02/Car-Manufactures-Be-Like-Car-Meme.jpg"
          alt="Car Companies Be Like!"
        />
      </Center>
    </box>
  )
}

export default DhyeyPage
