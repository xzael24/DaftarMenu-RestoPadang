// routes/menu.js
const express = require("express");
const router = express.Router();
const db = require("../firebase");

router.get("/", async (req, res) => {
  try {
    const menuSnapshot = await db.collection("menu").get();
    const menuItems = menuSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(menuItems);
  } catch (error) {
    res.status(500).send("Gagal mengambil data menu");
  }
});

module.exports = router;
