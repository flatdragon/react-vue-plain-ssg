import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/posts/Post'
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts/">Posts</Link>
        <ul>
          <li>
            <Link to="/posts/1/">Post 1</Link>
          </li>
        </ul>
      </li>
    </ul>
    <Switch>
      <Route exact path="/posts/1/">
        <Post />
      </Route>
      <Route exact path="/posts/">
        <Posts />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
)

export default App
