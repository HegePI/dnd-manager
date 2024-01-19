import { ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export const up = async (pgm: MigrationBuilder): Promise<void> => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
    },
    name: { type: "text", notNull: true },
    username: { type: "text", notNull: true },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    deleted_at: { type: "timestamp" },
  });

  pgm.createTrigger("users", "set_timestamp_trigger", {
    when: "BEFORE",
    operation: "UPDATE",
    level: "ROW",
    function: "set_timestamp",
  });
};

export const down = async (pgm: MigrationBuilder): Promise<void> => {
  pgm.dropTrigger("users", "set_timestamp_trigger");
  pgm.dropTable("users");
};
