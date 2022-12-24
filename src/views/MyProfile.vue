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

            <!-- Image previewer -->
            <img :src="imageSrc" width="100" />

            <!-- Cropper container -->
            <div
              v-if="this.imageSrc"
              class="my-3 d-flex align-items-center justify-content-center mx-auto"
            >
              <vue-cropper
                class="mr-2 w-50"
                ref="cropper"
                :guides="true"
                :src="imageSrc"
                :responsive="true"
                :modal="true"
                :aspectRatio="1"
                :dragMode="none"
                :scalable="false"
                :zoomable="false"
              ></vue-cropper>

              <!-- Cropped image previewer -->
              <img class="ml-2 w-50 bg-light" :src="croppedImageSrc" />
            </div>
            <button v-if="this.imageSrc" @click="cropImage">Crop</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { ref } from "vue";
import AuthSideBar from "../components/AuthSideBar.vue";
import axiosInstance from "../http";
export default {
  components: {
    VueCropper,
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
    setImage: function (e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imageSrc = event.target.result;

          // Rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      this.croppedImageSrc = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.$refs.cropper.getCroppedCanvas().toBlob(function (blob) {
        let formData = new FormData();
        // formData.append("name", "image-name-" + new Date().getTime());
        formData.append("avatar", blob);

        axiosInstance
          .put("auth/users/me/update-avatar/", formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    },
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
