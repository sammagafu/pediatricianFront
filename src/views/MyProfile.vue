<template>
  <section class="py-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-3"><AuthSideBar /></div>
        <div class="col-lg-6">
          <div class="id-header text-center pb-4">
            <img src="@/assets/logo.png" alt="" style="height: 130px; width: 130px" />
            <h2 class="text-left">PAT Membership Identity Card</h2>
          </div>
          <div class="row">
            <div class="col-md-4 avatar">
              <img
                :src="user.avatar"
                :alt="user.first_name + user.last_name"
                class="avatar"
              />
              <div></div>
            </div>

            <div class="col-md-8">
              <h2>{{ user.first_name }} {{ user.middle_name }} {{ user.last_name }}</h2>
              <p>Membership ID: {{ user.memberId }}</p>
              <p>Member type: {{ user.typeofmember }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 rounded-lg">
          <div class="p-3 bg-white">
            <div class="py-1">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                <i class="fa fa-pencil" aria-hidden="true"></i> Update Profile
              </button>
            </div>

            <div class="py-2">
              <label class="custom-file-upload">
                <input
                  type="file"
                  name="image"
                  accept="blob|image/*"
                  @change="setImage"
                />
                <i class="fa fa-cloud-upload"></i> Change Profile Picture
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import AuthSideBar from "../components/AuthSideBar.vue";
import axiosInstance from "../http";
export default {
  components: {
    AuthSideBar,
  },
  data() {
    return {
      imageSrc: "",
      croppedImageSrc: "",
      user: {},
    };
  },
  methods: {
    fecthUserData() {
      axiosInstance
        .get("auth/users/me/")
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fecthUserData();
  },
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
