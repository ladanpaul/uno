<script setup lang="ts">
import { ref } from "vue";
import { useGame } from "@/stores/useGame";
const store = useGame();
const user = ref("");

const addUser = () => {
  store.addUser(user.value);
  user.value = "";
};

defineEmits(["input"]);
</script>

<template>
  <div class="flex items-center">
    <input type="text" v-model="user" />
    <button
      class="add-btn ml-2 flex justify-center items-center bg-yellow text-white"
      @click="addUser"
    >
      &#43;
    </button>
  </div>
</template>

<style lang="scss" scoped>
.add-btn {
  border-radius: 50%;
  // border: 1px solid #9496b0;
  width: 35px;
  height: 35px;
  font-size: 40px;
  line-height: 0;
  font-weight: 100;
}
</style>
