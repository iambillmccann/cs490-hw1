import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'
//'@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
const MurtajizkazmiPage = () => {
  return (
 <Center>
  <table>
      <MetaTags title="Murtajizkazmi" description="Murtajizkazmi page" />

          <Table fontFamily={'cursive'}>
              <Tr>
                <Td>My Name:</Td>
                <Td>Murtajiz Kazmi</Td>
              </Tr>
              <Tr>
                <Td>My GitHub Id:</Td>
                <Td>mhk37</Td>
              </Tr>
              <Tr>
                <Td>My Discord Id:</Td>
                <Td>mur</Td>
              </Tr>
          </Table>

    <img
      src="https://scontent.fewr1-6.fna.fbcdn.net/v/t1.6435-9/144258158_5143481602361081_8694047782348885814_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=110474&_nc_ohc=s5rJpBobUs8AX8lUjpq&_nc_ht=scontent.fewr1-6.fna&oh=00_AfD9T7QOhEU0WmYr23kcKBhsJ-G6vEVfrm7JFc0GZi704g&oe=63EFE5D3"
    />
  </table>
  </Center>
  )
}
export default MurtajizkazmiPage