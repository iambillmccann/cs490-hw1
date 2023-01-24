import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

const NamithaYallaPage = () => {
  return (
    <box>
      <MetaTags title="NamithaYalla" description="NamithaYalla page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Namitha (Nemo) Yalla</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>nYalla6</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>nemoooo</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif"
          alt="You just got rickrolled"
        />
      </Center>
    </box>
  )
}

export default NamithaYallaPage
