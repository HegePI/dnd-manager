import Image from "next/image"
import crewmate from "@/public/crewmate.png"
import styles from "./Dashboard.module.css"

export default function Index() {
  return (
    <div className={styles.dashboard}>
      <h3>Hello, world!</h3>
      <Image src={crewmate} alt="crewmate" width={500} height={500} />
    </div>
  )
}
