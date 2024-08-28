const {Card} = require("../models/models");
exports.getCards = async (req, res, next) => {
    try {
        const cards = await Card.findAll();
        res.status(200).json({
            status: 'success',
            data: cards,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: error.message,
        });
    }
};

exports.createCard = async (req, res, next) => {
    try {
        const card = await Card.create(req.body);
        console.log(card)
        res.status(201).json({
            status: 'success',
            data: card,
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            msg: error.message,
        });
    }
};