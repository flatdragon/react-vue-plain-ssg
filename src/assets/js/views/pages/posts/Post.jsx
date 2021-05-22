import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const Post = () => (
  <Fragment>
    <Helmet>
      <title>Post 1</title>
      <meta name="description" content="Post 1" />
    </Helmet>

    <h1>Post</h1>
  </Fragment>
)

export default Post
