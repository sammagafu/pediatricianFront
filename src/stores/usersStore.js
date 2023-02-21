import {
  ref,
  computed
} from 'vue'
import {
  defineStore
} from 'pinia'
// import axios from 'axios'
import axiosInstance from '../http'

export const authStore = defineStore({
  id: 'userdata',

  state: () => ({
    isAuthenticated: false,
    isLoading : false,
    authToken: localStorage.getItem('access'),
    refreshToken: localStorage.getItem('refresh'),
    token : {
      access : localStorage.getItem('access'),
      refresh : localStorage.getItem('refresh'),

    },
    userData: {
      id: localStorage.getItem('userID'),
      email: localStorage.getItem('email'),
      full_name: localStorage.getItem('full_name'),
      phone: localStorage.getItem('phone'),
      is_staff: localStorage.getItem('is_staff'),
      mctnumber: localStorage.getItem('mctnumber'),
      avatar: localStorage.getItem('avatar'),
    },
  }),
  getters: {
    // getAuthToken : (state) =
    doubleCount: (state) => state.counter * 2
  },
  actions: {

    setUser(user) {
      this.userData = user
    },

    getUserData() {
      axiosInstance.get('auth/users/me/', {
      }).then(response => {
        console.log(response.data)
        this.setUser({
          'userID': response.data.pk,
          'email': response.data.email,
          'is_staff': response.data.is_staff,
          'full_name': response.data.get_user_fullname,
          'phone': response.data.phone,
          'mctnumber': response.data.mctnumber,
          'avatar': response.data.avatar,
        })

        localStorage.setItem('email', response.data.email)
        localStorage.setItem('userID', response.data.pk)
        localStorage.setItem('full_name', response.data.full_name)
        localStorage.setItem('phone', response.data.phone)
        localStorage.setItem('mctnumber', response.data.mctnumber)
        localStorage.setItem('is_staff', response.data.is_staff)
        localStorage.setItem('avatar', response.data.avatar)
        this.isAuthenticated = true
      }).catch(error => {
        console.log(error)
      })
    },

    logoutUser() {
      this.user = null;
      this.isAuthenticated = false
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
      localStorage.removeItem("email");
      this.$router.push('/account/login')
    }
  }
})


// isAuthenticated: false,
//     isLoading: false,
//     authToken: JSON.parse(localStorage.getItem('access')),
//     refreshToken: JSON.parse(localStorage.getItem('refresh')),
//     userData: {
//       id: localStorage.getItem('userID'),
//       email: localStorage.getItem('email'),
//       full_name: localStorage.getItem('full_name'),
//       phone: localStorage.getItem('phone'),
//       is_student: localStorage.getItem('is_student'),
//       is_tuitor: localStorage.getItem('is_tuitor'),
//       mctnumber: localStorage.getItem('mctnumber'),
//       avatar: localStorage.getItem('avatar'),
//     },