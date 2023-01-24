import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MehakmaqsoodPage = () => {
  return (
    <box>
      <MetaTags title="Mehak Maqsood" description="Mehak's Lair" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Mehak A Maqsood</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>MehakMaqsood</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>Mehak#9160</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media.tenor.com/lduBMXfWMmcAAAAC/i-am-dead-inside-sad.gif"
          alt="i am dead inside"
        />
      </Center>
    </box>
  )
}

export default MehakmaqsoodPage
