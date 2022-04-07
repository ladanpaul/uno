<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const startGame = () => {
  router.push({ name: "Start" });
};
</script>
<template>
  <div class="m-auto">
    <button @click="startGame">
      <span class="btn-inner">
        <span class="btn-text text-lila">Play</span>
      </span>
    </button>
  </div>
</template>
<style lang="scss" scoped>
button {
  transition: all 0.2s ease;
  background: #d2d5d8;
  border: 0;
  margin: 2rem auto;
  display: block;
  border-radius: 25px;
  position: relative;
  outline: none;
  padding: 3px;
  cursor: pointer;
  min-width: 200px;
  animation-name: button;
  animation-duration: 0.3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

.btn-text {
  font-family: "Grape Nuts", cursive;
  font-size: 48px;
  line-height: 1.2rem;
  opacity: 1;
  animation-name: button-text;
  animation-duration: 0.3s;
  animation-delay: 0.1s;
  animation-fill-mode: backwards;
}

button:before,
button:after,
button span:before,
button span:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
}

button:before {
  animation-name: button-before;
  animation-duration: 0.3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

button:after {
  animation-name: button-after;
  animation-duration: 0.3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

.btn-inner {
  max-width: 250px;
  position: relative;
  background: #d2d5d8;
  padding: 1rem 4rem;
  display: block;
  border-radius: 25px;
  position: relative;
  animation-name: button-inner;
  animation-duration: 0.3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

button.active .btn-text {
  font-size: 0.95rem;
}

button.active .btn-inner:before {
  box-shadow: 4px 4px 10px inset #9496b0;
  -webkit-box-shadow: 4px 4px 10px inset #9496b0;
}

button.active .btn-inner:after {
  box-shadow: -4px -4px 10px inset #fff;
  -webkit-box-shadow: -4px -4px 10px inset #fff;
}

@keyframes button-before {
  from {
    box-shadow: 0 0 0 #fff;
  }
  to {
    box-shadow: -10px -8px 20px #fff;
  }
}

@keyframes button-after {
  from {
    box-shadow: 0 0 0 #9496b0;
  }
  to {
    box-shadow: 10px 8px 20px #9496b0;
  }
}

@keyframes button-inner {
  from {
    background: #d2d5d8;
  }
  to {
    background: linear-gradient(
      165deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(210, 213, 216, 1) 50%,
      rgba(210, 213, 216, 1) 95%,
      rgba(148, 150, 176, 1) 100%
    );
  }
}

@keyframes button {
  from {
    background: #d2d5d8;
  }
  to {
    background: linear-gradient(
      165deg,
      rgba(255, 255, 255, 1) 10%,
      rgba(148, 150, 176, 1) 100%
    );
  }
}

@keyframes button-text {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
