import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'



const AkashdeepsinghPage = () => {
  return (
    <box>
    <MetaTags title="Akashdeep Singh" description="Akash's page" />
      <Center>
        <TableContainer width={600} border={'2px'}>
          <Table variant="striped" colorScheme="gray" >
            <Tbody>
              <Tr>
                <Td fontWeight={'bolder'} color="Highlight">My Name:</Td>
                <Td>Akashdeep Singh</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'} color="Highlight">My GitHub Id:</Td>
                <Td>singak1</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'} color="Highlight">My Discord Id:</Td>
                <Td>EasyPeazy21</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.giphy.com/media/2eTVRPLl4WgOrxY0kr/giphy-downsized-large.gif"
          alt="No More Fooling Me now"
        />
      </Center>
    </box>
  )
}

export default AkashdeepsinghPage
