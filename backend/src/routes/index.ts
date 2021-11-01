import { URLController } from "../controller/URLController";
import { Router } from "express";

const router = Router();

const urlController = new URLController();

router.post("/shorten", urlController.shorten);

router.get("/:hash", urlController.redirect);

export { router };
