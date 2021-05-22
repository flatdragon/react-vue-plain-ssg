import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => (
  <Fragment>
    <Helmet>
      <title>Error 404 - Page Not Found</title>
      <meta name="description" content="Error 404 - Page Not Found" />
    </Helmet>

    <h1>Error 404 - Page Not Found</h1>
  </Fragment>
)

export default NotFound
