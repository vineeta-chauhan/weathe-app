import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect,
} from 'react-router-dom';
import SideBar from './components/SideBar';
import AddUserForm from './components/AddUserForm';
import ViewUesr from './components/ViewUser';
import Weather from './components/Weather';
import 'antd/dist/antd.css'
import styles from './app.module.css'
import Header from './components/Header';
import ViewUser from './components/ViewUser';




function App() {
  return (
    <Router>
      <Switch>
   
        <div className={styles.mainContainer}>
          
       
          <div className={styles.sideBar}>
            <SideBar />
          </div>
          <div className={styles.contentBar}>
               <Header/>
            <Route exact key='addUser' path='/addUser' component={AddUserForm} />
            <Route exact key='viewUser' path='/viewUser' component={ViewUser} />
            <Route exact key='weather' path='/weather' component={Weather} />
            <Route exact key='redirect' path='/'
              render={() => <Redirect to='/addUser' />}
            />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
