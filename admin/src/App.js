import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import List from "./page/list/List";
import Single from "./page/single/Single";
import New from "./page/new/New";
import { hotelInputs, roomInputs, userInputs } from './formSource';
import './style/style.scss'
import { useContext, useState } from 'react';
import {DarkModeContext} from './context/darkModeContext'
import { AuthContext } from './context/AuthContext';
import { hotelColumns, roomColumns, userColumns } from './dataTableSource';
import NewHotel from './page/newHotel/NewHotel';
import NewRoom from './page/newRoom/NewRoom';

function App() {
  const { darkMode} = useContext(DarkModeContext)

  const ProtectedRoute = ({children}) => {
    const { user } = useContext(AuthContext)
    
    if (!user) {
      return <Navigate to={'/login'} />
    }

    return children;
  }


  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
            <Route path="/">
            <Route path="login" element={<Login />} />
            <Route 
              index 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route 
                index 
                element={
                  <ProtectedRoute>
                    <List columns={userColumns}/>
                  </ProtectedRoute>
               }
              />
              <Route 
                path="new" 
                element={
                  <ProtectedRoute>
                    <New
                    inputs={userInputs}
                    title={'Add new User'}
                    />
                </ProtectedRoute>
                }
              />
              <Route 
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }  
              />
            </Route>
            <Route path="hotels">
              <Route 
                index
                element={
                   <ProtectedRoute> 
                      <List columns={hotelColumns}/>
                  </ProtectedRoute>
                } 
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>  
                    <NewHotel
                      inputs={hotelInputs}
                      title={"Add new hotel"}
                    />
                </ProtectedRoute>
                }
              />
              <Route 
                path=":hotelId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route 
                index
                element={
                   <ProtectedRoute> 
                      <List columns={roomColumns}/>
                  </ProtectedRoute>
                } 
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>  
                    <NewRoom
                      inputs={roomInputs}
                      title={"Add new Room"}
                    />
                </ProtectedRoute>
                }
              />
              <Route 
                path=":roomId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
