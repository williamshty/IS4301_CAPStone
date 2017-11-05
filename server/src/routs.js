const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PostFormController = require('./controllers/PostFormController')
module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',
        // AuthenticationControllerPolicy.register,
        AuthenticationController.login)
    app.post('/postForm',
        PostFormController.postForm)
}
