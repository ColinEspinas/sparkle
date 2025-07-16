CREATE TABLE "companies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"website" text NOT NULL,
	"logo" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "offers" ADD COLUMN "companyId" uuid NOT NULL;