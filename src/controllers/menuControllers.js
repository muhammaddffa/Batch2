// panggi model menu 
const { where } = require('sequelize');
const { menu, kategori, Sequelize } = require('../models')
const Op = Sequelize.Op


module.exports = {

    // post data
    postDataMenu : (req, res) => {
        const {body} = req;

        const newData = {
            ...body,
            Image: req.Image.url,
        }

        menu.create(newData)
        .then((data) => {
            res.status(200).send({
                msg: 'success post data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed post data',
                status : 500,
                error
            })
        }) 
    
    },

    getAllData: (req, res) => {
        menu.findAll({
            include: ({
                model:kategori,
                as: "kategoris",
                attributes: ['nama_kategori']
            })
        })
        .then((data) => {
            res.status(200).send({
                msg: 'success get All data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed get All data',
                status : 500,
                error
            })
        })
    },

    deleteData: (req, res) => {
        const {id} = req.params;

        menu.destroy({where: {id}})
        .then((data) => {
            res.status(200).send({
                msg: 'success delete data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed delete data',
                status : 500,
                error
            })
        })
    },

   updateData: (req, res) => {
        const {id} = req.params;

        menu.create(id)
        .then((data) => {
            res.status(200).send({
                msg: 'success delete data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed delete data',
                status : 500,
                error
            })
        })
    },
    getByid: (req, res) => {
        const {id} = req.params;
        
        menu.findOne(id)
        .then((data) => {
            res.status(200).send({
                msg: 'success delete data',
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed delete data',
                status : 500,
                error
            })
        })
    },
    searchBytitle: (req, res) => {
        const {nama} = req.query;
        menu.findAll({where: {nama: {[Op.like]: '%'+nama+'%'}}})
        .then((data) => {
            res.status(200).send({
                msg: 'success search data',
                status: 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                msg: 'failed search data',
                status: 500,
                error
            })
        }) 

    }

}