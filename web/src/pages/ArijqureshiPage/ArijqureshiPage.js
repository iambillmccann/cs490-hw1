import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const ArijqureshiPage = () => {
  return (
    <box>
      <MetaTags title="Arij Qureshi" description="Arij's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
              </Tr>
              <Tr>
                <Td>Arij Qureshi</Td>
                <Td>arij</Td>
                <Td>arijqureshi</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://i.pinimg.com/originals/af/d1/d9/afd1d90485af672961a184fba7f17ac8.gif"
          alt="never do anything to anyone for any reason, ever, no matter what"
        />
      </Center>
      <p></p>
      <Center>
        <p>love the office</p>
      </Center>
    </box>
  )
}

export default ArijqureshiPage
