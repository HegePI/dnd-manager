import LoginBtn from '@/components/LoginBtn'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <p>DND manager</p>
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Dashboard">Dashboard</a>
                </li>
            </ul>
            <div>
                <LoginBtn />
            </div>
        </div>
    )
}