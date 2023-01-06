<template>
  <div id="app">
    <button @click="modalActive = !modalActive">Ativar</button>
    <transition name="fade">
      <div class="modal-container" v-if="modalActive" @click="outsideClick">
        <div class="modal">
          <button @click="modalActive = !modalActive">X</button>
          <h1>modal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor
            sed laudantium inventore
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      modalActive: true,
    };
  },
  methods: {
    outsideClick({ target, currentTarget }) {
      if (target === currentTarget) this.modalActive = !this.modalActive;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal {
  background: #123;
  color: white;
  padding: 3rem;
  border-radius: 24px;
  position: relative;
}

.modal button {
  position: absolute;
  top: -10px;
  right: -10px;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  font-size: 1rem;
  color: black;
  background: white;
  border-radius: 50%;
  width: 44px;
  height: 44px;
}

.modal p {
  max-width: 40ch;
}

.modal-container {
  display: grid;
  align-content: center;
  justify-items: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
