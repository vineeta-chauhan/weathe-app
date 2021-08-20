import React, { Fragment, useState } from 'react';
import { notification } from "antd";
import styles from './adduser.module.css';
import logo from '../assets/calendar.png';


const AddUserForm = () => {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState();
  const [DOB, setDOB] = useState();
  const [state, setState] = useState('');


  const userNamevalidation = (name) => {
    const regex = /^[a-zA-Z]+[a-zA-Z0-9_.]+$/;
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.trim());
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone);
  }

  const submitformHandler = (e) => {
    e.preventDefault();
    const isUserNamevalidated = userNamevalidation(userName);
    const isemailValidated = validateEmail(email);
    const isPhoneNumberIsValidated = validatePhoneNumber(phone);

    if (!isUserNamevalidated) {
      notification.error({
        description: "please enter a valid user name ",
      });
      return;
    }
    // if (!isemailValidated) {
    //   notification.error({
    //     description: "please enter a valid email id ",
    //   });
    //   return;
    // }
    // if (!isPhoneNumberIsValidated) {
    //   notification.error({
    //     description: "please enter a valid email id ",
    //   });
    //   return;
    // }
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem('users'))
    } catch (e) {

    }
    if (!Array.isArray(users)) {
      users = [];
    }

    users.push({
      email,
      userName,
      phone,
      DOB,
      state,
    });
    localStorage.setItem('users', JSON.stringify(users));
  }


  return (
    <Fragment>
      <form action="" className={styles.formContainer}>
        <div className={styles.container}>
          <div className={styles.userContainer}>
            <label className={styles.label} htmlFor="uesrname">UserName
            </label>
            <input className={styles.inputContainer}
              type="text" name="username" value={userName}
              onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div className={styles.userContainer}>
            <label className={styles.label} htmlFor="email">Email
            </label>
            <input className={styles.inputContainer} type="text"
              name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={styles.userContainer}>
            <label className={styles.label} htmlFor="phone">Phone
            </label>
            <input className={styles.inputContainer} type="text" name="Phone" value={phone} id="phone" onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.userContainer}>
              <label className={styles.label} htmlFor="dateofbirth">DOB
              </label>
              <input className={styles.inputContainer} type="text" name="dob" id="dob" value={DOB} onChange={(e) => setDOB(e.target.value)} />
              <img src={logo} />
            </div>
          </div>

          <div className={styles.userContainer}>
            <label className={styles.label} htmlFor="state">State
            </label>
            <input className={styles.inputContainer} type="text" name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} />
          </div>

          <div className={styles.btnContainer}>
            <button
              className={styles.button}
              type="submit"
              onClick={submitformHandler}
            >
              Create User
            </button>
          </div>
        </div>
      </form>
    </Fragment >
  )
}

export default AddUserForm;