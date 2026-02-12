import express from "express";

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/new", (req, res) => {});

router.post("/new", (req, res) => {});

router.get("/:slug", (req, res) => {});

router.put("/:slug", (req, res) => {});

router.delete("/:slug", (req, res) => {});

export default router;
