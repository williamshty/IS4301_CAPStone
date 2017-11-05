import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email:'E0012644@u.nus.edu'
//   password: 'anyone'
// })
