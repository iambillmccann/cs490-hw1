import { Link, routes } from '@redwoodjs/router'
import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

const PedropachecoPage = () => {
  return (
    <>
      <MetaTags title="Pedropacheco" description="Pedro Pacheco's Page" />

      <p align="right">
      <i>“Life can only be understood backwards; but it must be lived forwards.”</i><br /> -Søren Kierkegaard</p>

      <br/>

      <p>Hi! My name is Pedro Pacheco, a senior Computer Science undergraduate student at NJIT. My GitHub is <u><a href="http://github.com/pedropachecog">pedropachecog</a></u>, and my Discord account is Hurlecke#2866.</p>

      <br />
      <font size="15">About me</font>

      <p>I was born in Peru and my native language is Spanish. In my free time, I delve into generating AI art with <u><a href="https://stable-diffusion-art.com/beginners-guide/">Stable Diffusion</a></u>, an open source image generator. Here is an image I made (click to see in HD): </p>

<br/>
      
      <a href="https://imgbox.com/AMz6V4Y6" target="_blank">
      <Center><img src="https://images2.imgbox.com/f1/33/AMz6V4Y6_o.jpg" width="60%" alt="image host"/></Center></a>
     

      <Center>
      <i>A Shiba Inu wearing a black beret, vector art style</i>
      </Center>

    </> 
  )
}

export default PedropachecoPage
