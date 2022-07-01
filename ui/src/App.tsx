import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Users from './components/User/Users';
import Clients from './components/Client/Clients';
import Support from './components/Support';
import CreateQoute from './components/Quote/CreateQuote';
import Login from '../src/pages/Login'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import useToken from './auth/useToken';


function App() {
  const { token, setToken} = useToken();
  // const token = getToken()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/users' element={<Users />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/quotes' element={<CreateQoute />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
