<template>
  <section class="py-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <AuthSideBar />
        </div>
        <div class="col-lg-9">
          <div>
            <!-- PDF Content Here -->
            <div class="id-header text-center pb-4">
              <img src="@/assets/logo.png" alt="" style="height: 120px; width: 120px" />
              <h2 class="text-left">PAT Membership Identity Card</h2>
            </div>
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-4">
                  <img :src="userData.user.avatar" :alt="userData.user.first_name + userData.user.last_name" class="img-thumbnail" />
                </div>
                <div class="col-lg-8">
                  <h2>{{ userData.user.first_name }} {{ userData.user.middle_name }} {{ userData.user.last_name }}</h2>
                  <p>Membership ID: {{ userData.user.memberId }}</p>
                  <p>Member type: {{ userData.user.typeofmember }}</p>
                </div>
              </div>
            </div>
            <!-- ends here -->
          </div>
          <button type="button" class="btn btn-info btn-lg btn-block mt-3" @click="generatePdf">
            Download Your ID
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { reactive, onMounted } from 'vue'
import AuthSideBar from "../components/AuthSideBar.vue";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import axiosInstance from "../http";

pdfMake.vfs = pdfFonts.pdfMake.vfs

onMounted(() => {
  axiosInstance.get("auth/users/me/")
  .then(response => {
    userData.user = response.data;
  })
  .catch(error => {
    console.log(error);
  });
})

const userData = reactive({
user:{}
})

const generatePdf =async () => {
  const imageBase64 = await getBase64ImageFromURL('../assets/logo.png');
  console.log(imageBase64);
  const docDefinition = {
    content: [
      {text: 'PAT Membership Identity Card', style: 'subheader'},
      {
			style: 'tableExample',
			table: {
				widths: ['auto', 'auto', 'auto'],
				// headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
          [{image:imageBase64},{},{}],
					[{text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {},{}],
					[{text: 'Header 1', style: 'tableHeader', alignment: 'center'}, {text: 'Header 2', style: 'tableHeader', alignment: 'center'}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
				]
			}
		},
    ]
  }
  pdfMake.createPdf(docDefinition).download(`${userData.user.first_name}.pdf`)
}
const getBase64ImageFromURL = async (url) => {
  const blob = await new Blob(url);
  const dataURL = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
  return dataURL;
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
