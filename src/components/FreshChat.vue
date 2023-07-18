<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import {FreshWindow} from "../global";


interface Props {
  source: string;
  id?: number;
  first_name?: string;
  last_name?: string;
  delay?: number;
  eagerLoad?: boolean;
  email?: string;
  extraProperties?: Record<string, string>;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 1000,
  eagerLoad: true
})


onMounted(() => {
  setTimeout(() => {

    (window as unknown as FreshWindow).fcWidgetMessengerConfig = {
      config: {
        eagerLoad: props.eagerLoad
      }
    };

    (window as unknown as FreshWindow).fcSettings = {
      onInit: function () {
        if (props.id) (window as unknown as FreshWindow).fcWidget.setExternalId(`${props.id}`);
        if (props.first_name) (window as unknown as FreshWindow).fcWidget.user.setFirstName(props.first_name);
        if (props.last_name) (window as unknown as FreshWindow).fcWidget.user.setLastName(props.last_name);
        if (props.email) (window as unknown as FreshWindow).fcWidget.user.setEmail(props.email);
        if (props.extraProperties) (window as unknown as FreshWindow).fcWidget.user.setProperties(props.extraProperties);
      }
    };

    const script = document.createElement('script');
    script.src = props.source;
    script.setAttribute('chat', 'true');

    document.body.appendChild(script);
  }, props.delay)
});

onUnmounted(() => {
  // Remove Fresh Chat script
  let fcWidget = (window as unknown as FreshWindow).fcWidget;
  if (fcWidget) {
    fcWidget.destroy?.();
  }
})
</script>

<template>
  <!-- Your template code here -->
</template>

<style scoped>
/* Your scoped styles here */
</style>





