import React, { Fragment, useState } from 'react';
import { notification } from "antd";
import styles from './adduser.module.css';
import logo from '../assets/calendar.png';
import Dropdown from './Dropdown';


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
    return regex.test(phone.trim());
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
    if (!isemailValidated) {
      notification.error({
        description: "please enter a valid email id ",
      });
      return;
    }
    if (!isPhoneNumberIsValidated) {
      notification.error({
        description: "please enter a valid phone no",
      });
      return;
    }
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
    notification.success({
      description: "User added successfully ",
    });
  }


  return (
    <Fragment>
      <form action="" className={styles.formContainer}>
        <div className={styles.container}>
          <div className={styles.userContainer}>
            <label className={styles.label}>UserName</label>
            <input
              className={styles.inputContainer}
              type="text" name="username" value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className={styles.userContainer}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.inputContainer} type="text"
              name="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.userContainer}>
            <label className={styles.label}>Phone</label>
            <input
              className={styles.inputContainer}
              type="text" name="Phone" value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.userContainer}>
              <label className={styles.label}>DOB</label>
              <input
                className={styles.inputContainer}
                type="text" name="dob" value={DOB}
                onChange={(e) => setDOB(e.target.value)}
              />
              <img className={styles.imgContainer} src={logo} />
            </div>
          </div>

          <div className={styles.userContainer}>
            <label className={styles.label}>State</label>
            <Dropdown
              handleOnSelect={(state) => setState(state)}
            />
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