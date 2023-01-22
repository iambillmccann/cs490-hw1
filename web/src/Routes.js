import { Router, Route, Set } from '@redwoodjs/router'

import PostsLayout from 'src/layouts/PostsLayout'

import Hw1Layout from './layouts/Hw1Layout/Hw1Layout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={Hw1Layout}>
        <Route path="/deanna-mostafa" page={DeannaMostafaPage} name="deannaMostafa" />
        <Route path="/ritikasuresh" page={RitikasureshPage} name="ritikasuresh" />
        <Route path="/saketh-lakshmanan" page={SakethLakshmananPage} name="sakethLakshmanan" />
        <Route path="/safiullah-baig" page={SafiullahBaigPage} name="safiullahBaig" />
        <Route path="/saivedagiri" page={SaivedagiriPage} name="saivedagiri" />
        <Route path="/jaspreetsingh" page={JaspreetSinghPage} name="jaspreetsingh" />
        <Route path="/keyadhruve" page={KeyadhruvePage} name="keyadhruve" />
        <Route path="/crismolina" page={CrismolinaPage} name="crismolina" />
        <Route path="/billmccann" page={BillmccannPage} name="billmccann" />
        <Route path="/manthanpatel" page={ManthanpatelPage} name="manthanpatel" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
