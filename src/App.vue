<template>
  <TopHeader />
  <RouterView />
  <Footer />
</template>

<style>
@import url("../src/assets/css/responsive.css");

.loading {
  display: flex;
}
</style>

<script>
import TopHeader from "@/components/TopHeader.vue";
import Footer from "@/components/Footer.vue";
import { authStore } from "@/stores/usersStore";

export default {
  setup() {
    const authdata = authStore();
    return {
      authdata,
    };
  },
  components: { TopHeader, Footer },
};
</script>
