import { type ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export const up = async (pgm: MigrationBuilder): Promise<void> => {
  pgm.createExtension("uuid-ossp");
};

export const down = async (pgm: MigrationBuilder): Promise<void> => {
  pgm.dropExtension("uuid-ossp");
};
