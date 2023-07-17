<script setup lang="ts">

import {onMounted} from "vue";


interface Props {
  source: string;
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  extraProperties?: Record<string, string>;
}

const props = withDefaults(defineProps<Props>(), {
})

onMounted(() => {
  // Load Fresh Chat script
  const script = document.createElement('script');
  script.src = props.source;
  script.setAttribute('chat', 'true');
  document.body.appendChild(script);

  // Set user information
  window.fcSettings = {
    onInit: function() {
      if(props.id) window.fcWidget.setExternalId(props.id);
      if(props.first_name) window.fcWidget.user.setFirstName(props.first_name);
      if(props.last_name) window.fcWidget.user.setLastName(props.last_name);
      if(props.email) window.fcWidget.user.setEmail(props.email);
      if(props.extraProperties) window.fcWidget.user.setProperties(props.extraProperties);
    }
  }
});
</script>

<template>
  <!-- Your template code here -->
</template>

<style scoped>
/* Your scoped styles here */
</style>





