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
    <button class="add-btn ml-2 ml-auto" @click="addUser">&#43;</button>
  </div>
</template>

<style lang="scss" scoped>
.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  width: 40px;
  height: 40px;
  background: #fff;
  font-size: 40px;
  color: #666666;
  line-height: 0;
  font-weight: 100;
}
</style>
