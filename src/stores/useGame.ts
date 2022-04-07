import { defineStore } from "pinia";

export const useGame = defineStore({
  id: "store",
  state: () => ({
    users: [] as Array<any>,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addUser(user: { name: string; count: number } | string) {
      if (typeof user === "string") {
        return (this.users = [...this.users, { name: user, count: 0 }]);
      }
      const { name, count } = user;
      this.users.push({ name, count });
    },
    changeCount(user, count) {
      this.users.forEach((player) => {
        if (player.name === user.name) {
          player.count += count;

          if (user.count === 200) {
            player.count = 0;
          }
        }
      });
    },
    restart() {
      this.users = this.users.map((user) => ({ name: user.name, count: 0 }));
    },
    resetUsers() {
      this.users = [];
    },
  },
});
