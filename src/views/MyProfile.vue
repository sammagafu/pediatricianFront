<template>
  <LoadingScreen :loading="authdata.isLoading"/>
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
              <img src="../assets/logo.png" alt="logo" style="height: 120px; width: 120px" />
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

import { ref,reactive, onMounted } from 'vue'
import AuthSideBar from "../components/AuthSideBar.vue";
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import axiosInstance from "../http";
import {logoBase64} from '../logoBase64Image'

pdfMake.vfs = pdfFonts.pdfMake.vfs

onMounted(() => {
  axiosInstance.get("https://api.pediatrics.or.tz/api/v1/auth/users/")
  .then(async(response) => {
    console.log(response.data);
    const [user] =await response.data;
    userData.user=user
  })
  .catch(error => {
    console.log(error);
  });
})

const userData = reactive({
user:{}
})


const generatePdf =async () => {

  const docDefinition = {
    // watermark: { text: 'PAT Membership Card', color: 'blue', opacity: 0.3, bold: true, italics: false,fontSize: 40 },
    pageSize: 'A5',
    pageOrientation: 'landscape',
    content: [
    {
      table: {
          margin:10,
          body: [
            [{
              border: [false, false, false, false],
              columns: [
                {
                  image: logoBase64, alignment: 'center', width: 80, height: 80
                },
                {
                  margin:10,
                  text: [{ text: 'Pediatrics Association Of Tanzania \n', bold: true, fontSize: 18,alignment:'center',style:'header' }, 
                  { text: 'Membership Identity Card', fontSize: 11.124,color: 'blue',alignment:'center' }]
                }
              ]
            }],
            [{
              border: [false, false, false, false],
              margin:[0,20],
              columns: [
                {
                  width: 300,
                  text: [{ text: `${userData.user.first_name} ${userData.user.middle_name} ${userData.user.last_name} \n`, fontSize: 16, bold: true, alignment: 'left' }, { text: 'Professional :', width: 200 }, { text: `${userData.user.profession} \n`, alignment: 'left' }, { text: 'Member ID :', width: 200 }, { text: `${userData.user.memberId} \n`, alignment: 'left' }, { text: 'Phone  :', width: 200 }, { text: `${userData.user.phone} \n\n\n`, alignment: 'left' }, { text: 'Sign : \n', width: 200 }],
                },
                {
                  width: 500,
                  image: `data:image/png;base64,${userData.user.get_base64_image}`, alignment: 'center', width: 180, height: 180
                }
              ]
            }],
            [{ border: [false, false, false, false],	
              style: ['quote', 'small'], 
              text: 'Incase of lost of this ID please return to above address', fontSize: 10, italics: true }]
          ]
        }
      },
    ]
  }
  pdfMake.createPdf(docDefinition).download(`${userData.user.first_name}.pdf`)
}

</script>

<style scoped>
</style>
