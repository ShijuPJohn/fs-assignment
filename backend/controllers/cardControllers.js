const {Card} = require("../models/models");
const {Op} = require("sequelize");

exports.getCards = async (req, res, next) => {
    try {
        const {search} = req.query;
        let cards;
        if (search) {
            cards = await Card.findAll({
                where: {
                    [Op.or]: [
                        {title: {[Op.like]: '%' + search + '%'}},
                        {description: {[Op.like]: '%' + search + '%'}}
                    ]
                }
            });
            console.log("cards", cards);
        } else {
            cards = await Card.findAll();
        }
        if (!cards.length) {
            res.status(404).json({
                status: 'error',
                msg: "No cards found",
            });
        }
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
exports.getCardById = async (req, res, next) => {
    try {
        const card = await Card.findByPk(req.params.id);

        if (!card) {
            return res.status(404).json({
                status: 'error',
                msg: 'Card not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: card,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: error.message,
        });
    }
};