"use client"

import twerkingCrewmate from "@/public/twerking-crewmate.gif"
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import Image from "next/image"
import styles from "../Dashboard.module.css"

import { CreateCharacter } from "@/app/dashboard/createCharacter"

export default function Page() {
    const GET_CHARACTERS = gql`
    query GetCharacters {
        characters {
            id
            user_id
            name
        }
    }`
    const { loading, error, data } = useQuery(GET_CHARACTERS)
    return (
        <div className={styles.dashboard}>
            <h3>Welcome to dashboard!</h3>
            <Image src={twerkingCrewmate} alt="crewmate" width={500} />
            <CreateCharacter />
            {loading && <p>Loading characters...</p>}
            {error && <p>Error while loading characters</p>}
            {data && <p>characters loaded</p>}
        </div>
    )
}

