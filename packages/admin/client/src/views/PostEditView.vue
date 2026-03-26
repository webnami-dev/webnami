<template>
  <div v-if="loaded">
    <form @submit.prevent="savePost" class="flex flex-col gap-5">
      <!-- Title row -->
      <div class="flex items-center gap-2">
        <span
          v-if="post.isDraft"
          class="text-[11px] font-medium px-1.5 py-0.5 rounded shrink-0"
          style="background-color: color-mix(in srgb, #f08c00 12%, transparent); color: #f08c00; border: 1px solid color-mix(in srgb, #f08c00 30%, transparent);"
        >
          Draft
        </span>
        <input
          id="title"
          v-model="post.title"
          type="text"
          required
          class="admin-input text-3xl font-semibold"
          placeholder="Post title"
        />
        <a
          v-if="!post.isDraft"
          :href="post.url"
          target="_blank"
          title="Preview post"
          class="shrink-0 p-1.5 rounded transition-colors duration-100"
          style="color: var(--color-accent);"
          @mouseenter="(e) => { e.currentTarget.style.color='var(--color-content)'; e.currentTarget.style.backgroundColor='var(--color-hover)'; }"
          @mouseleave="(e) => { e.currentTarget.style.color='var(--color-accent)'; e.currentTarget.style.backgroundColor=''; }"
        >
          <ExternalLink :size="14" />
        </a>
      </div>

      <!-- Category + Tags + Author -->
      <div class="flex gap-3 flex-wrap">
        <div class="flex items-center gap-2 flex-1">
          <label class="admin-label mb-0 shrink-0">Category:</label>
          <input
            id="category"
            v-model="post.category"
            type="text"
            class="admin-input text-[13px]"
            placeholder="e.g. Technology"
          />
        </div>
        <div class="flex items-center gap-2" style="flex: 3;">
          <label class="admin-label mb-0 shrink-0">Tags:</label>
          <input
            id="tags"
            v-model="post.tags"
            type="text"
            class="admin-input text-[13px]"
            placeholder="Comma-separated"
          />
        </div>
        <div v-if="post.author" class="flex items-center gap-2">
          <span class="admin-label mb-0 shrink-0">Author:</span>
          <span class="text-[13px]" style="color: var(--color-accent);">{{ post.author }}</span>
        </div>
      </div>

      <!-- Editor -->
      <MarkdownEditor v-model="post.content" :slug="post.slug" type="posts" ref="editorRef" />

      <!-- Actions -->
      <div class="flex items-center gap-2 pt-1">
        <button
          type="submit"
          :disabled="!isDirty"
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
          :style="{ backgroundColor: 'var(--color-primary)', opacity: isDirty ? '1' : '0.4', cursor: isDirty ? 'pointer' : 'not-allowed' }"
          @mouseenter="(e) => { if (isDirty) e.currentTarget.style.opacity='0.88'; }"
          @mouseleave="(e) => { if (isDirty) e.currentTarget.style.opacity='1'; }"
        >
          <Save :size="12" />
          {{ post.isDraft ? 'Save Draft' : 'Save Changes' }}
        </button>
        <button
          v-if="post.isDraft"
          type="button"
          @click="publishPost"
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
          style="background-color: #2f9e44;"
          @mouseenter="(e) => e.currentTarget.style.opacity='0.88'"
          @mouseleave="(e) => e.currentTarget.style.opacity='1'"
        >
          <Send :size="12" />
          Publish
        </button>
        <button
          id="delete-btn"
          type="button"
          @click="deletePost"
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium transition-colors duration-100"
          style="color: #e03131; border: 1px solid color-mix(in srgb, #e03131 25%, transparent); background-color: var(--color-surface);"
          @mouseenter="(e) => e.currentTarget.style.backgroundColor='color-mix(in srgb, #e03131 8%, transparent)'"
          @mouseleave="(e) => e.currentTarget.style.backgroundColor='var(--color-surface)'"
        >
          <Trash2 :size="12" />
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Save, Send, Trash2, ExternalLink } from 'lucide-vue-next';
import MarkdownEditor from '../components/MarkdownEditor.vue';
import { useAlertsStore } from '../stores/alerts.js';
import { useConfirmStore } from '../stores/confirm.js';
import { useRebuildStore } from '../stores/rebuild.js';

const route = useRoute();
const router = useRouter();
const alerts = useAlertsStore();
const confirm = useConfirmStore();
const rebuild = useRebuildStore();

const loaded = ref(false);
const editorRef = ref(null);
const post = ref({
  title: '',
  author: '',
  tags: '',
  category: '',
  content: '',
  slug: '',
  url: '',
  isDraft: false,
});
const original = ref(null);

const isDirty = computed(() => {
  if (!original.value) return false;
  return post.value.title !== original.value.title
    || post.value.tags !== original.value.tags
    || post.value.category !== original.value.category
    || post.value.content !== original.value.content;
});

onMounted(async () => {
  const res = await fetch(`/api/posts/${route.params.slug}`);
  if (!res.ok) {
    router.push('/admin/posts');
    return;
  }
  post.value = await res.json();
  loaded.value = true;
  await nextTick();
  const initialContent = editorRef.value?.getInitialValue() ?? post.value.content;
  post.value.content = initialContent;
  original.value = { title: post.value.title, tags: post.value.tags, category: post.value.category, content: initialContent };
});

async function savePost() {
  const content = editorRef.value?.getValue() ?? post.value.content;
  const res = await fetch(`/api/posts/${post.value.slug}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: post.value.title,
      tags: post.value.tags,
      category: post.value.category,
      content,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    alerts.show('error', data.error || 'Failed to save post.');
    return;
  }
  rebuild.markDirty();
  alerts.show('success', 'Post saved successfully.');
  router.push(`/admin/posts/${data.slug}`);
}

async function publishPost() {
  const res = await fetch(`/api/posts/${post.value.slug}/publish`, { method: 'POST' });
  const data = await res.json();
  if (!res.ok) {
    alerts.show('error', data.error || 'Failed to publish post.');
    return;
  }
  rebuild.markDirty();
  alerts.show('success', 'Post published successfully.');
  router.push(`/admin/posts/${data.slug}`);
}

async function deletePost() {
  const confirmed = await confirm.show('Are you sure you want to delete this post?');
  if (!confirmed) return;
  const res = await fetch(`/api/posts/${post.value.slug}`, { method: 'DELETE' });
  if (!res.ok) {
    alerts.show('error', 'Failed to delete post.');
    return;
  }
  rebuild.markDirty();
  alerts.show('success', 'Post deleted successfully.');
  router.push('/admin/posts');
}
</script>
