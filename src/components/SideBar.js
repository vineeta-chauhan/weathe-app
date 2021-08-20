import React, { useState } from 'react';
import { withRouter } from 'react-router';
import styles from './sidebar.module.css'
import AddUserForm from './AddUserForm'

const SideBar = ({ history }) => {
console.log(history,"==history")
  const addUserClickHandler = () => history.push('/addUser');
  const viewUserClickHandler = () => history.push('/viewUser');
  // const addUserClickHandler = () => history.push('/addUser');

  return (
    <div className={styles.sidebar}>
        <button className={styles.button} onClick={addUserClickHandler}>Adduser</button>
        <button className={styles.button} onClick={viewUserClickHandler} >user</button>
        <button className={styles.button}>Weather</button>
    </div>
  )
}
export default withRouter(SideBar)