import styles from './header.module.css';
import avatar from './../assets/userIcon.png'


const Header = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date()
  let month = today.toLocaleString('default', { month: 'long' })
  const date = today.getDate();
  const time = today.toLocaleString('en-US',{ hour:'numeric',hour12: true })


  return (
    <div className={styles.headerContainer}>
      <div className={styles.dateContainer}>
        <span className={styles.dayWrapper}>
          {days[today.getDay()]}
        </span>
        <span className={styles.dateWrapper}>
          {month}
        </span>
        <span className={styles.monthWrapper}>
          {date}
         
        </span>
        <span className={styles.timeWrapper}>
          {time}
        </span>
      </div>
      <div className={styles.userContainer}>
        <span style={{ marginRight: "5px" }}>welcome John</span>
        <img src={avatar}></img>
      </div>
    </div>
  )
}
export default Header;