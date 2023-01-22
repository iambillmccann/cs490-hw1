import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const StevenKyritsisPage = () => {
  return (
    <box>
      <MetaTags title="Steven Kyritsis" description="Steven's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Steven Kyritsis</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>
                  <a
                    href="https://github.com/stevenkyritsis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    stevenkyritsis
                  </a>
                </Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>stevdev22#2945</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.licdn.com/dms/image/C4D22AQFk20fDRe-LDg/feedshare-shrink_1280/0/1673869638417?e=1677110400&v=beta&t=c2AZNHJsirkfZrEa_ReIXVa0eyu3uABsJYr5Siy3q2M"
          alt="DSA Meme"
          height={400}
          width={400}
        />
      </Center>
    </box>
  )
}

export default StevenKyritsisPage
