import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NamithaYallaPage = () => {
  return (
    <box>
      <MetaTags title="Namitha Yalla" description="Nemo's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>(Namitha) Nemo Yalla</Td>
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
          src="https://tenor.com/bHDTo.gif"
          alt="You just got rick rolled."
        />
      </Center>
    </box>
  )
}

export default NamithaYallaPage
