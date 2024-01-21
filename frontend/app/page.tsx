"use client"

import Image from "next/image"
import crewmate from "@/public/crewmate.png"
import styles from "./Dashboard.module.css"
import { useSession } from "next-auth/react"

export default function Index() {
  const { data: session } = useSession()
  console.log(session?.user)
  return (
    <div className={styles.dashboard}>
      {session?.user ? <h3>Hello, {session.user.name}!</h3> : <h3>Hello, World!</h3>}
      <Image src={crewmate} alt="crewmate" width={500} height={500} />
    </div>
  )
}
