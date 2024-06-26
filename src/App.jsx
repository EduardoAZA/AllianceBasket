
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login';
import CreateGroup from './pages/CreateGroup';
import PrivateRoutes from './utils/PrivateRoutes'
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/profile';
import Signup from './pages/signup';
import MyGroups from './pages/MyGroups';
import Group from './pages/Group';
import Support from './pages/Support';
import Ticket from './pages/Ticket';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/:id" />
            <Route element={<CreateGroup />} path="/criar-grupo/:id" exact />
            <Route element={<MyGroups />} path="/meus-grupos/:id" exact />
            <Route element={<Profile />} path="/perfil/:id" exact />
            <Route element={<Group/>} path="/grupo/:idGroup/cliente/:id" exact/> 
            <Route element={<Support/>} path="/suporte/:id" exact/>
            <Route element={<Ticket/>} path="/suporte/:id/ticket/:idTicket" exact/>
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Home />} path="/" />
          <Route element={<Signup />} path="/cadastro" />
          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </Router>
    </div>
  );
}


export default App;