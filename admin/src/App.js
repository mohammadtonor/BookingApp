import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import List from "./page/list/List";
import Single from "./page/single/Single";
import New from "./page/new/New";
import { productInputs, userInputs } from './formSource';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path="new" element={<New inputs={userInputs} title={'Add new User'}/>}/>
            <Route path=":userId" element={<Single />}/>
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path="new" element={<New inputs={productInputs} title={"Add new Products"}/>}/>
            <Route path=":productId" element={<Single />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
