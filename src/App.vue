<script setup lang="ts">
import FreshChat from "./components/FreshChat.vue";
</script>

<template>
  <FreshChat source="//eu.fw-cdn.com/12411451/479886.js" :id="123" first_name="Johan" last_name="Pieter" email="test@asd.nl" :extraProperties="{'cf_client':'test'}"/>
</template>

<style scoped>
</style>
