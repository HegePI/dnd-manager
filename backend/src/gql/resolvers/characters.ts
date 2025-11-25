import { Context } from "../..";

interface CharacterArgs {
    id: string;
}

interface CreateCharacterArgs {
    input: {
        name: string;
        user_id: string;
    };
}

interface UpdateCharacterArgs {
    input: {
        id: string;
        name: string;
        user_id: string;
    };
}

interface DeleteCharacterArgs {
    input: {
        id: string;
    };
}

export const characterQueries = {
    character: async (
        _root: unknown,
        args: CharacterArgs,
        { pool }: Context,
    ) => {
        const { id } = args;
        const res = await pool.query({
            text: `SELECT * FROM characters WHERE id=$1 AND deleted_at IS NULL;`,
            values: [id],
        });
        return res.rows[0];
    },
    characters: async (_root: unknown, _args: unknown, { pool }: Context) => {
        const res = await pool.query({
            text: "SELECT * from characters WHERE deleted_at IS NULL ORDER BY name ASC;",
        });
        return res.rows;
    },
    characterCount: async (
        _root: unknown,
        _args: unknown,
        { pool }: Context,
    ) => {
        const res = await pool.query(
            "SELECT COUNT(*) FROM characters WHERE deleted_at IS NULL;",
        );
        return Number(res.rows[0].count);
    },
};

export const characterMutations = {
    createCharacter: async (
        _root: unknown,
        args: CreateCharacterArgs,
        { pool }: Context,
    ) => {
        const { name, user_id } = args.input;
        const res = await pool.query({
            text: "INSERT INTO characters (name, user_id) VALUES ($1, $2) RETURNING *;",
            values: [name, user_id],
        });
        return res.rows[0];
    },
    updateCharacter: async (
        _root: unknown,
        args: UpdateCharacterArgs,
        { pool }: Context,
    ) => {
        const { id, name, user_id } = args.input;
        const res = await pool.query({
            text: `UPDATE characters SET name=$1 WHERE id=$2 AND user_id=$3 AND deleted_at IS NULL RETURNING *;`,
            values: [name, id, user_id],
        });
        return res.rows[0];
    },
    deleteCharacter: async (
        _root: unknown,
        args: DeleteCharacterArgs,
        { pool }: Context,
    ) => {
        const { id } = args.input;
        await pool.query({
            text: `UPDATE characters SET deleted_at=now() WHERE id=$1;`,
            values: [id],
        });
    },
};
