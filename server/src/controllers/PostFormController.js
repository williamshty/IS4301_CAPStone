const {RiskProfileForm} = require('../models')

module.exports = {
    async postForm (req, res) {
        try {
            console.log(req.body)
            const riskProfileForm = await RiskProfileForm.create(req.body)
            res.send(riskProfileForm.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'Failed to post form'
            })
        }
    }
}
