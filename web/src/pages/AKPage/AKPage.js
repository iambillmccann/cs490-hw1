import {
  Center,
  Table,
  TableContainer,
  Tr,
  Td,
  Tbody,
  Box,
} from '@chakra-ui/react'

//import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AkPage = () => {
  return (
    <Box>
      <MetaTags title="AK" description="Ak page" />
      <Center>
        <TableContainer width={400} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'light'}>My Name:</Td>
                <Td>Avneet Kaur</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'light'}>My GitHub ID:</Td>
                <Td>ak256-ak</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'light'}>My Discord ID:</Td>
                <Td>AvneetK #1630</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://api.time.com/wp-content/uploads/2019/08/squidward-looking-out-the-window-meme.jpg?quality=85&w=800"
          alt="Squidward looking out the window"
        />
      </Center>
    </Box>
  )
}

export default AkPage
