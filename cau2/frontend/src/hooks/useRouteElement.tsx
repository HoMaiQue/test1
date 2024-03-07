import { useRoutes } from 'react-router-dom'

import { path } from '~/constants/path'
import Home from '~/pages/Home/Home'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: path.home,
      element: <Home></Home>
    },
    {
      path: path.postDetail,
      element: <></>
    }
  ])
  return routeElements
}
