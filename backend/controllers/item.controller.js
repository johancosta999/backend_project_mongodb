const Item = require('../models/Item');
const User = require('../models/User');

const createItem = async (req, res) => {
    try {
        const { title, description } = req.body;

        const item = await Item.create({ title, description, user: req.userId });
        res.status(201).json(item);

    } catch (error) {
        return res.status(500).json({ message: 'Unable to create item'})
    }
};

const getAllItems = async(req, res) => {
    try {
        const items = await User.find({ user: req.userId });
        res.json(items);

    } catch (error) {
        return res.status(500).json({ message: 'Unable to retrieve all the items'})
    }
};

const getItem = async(req, res) => {
    try {
        const item = await Item.findOne({ _id: req.params.id, user: req.userId });

        if(!item) {
            return res.status(404).json({ message: 'Item not found'})
        }
        re.json(item);

    } catch(error) {
        return res.status(500).json({ message: 'Unable to get item' })
    }
};

const updateItem = async(req, res) => {
    try {
        const item = await Item.findByIdAndUpdate({
            _id: req.params.id,
            user: req.userId,
        },
        req.body,
        { new: true }
    );

    if(!item) {
        return res.status(404).json({ message : 'Item not found'})
    }
    res.json(item);

    } catch(error) {
        return res.status(500).json({ message: 'Unable to update item'});
    }
};

const deleteItem = async(req, res) => {
    try {
        const item = await Item.findByIdAndDelete({
            _id: req.params.id,
            user: req.userId
        })

        if(!item) {
            return res.status(404).json({ message: 'Unable to find Item '});
        }

        res.status(200).json({ deletedItem : item })

    } catch (error) {
        return res.status(500).json({ message: 'Unable to delete Item '})
    }
};

module.exports = {
    createItem,
    getAllItems,
    getItem,
    updateItem,
    deleteItem
}