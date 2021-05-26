set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "transactions" (
  "transactionId" serial not null,
  "userId" text not null,
  "date" date not null,
  "amount" integer not null,
  "category" text not null,
  "description" text not null,
  primary key ("transactionId")
);
