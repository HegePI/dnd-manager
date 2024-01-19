
import LoginBtn from '@/components/LoginBtn'
import styles from './Navbar.module.css'

export default function NavBar() {
    return (
        <div>
            <p>DND manager</p>
            <ul className={styles.ul}>
                <li className={styles.li}><a className={styles.a} href="#Home">Home</a></li>
                <li className={styles.li}><a className={styles.a} href="#Dashboard">Dashboard</a></li>
            </ul>
            <div>
                <LoginBtn />
            </div>
        </div>
    )
}