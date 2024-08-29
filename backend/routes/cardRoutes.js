const {getCards, createCard, updateCard, deleteCard, getCardById} = require("../controllers/cardControllers");

const express = require("express");
const router = express.Router()


router.route('/')
    .get(getCards)
    .post(createCard)
router.route("/:id").get(getCardById)

module.exports = router;