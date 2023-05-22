<template>
  <div class="loading" style="display: block" v-if="props.loading">
    <div class="loading-box">
      <img class="img-fluid" src="@/assets/images/loading.gif" alt="Loading" />
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  loading:{type:Boolean, default:true}
})
</script>
