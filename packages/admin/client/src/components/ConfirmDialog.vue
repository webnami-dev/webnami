<template>
  <Transition name="overlay">
    <div
      id="confirm-dialog"
      v-if="confirm.open"
      class="fixed inset-0 z-[200] flex items-center justify-center"
    >
      <div
        class="bg-black/50 absolute inset-0"
        style="backdrop-filter: blur(2px);"
        @click="confirm.cancel()"
      />
      <Transition name="dialog">
        <div
          v-if="confirm.open"
          class="relative rounded p-6 max-w-sm w-full mx-4"
          :style="{ backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border)', boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }"
        >
          <p class="text-[13.5px] mb-5" :style="{ color: 'var(--color-content)', lineHeight: '1.5' }">
            {{ confirm.message }}
          </p>
          <div class="flex items-center justify-end gap-2">
            <button
              id="confirm-cancel"
              @click="confirm.cancel()"
              class="px-3.5 py-2 rounded text-[13px] font-medium transition-colors duration-100"
              :style="{ color: 'var(--color-content)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }"
              @mouseenter="(e) => e.currentTarget.style.backgroundColor = 'var(--color-hover)'"
              @mouseleave="(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface)'"
            >
              Cancel
            </button>
            <button
              id="confirm-accept"
              @click="confirm.accept()"
              class="confirm-delete-btn px-3.5 py-2 rounded text-[13px] font-medium text-white transition-opacity duration-100"
              @mouseenter="(e) => e.currentTarget.style.opacity = '0.88'"
              @mouseleave="(e) => e.currentTarget.style.opacity = '1'"
            >
              Delete
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { useConfirmStore } from '../stores/confirm.js';
const confirm = useConfirmStore();
</script>

<style scoped>
.overlay-enter-active { transition: opacity 0.15s ease-out; }
.overlay-leave-active { transition: opacity 0.1s ease-in; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }
.dialog-enter-active { transition: all 0.15s ease-out; }
.dialog-leave-active { transition: all 0.1s ease-in; }
.dialog-enter-from { opacity: 0; transform: scale(0.95); }
.dialog-leave-to { opacity: 0; transform: scale(0.95); }
</style>
