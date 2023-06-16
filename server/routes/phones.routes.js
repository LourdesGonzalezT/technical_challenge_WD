const router = require("express").Router()

const Phone = require('./../models/Phone.model')

router.get("/getAllPhones", (req, res, next) => {

    Phone
        .find()
        .then(response => setTimeout(() => res.json(response)))
        .catch(err => next(err))
})


router.get("/getOnePhone/:_id", (req, res, next) => {

    const { _id } = req.params

    Phone
        .findById(_id)
        .then(response => setTimeout(() => res.json(response)))
        .catch(err => next(err))
})

module.exports = router