import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect,
} from 'react-router-dom';
import SideBar from './components/SideBar';
import AddUserForm from './components/AddUserForm';
import ViewUesr from './components/ViewUser';
import 'antd/dist/antd.css'
import styles from './app.module.css'



// const Test = () => <h1>sandeep</h1>;

function App() {
  return (
    <Router>
      <Switch>
          <div className={styles.mainContainer}>
            <div className={styles.sideBar}>
              <SideBar/>
            </div>
            <div className={styles.contentBar}>
              <Route key='addUser' path='/addUser' component={AddUserForm}/>
              <Route key='viewUser' path='/viewUser' component={ViewUesr} />
              <Route key='redirect' path='/'
                render={() => <Redirect to='/addUser' />}
              />

            </div>
          </div>
      </Switch>
    </Router>
  );
}

export default App;
