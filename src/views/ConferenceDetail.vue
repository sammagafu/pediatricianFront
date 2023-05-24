<template>
    <LoadingScreen :loading="authdata.isLoading"/>
    <section class="breadcrumb-header">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-10">
                    <div class="banner">
                        <h1>{{conference.name}}</h1>
                        <ul>
                            <li>
                                {{conference.venue}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="single-department single-gallery py-100-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="sidebar-department mr-20">
                            <div class="widget">
                                <div class="widget-title">
                                    <h3>Resources</h3>
                                </div>
                                <div class="widget-body">
                                    <ul class="single-department-list">
                                        <li><a :href="conference.resolution">Resolution <i class="fas fa-angle-right"></i></a></li>
                                        <li><a :href="conference.abstract">Abstract Book <i class="fas fa-angle-right"></i></a></li>
                                        <li><a :href="conference.images">Images <i class="fas fa-angle-right"></i></a></li>
                                        <li><a :href="conference.presentation">Presentations <i class="fas fa-angle-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="single-department-box">
                            <h2>Theme:{{conference.theme}}</h2>
                            <p>{{conference.shortdescription}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import LoadingScreen from '../components/LoadingScreen.vue';
import { authStore } from "@/stores/usersStore";
import { ref, onBeforeMount, onMounted } from "vue";
import axios from 'axios';
import { useRoute } from 'vue-router';


export default {
    components: {
    LoadingScreen,
  },
  setup(){
        const authdata = authStore();
        const route = useRoute();
        const conference = ref('');
        const slug = ref('');

        onBeforeMount(() => {
        authdata.isLoading = true;
      });

      onMounted(() => {
        slug.value = route.value.params.slug;
        console.log('slug.value :>> ', slug.value);
        
        axios.get(`https://api.pediatrics.or.tz/api/v1/conference/${slug}`).then((response)=>{
            conference.value = response.data
            authdata.isLoading = false;
        })
        // 
      });

        return {
            authdata,conference
        }
  }
}
</script>