<script setup lang="ts">
import { ref } from "vue";

defineEmits(["approve"]);
defineProps({
  title: { type: String, required: true },
});

const isShowDialog = ref(false);

const toggleDialog = () => {
  isShowDialog.value = !isShowDialog.value;
};

defineExpose({ toggleDialog });
</script>
<template>
  <div
    v-if="isShowDialog"
    class="popup flex absolute top-0 left-0 right-0 bottom-0"
    @click="toggleDialog"
  >
    <div class="content flex flex-col m-auto bg-white" @click.stop>
      <h3 class="text-3xl text-black-normal">{{ title }}</h3>
      <p class="mt-2 text-xl text-black-normal">Are you shure?</p>
      <div class="mt-8">
        <button class="btn bg-green text-white" @click="toggleDialog">
          No
        </button>
        <button class="ml-4 btn bg-red text-white" @click="$emit('approve')">
          Yes
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.popup {
  background: rgba(#000, 0.7);
  filter: blur(0.5);
  .content {
    border-radius: 12px;
    border: 1px solid #bdbcbc;
    padding: 22px 28px;
  }
}
.btn {
  padding: 8px 20px;
  border-radius: 8px;
}
</style>
