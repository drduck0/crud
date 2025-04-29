import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserList from "./pages/UserList"
import AddEditUser from "./pages/AddEditUser"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddEditUser />} />
        <Route path="/edit/:id" element={<AddEditUser />} />
        <Route path="/" element={<UserList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
