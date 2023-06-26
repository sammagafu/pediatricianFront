<template>
  <LoadingScreen :loading="authdata.isLoading"/>
  <section class="py-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <AuthSideBar />
        </div>
        <div class="col-md-8">
          <div class="blog-item">
            <div class="img-box">
              <img class="img-fluid" :src="up.cover" alt="03 Blog" />
            </div>
            <div class="text-box">
              <span class="blog-date"> Published at : {{ up.created }}</span>
              <h5>{{ up.title }}</h5>
              <p>{{ up.content }}</p>

              <div class="share-post">
                <span>Share Post :</span>
                <ul>
                  <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-behance"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import axiosInstance from '../http';
import AuthSideBar from '@/components/AuthSideBar.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import { ref, onMounted,onBeforeMount } from 'vue'
import { authStore } from '@/stores/usersStore';
import { useRouter } from 'vue-router'

export default {

    setup(){
        const router = useRouter()
        const authdata = authStore()
        const up = ref([])
        onBeforeMount(()=>{
            authdata.isLoading = true
        })
        onMounted(() => {
            axiosInstance.get(`update/${this.$route.params.slug}`)
                .then(response => {
                  up.value = response.data;
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
            authdata.isLoading = false  
        })
        return {
          up,authdata
        }
    },

    components: { AuthSideBar,LoadingScreen }
}
</script>

