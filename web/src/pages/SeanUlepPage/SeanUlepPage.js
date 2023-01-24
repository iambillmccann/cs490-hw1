import { Link, routes } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const SeanUlepPage = () => {
  return (
    <box>
      <MetaTags title="Sean Ulep" description="The Professor Pupil's Page" />
      <Center>
        <TableContainer width={480} border={'5px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bolder'}>My Name:</Td>
                <Td>Sean Ulep</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bolder'}>My GitHub Id:</Td>
                <Td>SeanUlep</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bolder'}>My Discord Id:</Td>
                <Td>Shaun_Tulip or su25 (server username)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />

      <Center>
        <img
          src="https://media.giphy.com/media/u5GxLmudnA8vK/giphy.gif"
          alt="Kirby nomming on a watermelon"
        />
      </Center>
    </box>
  )
}

export default SeanUlepPage
