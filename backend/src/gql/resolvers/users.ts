import { Context } from "../..";

export const userQueries = {
  user: async (_root: any, args: any, { pool }: Context) => {
    const { id } = args;
    const res = await pool.query({
      text: `SELECT * FROM users WHERE id=$1;`,
      values: [id],
    });
    return res.rows[0];
  },
  users: async (_root: any, _args: any, { pool }: Context) => {
    const res = await pool.query({ text: "SELECT * from users;" });
    console.log(res);
    return res.rows;
  },
  userCount: async (_root: any, _args: any, { pool }: Context) => {
    const res = await pool.query("SELECT COUNT(*) FROM users;");
    return res.rows[0].count;
  },
};

export const userMutations = {
  createUser: async (_root: any, args: any, { pool }: Context) => {
    const { name, username } = args.input;
    const res = await pool.query({
      text: "INSERT INTO users (name, username) VALUES ($1, $2) RETURNING *;",
      values: [name, username],
    });
    return res.rows[0];
  },
  updateUser: async (_root: any, args: any, { pool }: Context) => {
    const { id, name, username } = args.input;
    const res = await pool.query({
      text: `UPDATE users SET name=$1, username=$2 WHERE id=$3 RETURNING *;`,
      values: [name, username, id],
    });
    return res.rows[0];
  },
  deleteUser: async (_root: any, args: any, { pool }: Context) => {
    const { id } = args.input;
    await pool.query({
      text: `UPDATE users SET deleted_at=now() WHERE id=$1;`,
      values: [id],
    });
  },
};
