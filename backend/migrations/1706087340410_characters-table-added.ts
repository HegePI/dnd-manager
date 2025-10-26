import { ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("characters", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
    },
    user_id: { type: "uuid", notNull: true },
    name: { type: "text", notNull: true },
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

  pgm.createTrigger("characters", "set_timestamp_trigger", {
    when: "BEFORE",
    operation: "UPDATE",
    level: "ROW",
    function: "set_timestamp",
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTrigger("characters", "set_timestamp_trigger");
  pgm.dropTable("characters");
}
