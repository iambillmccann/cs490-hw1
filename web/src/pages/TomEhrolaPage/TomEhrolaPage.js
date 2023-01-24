import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TomEhrolaPage = () => {
  return (
    <>
      <MetaTags title="Tom Ehrola" description="Tom Ehrola's page" />
      <Center>
      <h1 style="text-decoration:underline;">Thomas Ehrola</h1>
      <p>
        <h3>A Little About Me</h3>
        <p> &emsp;I'm a returnee to college in my senior year, hoping to graduate December 2023.
            When I'm not at school I enjoy going for walks and playing video games like Slay the Spire and Overwatch 2. 
            I also enjoy listening to podcasts with a focus on politics, media, games, and TTRPGs.  Looking foreword 
            to having a productive semester with you all. 
        </p>
        <table>
          <caption style="font-size:25px;">Spring 2023 Courses</caption>
          <tr>
            <th>CS 350</th>
            <td>Intro to Computer Systems</td>  
          </tr>
          <tr>
            <th>CS 356</th>
            <td>Intro to Computer Networks</td>
          </tr>
          <tr>
            <th>CS 435</th>
            <td>Data Structures and Algorithms</td>
          </tr>
          <tr>
            <th>CS 488</th>
            <td>Independent Study</td>
          </tr>
          <tr>
            <th>CS 490</th>
            <td>Design in Software Engineering</td>
          </tr>
        </table>
        <p>Git Hub ID: TomEhrola</p>
        <p>Discord :   gogorobot#3284</p>
        <p>Email :     tpe3@njit.edu</p>
        <h4>How many bugs are in my code?</h4>
        <img src="https://i.kym-cdn.com/entries/icons/original/000/000/056/itsover1000.jpg" alt="Vegeta: It's over 9000" width="400" height="auto"></img>
      </p>
      </Center>
    </>
  )
}

export default TomEhrolaPage
