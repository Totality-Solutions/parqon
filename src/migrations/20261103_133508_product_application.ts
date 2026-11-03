import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" ADD COLUMN "application_id" integer;
  ALTER TABLE "products" ADD CONSTRAINT "products_application_id_media_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_application_idx" ON "products" USING btree ("application_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" DROP CONSTRAINT "products_application_id_media_id_fk";
  
  DROP INDEX "products_application_idx";
  ALTER TABLE "products" DROP COLUMN "application_id";`)
}
