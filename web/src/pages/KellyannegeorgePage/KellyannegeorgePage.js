import { Link, routes } from '@redwoodjs/router'
import { Center } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import { Heading , Text} from '@chakra-ui/react'

const KellyannegeorgePage = () => {

  return (

    <body>
      <MetaTags title="Kellyannegeorge" description="Kellyannegeorge page" />
      <Center>
      <Heading>Kelly's Page</Heading>
      </Center>
      <Center>
      <div>
        <Text fontSize='3xl'>Name: KellyAnne George</Text>
        <Text fontSize='3xl'>Github: kg497</Text>
        <Text fontSize='3xl'>Discord: kellyanneg31</Text>
      </div>
      </Center>
      <Center>
        <img
          src="https://cdn-useast1.kapwing.com/video_image-dve0auJGp.jpg?Expires=1674856733&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=Ygn5y0kQfvV8sqhjQRPFj6TQBabm%2F%2F%2F5KJuTc0Fhsd2AZM4s1lBwSl1lvzFwQvvfBnrWsZiPonkw4OVmcjLnP2fdTPKGuJBUnVFv%2Ful1vOvhOoeeDkD1moS1uTGeU10fSRVn1zWvciEXZeBODNTPn4L%2B9SaKtpr7kCQXiTgzsvccwBXI4mxgp%2F%2BnN%2FAMxhDW%2BFX4n%2BbzlRwb7rTEQ9zTnLJZ7AdKbFuxXgxaTSOmr2eTupYqNfEaCbZpeJyJH%2BYOFHrirwCDGJe2JC5oy9hSkl7U8pBee5rUlzUH4LPxk%2BmsO0XpD4NWU4nVFHRGsauQ%2BGryzBQeipKCKiBGZuj4bw%3D%3D"
          alt="Arthur Headphones"
          width = "500"
          height = "600"
        />
      </Center>
    </body>
  )
}

export default KellyannegeorgePage
