<script setup lang="ts">
defineProps({
  show: Boolean,
  showHeader: Boolean
})
defineEmits(['close'])
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click.self="$emit('close')">
      <div class="modal-box" role="dialog" aria-modal="true">
        <button aria-label="Close" class="modal-close" @click="$emit('close')">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
        <header v-if="showHeader" class="modal-header">
          <slot name="header">default header</slot>
        </header>
        <div class="modal-content">
          <slot name="body">default body</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background: rgba(10, 7, 14, 0.72);
  backdrop-filter: blur(8px);
}

.modal-box {
  position: relative;
  width: 100%;
  max-width: 620px;
  max-height: 86dvh;
  overflow-y: auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: clamp(1.5rem, 4vw, 2.4rem);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: var(--surface-2);
  color: var(--text-muted);
  font-size: 1.1rem;
  transition:
    transform 0.18s var(--ease-bounce),
    color 0.18s var(--ease-out),
    border-color 0.18s var(--ease-out);
}
.modal-close:hover {
  color: var(--gold);
  border-color: var(--gold);
  transform: rotate(90deg);
}

.modal-header {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.3rem;
  padding-right: 3rem;
  margin-bottom: 1rem;
}
.modal-content {
  color: var(--text-muted);
  line-height: 1.7;
}

/* screenshot modal has no header/padding chrome around the image */
.modal-content :deep(img) {
  border-radius: var(--radius);
  margin-inline: auto;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s var(--ease-out);
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-box,
.modal-leave-active .modal-box {
  transition: transform 0.3s var(--ease-bounce);
}
.modal-enter-from .modal-box,
.modal-leave-to .modal-box {
  transform: scale(0.92) translateY(10px);
}
</style>
