import Layout from '@renderer/components/common/Layout'
import { Outlet } from "react-router-dom";
// import Login from '@renderer/components/common/Login'
import SideBar from './components/common/SideBar';

function App(): React.JSX.Element {
  return (
    <Layout>
      <SideBar/>
      <Outlet />
    </Layout>
  )
}

export default App
