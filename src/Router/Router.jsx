import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Pages/Blog';
import LayOut from '../LayOut/LayOut';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      {path: '/', element: <Blog />}
    ]
  }
])

export default Router;