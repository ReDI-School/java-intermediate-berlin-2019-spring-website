<template>
    <div>
        <br />
        <a href="#" v-on:click="toggle">😎 Toggle Solution</a>
        <transition name="fade">
            <div v-if="isShowing">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  data: function() {
      return {
          isShowing: false
      }
  },
  methods: {
      toggle: function(event) {
          this.isShowing = !this.isShowing;
          event.preventDefault();
      }
  }
}
</script>