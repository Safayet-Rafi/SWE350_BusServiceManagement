import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Bus from './Components/Bus'
import Services from './Components/Services'
import Counter from './Components/Counter'
import Passenger from './Components/Passenger'
import Ticket from './Components/Ticket'
import AddBus from './Components/AddBus'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import AddServices from './Components/AddServices'
import AddCounter from './Components/AddCounter'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/bus' element={<Bus />}></Route>
        <Route path='/dashboard/services' element={<Services />}></Route>
        <Route path='/dashboard/counter' element={<Counter />}></Route>
        <Route path='/dashboard/passenger' element={<Passenger/>}></Route>
        <Route path='/dashboard/ticket' element={<Ticket/>}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/add_bus' element={<AddBus />}></Route>
        <Route path='/dashboard/add_services' element={<AddServices />}></Route>
        <Route path='/dashboard/add_counter' element={<AddCounter />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
