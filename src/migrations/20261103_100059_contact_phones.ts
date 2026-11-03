import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Contact details: the single "phone" becomes a list of "phones"
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "contact_settings_phones" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar NOT NULL
  );

  ALTER TABLE "contact_settings_phones" ADD CONSTRAINT "contact_settings_phones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contact_settings_phones_order_idx" ON "contact_settings_phones" USING btree ("_order");
  CREATE INDEX "contact_settings_phones_parent_id_idx" ON "contact_settings_phones" USING btree ("_parent_id");

  -- the new numbers (they replace the old one)
  INSERT INTO "contact_settings_phones" ("_order", "_parent_id", "id", "number")
  SELECT n.ord, cs.id, substr(md5(random()::text || n.num), 1, 24), n.num
  FROM "contact_settings" cs
  CROSS JOIN (VALUES (1, '+91 79775 62130'), (2, '+91 88509 09817')) AS n(ord, num);

  ALTER TABLE "contact_settings" DROP COLUMN "phone";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "contact_settings" ADD COLUMN "phone" varchar;
  UPDATE "contact_settings" cs SET "phone" = COALESCE(
    (SELECT p."number" FROM "contact_settings_phones" p WHERE p."_parent_id" = cs.id ORDER BY p."_order" LIMIT 1), '');
  ALTER TABLE "contact_settings" ALTER COLUMN "phone" SET NOT NULL;
  DROP TABLE "contact_settings_phones" CASCADE;`)
}
