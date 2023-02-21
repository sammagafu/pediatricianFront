<template>
  <section class="py-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-3"><AuthSideBar /></div>
        <div class="col-lg-9">
          <div ref="document">
          <!-- PDF Content Here -->
          <div class="id-header text-center pb-4">
            <img src="@/assets/logo.png" alt="" style="height: 120px; width: 120px" />
            <h2 class="text-left">PAT Membership Identity Card</h2>
          </div>
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4">
                <img
                  :src="avatar"
                  :alt="user.first_name + user.last_name"
                  class="img-thumbnail"
                />
              </div>
              <div class="col-lg-8">
                <h2>{{ user.first_name }} {{ user.middle_name }} {{ user.last_name }}</h2>
                <p>Membership ID: {{ user.memberId }}</p>
                <p>Member type: {{ user.typeofmember }}</p>
              </div>
            </div>
          </div>
              <!-- ends here -->
          </div>
          <button type="button" class="btn btn-info btn-lg btn-block mt-3" @click="generateReport">
            Download Your ID
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import AuthSideBar from "../components/AuthSideBar.vue";
import html2pdf from 'html2pdf.js'
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

    generateReport () {
      html2pdf(this.$refs.document, {
					margin: 1,
					filename: this.user.get_user_fullname,
					image: { type: 'jpeg', quality: 0.98 },
					html2canvas: { dpi: 192, letterRendering: true },
					jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
				})
        }

  },
  mounted() {
    this.fecthUserData();
  },
  computed :{
    avatar(){ return this.user.avatar}
  }
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
