import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const NeelpatilPage = () => {
  return (
    <box>
      <MetaTags title="Neelpatil" description="Neelpatil page" />
      <Center>
        <TableContainer width={480} border={'3px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Neel Patil</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub:</Td>
                <Td>@neelpatil09</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord:</Td>
                <Td>@neelanuj</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://www.rd.com/wp-content/uploads/2018/02/06_Hilarious-Photos-that-Will-Get-You-Through-the-Week_97049381_Andrey_Kuzmin.jpg?resize=700,466"
          alt="Spongebob rips his pants"
        />
      </Center>
    </box>
  )
}

export default NeelpatilPage
