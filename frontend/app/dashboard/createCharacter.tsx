"use server"

import { auth } from "@/auth/auth";
import { gql, useMutation } from "@apollo/client";


const CREATE_CHARACTER = gql`
mutation CreateCharacter($name: String) {
    createCharacter(name: $name) {
        user_id
        name
    }
}
`

export const CreateCharacter = async () => {
    const createCharacter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const name = e.currentTarget.characterName.value
        mutateCreateCharacter({ variables: { user_id, name } })
    }

    const session = await auth()
    const [mutateCreateCharacter, { loading, error }] = useMutation(CREATE_CHARACTER)

    if (!session?.user?.id) return <p>user_id not found</p>
    const user_id = session.user.id

    if (loading) return 'Submitting'
    if (error) return 'Error'

    return (
        <div>
            <form onSubmit={createCharacter}>
                <input name="characterName" type="text" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}