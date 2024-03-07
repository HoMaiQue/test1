import { ToastContainer } from 'react-toastify'
import useRouteElements from '~/hooks/useRouteElement'
import './main.css'
function App() {
  const routeElement = useRouteElements()
  return (
    <>
      {routeElement}
      <ToastContainer />
    </>
  )
}

export default App
