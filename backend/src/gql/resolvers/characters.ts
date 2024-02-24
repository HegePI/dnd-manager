import { Context } from "../..";

export const characterQueries = {
  character: async (_root: any, args: any, { pool }: Context) => {
    const { id } = args;
    const res = await pool.query({
      text: `SELECT * FROM characters WHERE id=$1;`,
      values: [id],
    });
    return res.rows[0];
  },
  characters: async (_root: any, _args: any, { pool }: Context) => {
    const res = await pool.query({ text: "SELECT * from characters;" });
    return res.rows;
  },
  characterCount: async (_root: any, _args: any, { pool }: Context) => {
    const res = await pool.query("SELECT COUNT(*) FROM characters;");
    return res.rows[0].count;
  },
};

export const characterMutations = {
  createCharacter: async (_root: any, args: any, { pool }: Context) => {
    const { user_id, name } = args.input;
    const res = await pool.query({
      text: "INSERT INTO characters (user_id, name) VALUES ($1, $2) RETURNING *;",
      values: [user_id, name],
    });
    return res.rows[0];
  },
  updateCharacter: async (_root: any, args: any, { pool }: Context) => {
    const { id, name } = args.input;
    const res = await pool.query({
      text: `UPDATE characters SET name=$1 WHERE id=$2 RETURNING *;`,
      values: [name, id],
    });
    return res.rows[0];
  },
  deleteCharacter: async (_root: any, args: any, { pool }: Context) => {
    const { id } = args.input;
    await pool.query({
      text: `UPDATE characters SET deleted_at=now() WHERE id=$1;`,
      values: [id],
    });
  },
};
