import React from  "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";

import UserList from '../../../../react2021rajan/reactrajan/src/components/UserList';
import {users} from '../../../../react2021rajan/reactrajan/src/usersData';
import {useState} from 'react';
import CreateUser from '../../../../react2021rajan/reactrajan/src/components/CreateUser';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

 const [userlist, setUserList] = useState(users);
  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }





const App = () => {
  return (
    <>
    <Navbar />

     <Switch>
          <Route exact path= "/" component={Home} />
          <Route exact path= "/about" component={About} />
          <Route exact path= "/service" component={Service} />
          <Route exact path= "/contact" component={Contact} />
        

          <Route path='/userlist'>
            <div>
                <UserList list={userlist} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/create'>
              <CreateUser status='add' />
          </Route>
          <Route path='/edit/:id' children={<CreateUser status='edit' />}></Route>
          <Route path='*'>
              404 not found
          </Route>          
     </Switch>

     

      </>
  );
};
};

export default App;
