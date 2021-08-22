import styles from './viewuser.module.css';
import { SearchOutlined } from '@ant-design/icons';
import UserCardsView from './UserCardsView';
import UserListView from './UserListView';


const ViewUesr = () => {
  const stringifyUserData = localStorage.getItem('users');
  let parsedUserData = [];
  try {
    parsedUserData = JSON.parse(stringifyUserData) || [];
  } catch (err) {
    parsedUserData = [];
    console.log(err);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <UserCardsView users={parsedUserData} />
        <UserListView users={parsedUserData} />
      </div>
    </div>
  )
}
export default ViewUesr