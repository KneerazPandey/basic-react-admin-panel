import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
        </Route>
        <Route path='user'>
          <Route index element={<List></List>}></Route>
          <Route path='new' element={<New></New>}></Route>
          <Route path=':userId' element={<Single></Single>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
