import express from "express";
import database from "../configs/database";

export default async (app: any) => {
  database.mongoDB();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
