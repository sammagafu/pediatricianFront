<template>
    <LoadingScreen :loading="authdata.isLoading"/>
    
        <section class="breadcrumb-header">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="banner">
                        <h1>Projects</h1>
                        <ul>
                            <li>
                                <router-link :to="{ name: 'home' }">Home</router-link>
                            </li>
                            <li><i class="fas fa-angle-right"></i></li>
                            <li>Projects</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="blog py-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="blog-item" v-for="proj in projects" :key="proj">
                                    <div class="img-box">
                                        <router-link :to="{name:'projectdetail',params:{slug:proj.slug}}"><img class="img-fluid"  alt="{{proj.projectname}}" :src="proj.cover"></router-link>
                                        <ul>
                                            <li>{{proj.donor.donors}}</li>
                                        </ul>
                                    </div>
                                    <div class="text-box">
                                        <span class="blog-date">Start Date {{proj.startdate}}</span>
                                        <router-link :to="{name:'projectdetail',params:{slug:proj.slug}}"><h5>{{proj.projectname}}</h5></router-link>
                                        <p>{{proj.shortdescription}}</p>
                                        <router-link :to="{name:'projectdetail',params:{slug:proj.slug}}" class="link">Discover More</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-4">
                        <div class="sidebar-blog ml-20">
                            <div class="widget">
                                <div class="widget-title">
                                    <h3>Search</h3>
                                </div>
                                <div class="widget-body">
                                    <div class="search">
                                        <input type="search" name="search" placeholder="Search Your Keywords...">
                                        <button class="click">
                                            <i class="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="widget">
                                <div class="widget-title">
                                    <h3>Instagram</h3>
                                </div>
                                <div class="widget-body">
                                    <div class="instagram">
                                        <ul>
                                            <li>
                                                <img class="img-fluid" src="assets/images/gallery/01_gallery.jpg" alt="01 Gallery">
                                                <a class="open-photo" href="#">
                                                    <i class="fas fa-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <img class="img-fluid" src="assets/images/gallery/02_gallery.jpg" alt="02 Gallery">
                                                <a class="open-photo" href="#">
                                                    <i class="fas fa-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <img class="img-fluid" src="assets/images/gallery/03_gallery.jpg" alt="02 Gallery">
                                                <a class="open-photo" href="#">
                                                    <i class="fas fa-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <img class="img-fluid" src="assets/images/gallery/04_gallery.jpg" alt="04 Gallery">
                                                <a class="open-photo" href="#">
                                                    <i class="fas fa-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <img class="img-fluid" src="assets/images/gallery/05_gallery.jpg" alt="05 Gallery">
                                                <a class="open-photo" href="#">
                                                    <i class="fas fa-plus"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <img class="img-fluid" src="assets/images/gallery/06_gallery.jpg" alt="06 Gallery">
                                                <a class="open-photo" href="#">
                                                    <i class="fas fa-plus"></i>
                                                </a>
                                            </li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                            <div class="widget">
                                <div class="widget-title">
                                    <h3>categories</h3>
                                </div>
                                <div class="categories">
                                    <ul>
                                        <li><a><i class="fas fa-folder-open"></i> Hematology <span><i class="fas fa-angle-right"></i></span></a></li>
                                        <li><a><i class="fas fa-folder-open"></i> Neurology <span><i class="fas fa-angle-right"></i></span></a></li>
                                        <li><a><i class="fas fa-folder-open"></i> gastroenterology <span><i class="fas fa-angle-right"></i></span></a></li>
                                        <li><a><i class="fas fa-folder-open"></i> pulmonology <span><i class="fas fa-angle-right"></i></span></a></li>
                                        <li><a><i class="fas fa-folder-open"></i> cardiology <span><i class="fas fa-angle-right"></i></span></a></li>
                                        <li><a><i class="fas fa-folder-open"></i> ophthalmology <span><i class="fas fa-angle-right"></i></span></a></li>
                                        <li><a><i class="fas fa-folder-open"></i> orthopedics <span><i class="fas fa-angle-right"></i></span></a></li>
                                        <li><a><i class="fas fa-folder-open"></i> radiology <span><i class="fas fa-angle-right"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="widget">
                                <div class="widget-title">
                                    <h3>Follow Us</h3>
                                </div>
                                <div class="widget-body">
                                    <div class="follow">
                                        <ul class="icon">
                                            <li><a><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a><i class="fab fa-twitter"></i></a></li>
                                            <li><a><i class="fab fa-instagram"></i></a></li>
                                            <li><a><i class="fab fa-dribbble"></i></a></li>
                                            <li><a><i class="fab fa-behance"></i></a></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                            <div class="widget">
                                <div class="widget-title">
                                    <h3>News, Tips &amp; More :</h3>
                                </div>
                                <div class="news-box">
                                    <div class="news-item">
                                        <img class="img-fluid" src="assets/images/blog/01_blog.jpg" alt="01 Blog">
                                        <div class="item-content">
                                            <span><a>Jan 25, 2021</a></span>
                                            <a class="title-blog">
                                                <h5>Diabetes &amp; blood pressor check up</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="news-item">
                                        <img class="img-fluid" src="assets/images/blog/02_blog.jpg" alt="02 Blog">
                                        <div class="item-content">
                                            <span><a>May 25, 2021</a></span>
                                            <a class="title-blog">
                                                <h5>Doctor’s Failure to Diagnose a Medical Condition</h5>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="news-item">
                                        <img class="img-fluid" src="assets/images/blog/03_blog.jpg" alt="03 Blog">
                                        <div class="item-content">
                                            <span><a>May 5, 2021</a></span>
                                            <a class="title-blog">
                                                <h5>Brushing your teeth may keep your heart healthy</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget">
                                <div class="widget-title">
                                    <h3>Tags</h3>
                                </div>
                                <div class="widget-body">
                                    <div class="tags">
                                        <ul>
                                            <li><a href="#">clinic</a></li>
                                            <li><a href="#">corona</a></li>
                                            <li><a href="#">dental</a></li>
                                            <li><a href="#">dentist</a></li>
                                            <li><a href="#">doctor</a></li>
                                            <li><a href="#">health</a></li>
                                            <li><a href="#">health care</a></li>
                                            <li><a href="#">healthcare</a></li>
                                            <li><a href="#">hospital</a></li>
                                            <li><a href="#">medical</a></li>
                                            <li><a href="#">medical care</a></li>
                                            <li><a href="#">medicine</a></li>
                                            <li><a href="#">pharmacy</a></li>
                                            <li><a href="#">physician</a></li>
                                            <li><a href="#">surgeon</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
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
import { authStore } from '../stores/usersStore';
export default {

    setup(){
        const authdata = authStore()
        const projects = ref([])
        onBeforeMount(()=>{
            authdata.isLoading = true
        })
        onMounted(() => {
            axiosInstance.get('resource')
                .then(response => {
                    projects.value = response.data;
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
            authdata.isLoading = false  
        })
        return {
            projects,authdata
        }
    },

    components: {LoadingScreen }
}
</script>

<style scoped>
    .breadcrumb-header{
      background-image: url(../assets/images/header/01_header.jpg)
    }
  </style>
  