import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_settings_addresses" ADD COLUMN "show_on_map" boolean DEFAULT true;
  -- the registered office stays listed under "Visit us" but gets no map tab
  UPDATE "contact_settings_addresses" SET "show_on_map" = false WHERE lower("label") = 'registered office';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_settings_addresses" DROP COLUMN "show_on_map";`)
}
