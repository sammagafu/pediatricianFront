<template>
    <LoadingScreen :loading="authdata.isLoading"/>
    <section class="py-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <AuthSideBar />
                </div>
                <div class="col-md-8">
                    <img :src="user.x" alt="">
                    <h2>My Profile for {{user.first_name}} {{user.last_name}}</h2>
                    <p>Membership ID: {{user.memberId}}</p>
                    <p>Member type: {{user.typeofmember}}</p>
                    <hr>
                    <p>First name : {{user.first_name}}</p>
                    <p>Middle name : {{user.middle_name}}</p>
                    <p>Last Name : {{user.last_name}}</p>
                    <p>Gender : {{user.gender}}</p>
                    <p>email : {{user.email}}</p>
                    <p>Phone Number : {{user.phone}}</p>
                    
                    <hr>
                    <p>MCT Number : {{user.mctnumber}}</p>
                    <p>Your Occupation: {{user.profession}}</p>
                    <p>Working at: {{user.organization}}</p>
                    <p>Region : {{user.region}}</p>
                    <p>Field: {{user.areaofwork}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axiosInstance from '../http';
import AuthSideBar from '@/components/AuthSideBar.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import { ref, onMounted,onBeforeMount } from 'vue'
import { authStore } from '@/stores/usersStore';
import { useRoute } from 'vue-router';


    export default {
        components :{ AuthSideBar,LoadingScreen },
        setup(){
            const user = ref([])
            const route = useRoute()
            const authdata = authStore()
            
            onBeforeMount(()=>{
            authdata.isLoading = true
        })

            onMounted(() => {
            authdata.isLoading = true
                axiosInstance.get(`auth/users/${route.params.membershipid}/`)
                .then(response => {
                    user.value = response.data;
                    // console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
            authdata.isLoading = false

        })

            return {
                user,authdata
            }
        }
    }
</script>