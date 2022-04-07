<script setup lang="ts">
import { ref, computed, onMounted, onBeforeMount } from "vue";
import { useGame } from "@/stores/useGame";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { AddUser } from "../components";

const router = useRouter();

const isDisabled = computed(() => {
  return users.value.length < 2;
});

const store = useGame();
const { users } = storeToRefs(store);

const start = () => {
  localStorage.setItem("uno_users", JSON.stringify(users.value));
  router.push({ name: "Play" });
};

onBeforeMount(() => {
  const localUsers = localStorage.getItem("uno_users");
  if (localUsers) {
    router.push({ name: "Play" });
  }
});
</script>
<template>
  <div class="m-auto">
    <h1 class="text-2xl">Add new user</h1>
    <AddUser class="mt-4" />
    <div v-if="users.length" class="users">
      <span v-for="(user, i) in users" :key="i">
        {{ user.name }}
      </span>
    </div>
    <button
      :class="['start-btn mt-4', { 'opacity-50 cursor default': isDisabled }]"
      @click="start"
    >
      Start
    </button>
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

.start-btn {
  border: 1px solid #ff8585;
  padding: 4px 20px;
  border-radius: 8px;
  background: #f79f00;
  color: #fff;
}

.users {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #333;
  margin-top: 16px;
  padding: 8px;
}
</style>
