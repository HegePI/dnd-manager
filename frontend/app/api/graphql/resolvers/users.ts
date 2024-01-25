import { Context } from "../route";

export const characterQueries = {
  character: async (_root: any, args: any, context: Context) => {
    const { id } = args;
    const res = await context.client.query({
      text: `SELECT * FROM characters WHERE id=$1;`,
      values: [id],
    });
    return res.rows[0];
  },
  characters: async (_root: any, _args: any, context: Context) => {
    const res = await context.client.query({
      text: "SELECT * from characters;",
    });
    console.log(res);
    return res.rows;
  },
  characterCount: async (_root: any, _args: any, context: Context) => {
    const res = await context.client.query("SELECT COUNT(*) FROM characters;");
    return res.rows[0].count;
  },
};

export const characterMutations = {
  createCharacter: async (_root: any, args: any, context: Context) => {
    const { user_id, name } = args.input;
    const res = await context.client.query({
      text: "INSERT INTO characters (user_id, name) VALUES ($1, $2) RETURNING *;",
      values: [user_id, name],
    });
    return res.rows[0];
  },
  updateCharacter: async (_root: any, args: any, context: Context) => {
    const { name, id } = args.input;
    const res = await context.client.query({
      text: `UPDATE characters SET name=$1 WHERE id=$2 RETURNING *;`,
      values: [name, id],
    });
    return res.rows[0];
  },
  deleteCharacter: async (_root: any, args: any, context: Context) => {
    const { id } = args.input;
    await context.client.query({
      text: `UPDATE characters SET deleted_at=now() WHERE id=$1;`,
      values: [id],
    });
  },
};
