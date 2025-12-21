import { type ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export const up = async (pgm: MigrationBuilder): Promise<void> => {
    pgm.sql(`
CREATE OR REPLACE FUNCTION set_timestamp() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
`);
};

export const down = async (pgm: MigrationBuilder): Promise<void> => {
    pgm.sql(`DROP FUNCTION IF EXISTS set_timestamp();`);
};
