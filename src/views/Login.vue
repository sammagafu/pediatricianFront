<template>
<LoadingScreen :loading="authdata.isLoading"/>

    <section class="py-100-70 login">
        <div class="text-center mb-4">
            <h2>Welcome Please Login</h2>
        </div>
        <div class="container">
            <div class="col-md-4 offset-md-4">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form @submit.prevent="userLogin">
                            <!-- Email input -->
                            <div class="alert alert-danger" role="alert" v-if="message">
                                {{message.detail}}
                            </div>
                            
                            <div class="form-group mb-4">
                                <label class="form-label" for="loginName">Email Address</label>
                                <input type="text" id="loginName" class="form-control" v-model="email"/>
                                
                            </div>

                            <!-- Password input -->
                            <div class="form-group mb-4">
                                <label class="form-label" for="loginPassword">Password</label>
                                <input type="password" id="loginPassword" class="form-control" v-model="password"/>
                            </div>

                            <!-- 2 column grid layout -->
                            <div class="row mb-4">
                                <div class="col-md-6 d-flex justify-content-center">
                                    <!-- Checkbox -->
                                    <div class="form-check mb-3 mb-md-0">
                                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                                        <input class="form-check-input" type="checkbox" v-model="rememberme" id="loginCheck" />
                                        
                                    </div>
                                </div>

                                <div class="col-md-6 d-flex justify-content-center">
                                    <!-- Simple link -->
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                            <!-- Register buttons -->
                            <div class="text-center">
                               <p>Not a member? <router-link :to="{name:'register'}"> Register</router-link></p>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen.vue';
import { authStore } from '@/stores/usersStore'
import { ref,onBeforeMount,onMounted } from 'vue';
import axiosInstance from '../http';
import { useRouter } from 'vue-router'
export default {
components : {
    LoadingScreen
  },
  setup(){
    const router = useRouter()
    const authdata = authStore()
    const email = ref('')
    const password = ref('')
    const rememberme = ref(false)
    const message = ref('')
    
    // obtain jwt Token
    function userLogin(){
      const loginData = {
        email: this.email,
        password: this.password
      }
      onBeforeMount(()=>{
      authdata.isLoading = true
    });

    onMounted(()=>{
      authdata.isLoading = false
      console.log('authdata.token :>> ', authdata.token);
    });

      axiosInstance.post('auth/login/', loginData ).then(response => {
        authdata.isLoading = true
        authdata.token = response.data
        authdata.authToken = response.data.access
        authdata.refreshToken = response.data.refresh
        authdata.isAuthenticated = true
        localStorage.setItem("access", response.data.access)
        localStorage.setItem("refresh", response.data.refresh)

        localStorage.setItem("token", response.data)

        console.log('response.data :>> ', response.data);
        authdata.getUserData() 
        
        authdata.isLoading = false
        console.log('authdata.token:>> ', authdata.token); 
        router.push({name:'membership'})
      }).catch(error => {
        console.log(error);
      })
      
    }
    return { email, password,rememberme,message,userLogin,authdata}
  },
}
</script>

<style scoped>
    a{
        color: #1A3D7D;
        font-size: 14px;
        font-weight: 700;
    }
    a:hover{
        color: darkblue;
    }
</style>