import { Link, routes } from '@redwoodjs/router'
import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

const KevynPage = () => {
  return (
    <box>
      <MetaTags title="Kevyn Thompson :D" description="Kevyn's page" />
      <Center>
        <h1>My name is Kevyn Thompson!</h1>
      </Center>
      <Center>
        <p>I have no idea how JavaScript works and nothing I do feels like it's working so this is the best I can do! :D</p>
      </Center>
      
      <Text>
        My Discord ID: kevynmt<br />
        My GitHub ID: kevynmt
      </Text>
      
      <Center>
        <p>Here's a meme that perfectly encapsualtes my experience making this page:<br /></p>
      </Center>
      <Center>
        <img src="https://lh3.googleusercontent.com/pw/AL9nZEVLoKebYIaOhl11Za8UILvCfs1Mm5snh40ZyGwCgzVLu7kaxUs0PdElx926crrKozZcenv4x3-vAQvAQ_l9Wp3864Kdz1wLQHKHHaaqeqokGVdS2XBdkFPqce3Xkpn8YVFgWeJRX7XhCzl-i7c5H6i9=w908-h902-no" referrerpolicy="no-referrer" alt="help me"/>
      </Center>
    </box>
  )
}

export default KevynPage
