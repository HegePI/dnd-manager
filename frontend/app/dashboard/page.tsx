import Image from "next/image"
import twerkingCrewmate from "@/public/twerking-crewmate.gif"
import styles from "../Dashboard.module.css"

export default async function Page() {
    return (
        <div className={styles.dashboard}>
            <h3>Welcome to dashboard!</h3>
            <Image src={twerkingCrewmate} alt="crewmate" width={500} height={500} />
        </div>
    )
}

