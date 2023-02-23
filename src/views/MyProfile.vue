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
  axiosInstance.get("auth/users/me/")
  .then(response => {
    console.log(response.data);
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

  const docDefinition = {
    content: [
    {
      table: {
          margin:10,
          body: [
            [{
              border: [true, true, true, false],
              columns: [
                {
                  image: logoBase64, alignment: 'center', width: 60, height: 40
                },
                {
                  margin:5,
                  text: [{ text: 'PAT Membership Identity Card \n', bold: true, fontSize: 19 }, { text: 'Muhimbili', fontSize: 11 }]
                }
              ]
            }],
            [{
              border: [true, false, true, false],
              columns: [
                {
                  width: 200,
                  text: [{ text: `${userData.user.first_name} ${userData.user.middle_name} ${userData.user.last_name} \n`, fontSize: 16, bold: true, alignment: 'left' }, { text: 'Professional :', width: 200 }, { text: `${userData.user.profession} \n`, alignment: 'left' }, { text: 'Member ID :', width: 200 }, { text: `${userData.user.memberId} \n`, alignment: 'left' }, { text: 'Phone  :', width: 200 }, { text: `${userData.user.phone} \n\n\n`, alignment: 'left' }, { text: 'Sign : \n', width: 200 }],
                },
                {
                  width: 500,
                  image: logoBase64, alignment: 'center', width: 130, height: 90
                }
              ]
            }],
            [{ border: [true, false, true, true],	
              style: ['quote', 'small'], 
              text: 'Incase of lost of this ID please return to above address', fontSize: 10, italics: true }]
          ]
        }
      },
    '\n\n\n',
    {
      columns:[
        {width:150,
          image:logoBase64, alignment: 'center', width: 60,height:40},
        {width:600,
          margin:5,
          text:[{text:'PAT Membership Identity Card \n',	bold: true,fontSize:19},{text:'Muhimbili',fontSize:11}]}
      ]
    },
    {
    columns:[
        {	width: 200,
          text:[{text: `${userData.user.first_name} ${userData.user.middle_name} ${userData.user.last_name} \n`,fontSize:16,	bold: true,alignment: 'left'}, {text:'Professional :',width:200},{text: `${userData.user.profession} \n`,alignment: 'left'}, {text:'Member ID :',width:200},{text: `${userData.user.memberId} \n`,alignment: 'left'},{text:'Phone  :',width:200},{text: `${userData.user.phone} \n\n\n`,alignment: 'left'},{text:'Sign :',width:200}]},
        {	width: 500,
          image: logoBase64,alignment: 'center',width: 130,height:90}
      ]
    },
    '\n',
    {	
      // style: ['quote', 'small'],
      text:'Incase of lost of this ID please return to above address',fontSize:10,italics: true}
    
    ]
  }
  pdfMake.createPdf(docDefinition).download(`${userData.user.first_name}.pdf`)
}

</script>

<style scoped>
</style>
