const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema) // eslint-disable-line no-unused-vars
        if (error) {
            switch (error.details[0].context.key) {
                case 'email' :
                    res.status(400).send({
                        error: 'You must provide a valid email'
                    })
                    break
                case 'password' :
                    res.status(400).send({
                        error: 'Password must be valid'
                    })
                    break
                default :
                    res.status(400).send({
                        error: 'Invalid information'
                    })
                    break
            }
        } else {
            next()
        }
    }
}
