import React from 'react';
import { withRouter } from 'react-router';
import styles from './sidebar.module.css';
import  addUser from '../assets/addUser.png';
import users from '../assets/users.png';
import weather from '../assets/weather.png';
import Logo from '../assets/Logo.png';

const SideBar = ({ history }) => {
  const addUserClickHandler = () => history.push('/addUser');
  const viewUserClickHandler = () => history.push('/viewUser');
  const weatherClickHandler = () => history.push('/weather');

  return (
    <div className={styles.sidebar}>
      <img src={Logo} style={{marginLeft:'3vw'}}></img>
     <hr className={styles.horizental}></hr>
      <button className={styles.button} onClick={addUserClickHandler}>
      <img src={addUser} style={{background:"white"}}></img>
        Adduser
      </button>
     
     
      <button className={styles.button} onClick={viewUserClickHandler} >
      <img src={users} style={{background:"white"}}></img>
        user
        </button>
      <button className={styles.button} onClick={weatherClickHandler}>
      <img src={weather} style={{background:"white"}}></img>
        Weather
        </button>
    </div>
  )
}
export default withRouter(SideBar)