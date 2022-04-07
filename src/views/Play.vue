<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { PlayDialog as Dialog } from "../components";
import { PlayDialog } from "../components";
import { useRouter } from "vue-router";
import { useGame } from "@/stores/useGame";
import { storeToRefs } from "pinia";

const store = useGame();
const { users } = storeToRefs(store);
const router = useRouter();

const newGameRef = ref<InstanceType<typeof Dialog> | null>(null);
const restartGameRef = ref<InstanceType<typeof Dialog> | null>(null);

const setCount = (user, $event) => {
  store.changeCount(user, Number($event.target.value));
  localStorage.setItem("uno_users", JSON.stringify(users.value));
  $event.target.value = "";
};

const newGame = () => {
  store.resetUsers();
  localStorage.removeItem("uno_users");
  toggleNewGame();
  router.push({ name: "Start" });
};

const restart = () => {
  store.restart();
  localStorage.setItem("uno_users", JSON.stringify(users.value));
  toggleRestartGame();
};

onMounted(() => {
  const localUsers: any = localStorage.getItem("uno_users");
  if (!localUsers) {
    router.push({ name: "MainLanding" });
  }
  if (!users.value.length) {
    const players = JSON.parse(localUsers);
    players?.forEach((user) => {
      store.addUser(user);
    });
  }
});

const toggleNewGame = () => {
  newGameRef.value?.toggleDialog();
};

const toggleRestartGame = () => {
  restartGameRef.value?.toggleDialog();
};
</script>
<template>
  <div class="m-auto p-8">
    <h1 class="border-b border-solid border-black-normal pb-4">
      <span class="text-red text-5xl">U</span>
      <span class="text-blue text-5xl">N</span>
      <span class="text-yellow text-5xl">O</span>
      <span class="text-green text-5xl">!!!</span>
    </h1>
    <div class="flex flex-col mt-10">
      <div v-for="(user, i) in users" :key="i" class="flex items-center mb-4">
        <span class="text-2xl">
          {{ user.name }}
        </span>
        <span
          :class="[
            'ml-2 text-3xl text-blue mr-10',
            { '!text-red': Number(user.count) >= 180 },
          ]"
        >
          {{ user.count }}
        </span>
        <input
          type="number"
          class="w-18 ml-auto"
          @change="setCount(user, $event)"
        />
      </div>
      <div class="mt-10 flex items-center">
        <button class="btn bg-green text-white" @click="toggleRestartGame">
          Restart
        </button>
        <button class="ml-4 btn bg-yellow" @click="toggleNewGame">
          New Game
        </button>
      </div>
    </div>
    <PlayDialog ref="newGameRef" @approve="newGame" title="Start new game" />
    <PlayDialog
      ref="restartGameRef"
      @approve="restart"
      title="Restart this game"
    />
  </div>
</template>
<style lang="scss" scoped>
.btn {
  padding: 8px 20px;
  border-radius: 8px;
}
</style>
