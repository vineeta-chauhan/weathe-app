import React from 'react';
import PropTypes from 'prop-types';
import styles from './userCard.module.css';

import avatar from './../assets/userIcon.png'

const UserCardsView = (props) => {
  const { users } = props;
  return (
    <>
      <h2 style={{color:"grey"}}>Card View</h2>
      <div className={styles.mainContainer}>
        {
          users.map(user => (
            <div className={styles.userContainer}>
              <div className={styles.avatarContainer} >
                <img src={avatar} className={styles.avatar} />
              </div>
              <div className={styles.userInfoContainer}>
                <div className={styles.userInfo}>
                  <div className={styles.infoTxt}>{user.userName}</div>
                  <div className={styles.infoTxt}>{user.email}</div>
                  <div className={styles.infoTxt}>{user.phone}</div>
                  <div className={styles.infoTxt}>{user.state}</div>
                </div>
              </div>
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

export default UserCardsView
