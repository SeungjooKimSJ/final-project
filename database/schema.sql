set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "users" (
  "userId"        serial,
  "name"          text            not null,
  "createdAt"     timestamptz(6)  not null default now(),
  primary key ("userId")
);

create table "transactions" (
  "transactionId" serial,
  -- "userId"        text            not null,
  "status"        text            not null,
  "date"          date            not null,
  "amount"        integer         not null,
  "category"      text            not null,
  "description"   text            not null,
  "createdAt"     timestamptz(6)  not null default now(),
  "updatedAt"     timestamptz(6)  not null default now(),
  primary key ("transactionId")
);
