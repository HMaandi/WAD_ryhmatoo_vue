
import FooterComp from '@/components/FooterComp.vue';


import HeaderComp from '@/components/HeaderComp.vue';

<template>
  <HeaderComp/>
  <div  class="form">
    <SignupForm/>
  </div>
  <FooterComp/>
</template>
<script>
  import SignupForm from "@/components/SignupForm.vue"
  import HeaderComp from "@/components/HeaderComp.vue"
  import FooterComp from "@/components/FooterComp.vue";
  export default {
  name: 'AboutView',
  components: {SignupForm, HeaderComp, FooterComp}
}
</script>
