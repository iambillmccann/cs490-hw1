
import { Center,Table, TableContainer,Tr,Td,Tbody, Box} from '@chakra-ui/react'
 //import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'


const AkPage = () => {
  return (
    <box>
       <MetaTags title="AK" description="Ak page" />
       <Center></Center>
         <TableContainer width={400} border={'1px'}/>
           <Table variant="simple"></Table>
             <Tbody></Tbody>
               <Tr></Tr>
                 <Td fontSize={13}></Td>
                 <Td fontStyle={'cursive'}></Td>
                 <Td fontWeight={'light'}>My Name:</Td>
                 <Td>Avneet Kaur</Td>

               <Tr></Tr>
                 <Td fontWeight={'light'}>My GitHub ID:</Td>
                 <Td>ak256-ak</Td>
               <Tr></Tr>
               <Tr></Tr>
                 <Td fontWeight={'light'}>My Discord ID:</Td>
                 <Td>AvneetK #1630</Td>
               <Tr></Tr>
             <Tbody></Tbody>
           <Table></Table>
         <TableContainer></TableContainer>
       <Center></Center>
       <br />
       <Center></Center>
         <img
           src='https://api.time.com/wp-content/uploads/2019/08/squidward-looking-out-the-window-meme.jpg?quality=85&w=800'
           alt="Squidward looking out the window"
         />
       <Center></Center>
     </box>
  )
}





 export default AkPage






