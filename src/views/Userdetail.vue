<template>
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
    import { ref, onMounted} from 'vue';
    import AuthSideBar from '../components/AuthSideBar.vue';
    import { useRoute } from 'vue-router';
    import axiosInstance from '../http';


    export default {
        components :{ AuthSideBar },
        setup(){
            const user = ref([])
            const route = useRoute()
            
            
            onMounted(() => {
                axiosInstance.get(`auth/users/${route.params.membershipid}/`)
                .then(response => {
                    user.value = response.data;
                    // console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        })

            return {
                user
            }
        }
    }
</script>