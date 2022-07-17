<script setup lang="ts">
import fetchCount from './fetchCount'
import { ref , onMounted} from 'vue';
import { stringifyStyle } from '@vue/shared';
import Controlbar from './Controlbar.vue';
const count = ref<number | null>(null);

interface Props {
    limit: Number;
    alertMessageOnLimit?: string;
}
const props = withDefaults(defineProps<Props>(), {
    alertMessageOnLimit: 'can not go any higher'
})

 onMounted(() => {
  fetchCount((initialCount) => {
      count.value = initialCount;
  })
 })

function addCount(num: number) {
    if (count.value !== null) {
        if(count.value >= props.limit) {
            alert(props.alertMessageOnLimit);
        } else {
            count.value += num;
        }
    }
}
</script>
<template>
<div>
  <p>{{ count }}</p>
  <Controlbar
  @add-count="addCount"
  @reset-count="count = 0"
  ></Controlbar>
</div>
</template>