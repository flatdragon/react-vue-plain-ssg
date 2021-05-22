import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home" />
    </Helmet>

    <h1>Home</h1>
    <hello-world></hello-world>
  </Fragment>
)

export default Home
