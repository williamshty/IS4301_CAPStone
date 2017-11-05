import Api from '@/services/Api'

export default {
  postForm (results) {
    return Api().post('postForm', results)
  }
}

// AuthenticationService.register({
//   email:'E0012644@u.nus.edu'
//   password: 'anyone'
// })
