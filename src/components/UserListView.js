import React from 'react';
import PropTypes from 'prop-types';
import styles from './userListView.module.css';

import avatar from './../assets/userIcon.png'

const UserListView = (props) => {
  const { users } = props;
  return (
    <>
      <h2 style={{color:"grey"}}>List View</h2>
      <div className={styles.mainContainer}>
        {
          users.map(user => (
            <div className={styles.userContainer}>
              <img src={avatar} className={styles.avatar} />
              <span className={styles.infoTxt}>{user.userName}</span>
              <span className={styles.infoTxt}>{user.email}</span>
              <span className={styles.infoTxt}>{user.phone}</span>
              <span className={styles.infoTxt}>{user.state}</span>
            </div>
          ))
        }
      </div >
    </>
  );
}

// UserCards.PropTypes = {
//   cards: PropTypes.array,
// };

// UserCards.defaultProps = {
//   cards: []
// };

export default UserListView
