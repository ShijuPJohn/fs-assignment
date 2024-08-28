const {getCards, createCard, updateCard, deleteCard} = require("../controllers/cardControllers");

const express = require("express");
const router = express.Router()


router.route('/')
    .get(getCards)
    .post(createCard)

module.exports = router;