<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-5">
      <h1 class="text-[22px] font-semibold tracking-tight" style="color: var(--color-content); line-height: 1.2;">Posts</h1>
      <button
        @click="newPost"
        class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
        :style="{ backgroundColor: 'var(--color-primary)' }"
        @mouseenter="(e) => e.currentTarget.style.opacity='0.88'"
        @mouseleave="(e) => e.currentTarget.style.opacity='1'"
      >
        <Plus :size="12" />
        New Post
      </button>
    </div>

    <!-- Drafts -->
    <div v-if="drafts.length > 0" class="mb-6">
      <p class="text-[11px] font-medium uppercase tracking-widest mb-2" style="color: var(--color-accent);">Drafts</p>
      <div class="flex flex-col">
        <div
          v-for="draft in drafts"
          :key="draft.slug"
          class="content-row"
          style="border-bottom: 1px solid var(--color-border-subtle);"
        >
          <RouterLink
            :to="`/admin/posts/${draft.slug}`"
            class="flex-1 text-[13.5px] font-medium truncate pr-4 transition-colors duration-100"
            style="color: var(--color-content);"
            @mouseenter="(e) => e.currentTarget.style.color='var(--color-primary)'"
            @mouseleave="(e) => e.currentTarget.style.color='var(--color-content)'"
          >
            {{ draft.title || draft.slug }}
          </RouterLink>
          <span
            class="text-[11px] font-medium px-1.5 py-0.5 rounded shrink-0"
            style="background-color: color-mix(in srgb, #f08c00 12%, transparent); color: #f08c00; border: 1px solid color-mix(in srgb, #f08c00 30%, transparent);"
          >
            Draft
          </span>
        </div>
      </div>
    </div>

    <!-- Published Posts -->
    <div v-if="published.length > 0">
      <!-- Filters -->
      <div class="mb-4 flex flex-col gap-2.5">
        <div class="flex items-center gap-3 flex-wrap">
          <select
            v-if="allCategories.length > 0"
            v-model="activeCategory"
            class="text-[12px] p-1 rounded"
            style="min-width: 140px; cursor: pointer; border: 1px solid var(--color-border-subtle); color: var(--color-accent); background: var(--color-surface);"
          >
            <option value="">All categories</option>
            <option v-for="cat in allCategories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
          <select
            v-if="allTags.length > 0"
            v-model="activeTag"
            class="text-[12px] p-1 rounded"
            style="min-width: 140px; cursor: pointer; border: 1px solid var(--color-border-subtle); color: var(--color-accent); background: var(--color-surface);"
          >
            <option value="">All tags</option>
            <option v-for="tag in allTags" :key="tag" :value="tag">{{ tag }}</option>
          </select>
        </div>
        <div v-if="activeCategory || activeTag" class="flex items-center justify-between">
          <p class="text-[12px]" style="color: var(--color-accent);">
            Showing
            <span class="font-semibold" style="color: var(--color-content);">{{ filtered.length }}</span>
            of {{ published.length }} posts
          </p>
          <button
            @click="activeCategory = ''; activeTag = ''"
            class="text-[12px] font-medium"
            style="color: var(--color-primary);"
          >
            Clear filters
          </button>
        </div>
      </div>

      <!-- List -->
      <div class="flex flex-col">
        <div
          v-for="post in filtered"
          :key="post.slug"
          class="content-row group"
          style="border-bottom: 1px solid var(--color-border-subtle);"
        >
          <div class="flex-1 min-w-0 flex flex-col gap-2 pr-4">
            <RouterLink
              :to="`/admin/posts/${post.slug}`"
              class="text-[13.5px] font-medium truncate transition-colors duration-100"
              style="color: var(--color-content);"
              @mouseenter="(e) => e.currentTarget.style.color='var(--color-primary)'"
              @mouseleave="(e) => e.currentTarget.style.color='var(--color-content)'"
            >
              {{ post.title }}
            </RouterLink>
            <div v-if="post.category || (post.tags && post.tags.length)" class="flex items-center gap-1.5 flex-wrap">
              <span
                v-if="post.category"
                class="text-[11px] font-medium px-1.5 py-0.5 rounded"
                style="background-color: var(--color-surface); color: var(--color-primary); border: 1px solid var(--color-border);"
              >
                {{ post.category }}
              </span>
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="text-[11px] px-1.5 py-0.5 rounded"
                style="background-color: var(--color-surface); color: var(--color-accent); border: 1px solid var(--color-border-subtle);"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <a
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
        <div v-if="filtered.length === 0" class="py-12 text-center">
          <p class="text-[13.5px]" style="color: var(--color-accent);">No posts match the selected filters.</p>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else-if="!loading" class="py-16 text-center">
      <FileText :size="32" style="color: var(--color-accent); margin: 0 auto 12px; opacity: 0.5;" />
      <p class="text-[13.5px]" style="color: var(--color-accent);">No posts yet. Create your first post.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Plus, ExternalLink, FileText } from 'lucide-vue-next';
import { useAlertsStore } from '../stores/alerts.js';

const router = useRouter();
const alerts = useAlertsStore();

const loading = ref(true);
const published = ref([]);
const drafts = ref([]);
const allTags = ref([]);
const allCategories = ref([]);
const activeCategory = ref('');
const activeTag = ref('');

const filtered = computed(() => {
  return published.value.filter((post) => {
    const catOk = activeCategory.value === '' || post.category === activeCategory.value;
    const tagOk = activeTag.value === '' || (Array.isArray(post.tags) && post.tags.includes(activeTag.value));
    return catOk && tagOk;
  });
});

onMounted(async () => {
  try {
    const res = await fetch('/api/posts');
    const data = await res.json();
    published.value = data.published;
    drafts.value = data.drafts;
    allTags.value = data.allTags;
    allCategories.value = data.allCategories;
  } catch {
    alerts.show('error', 'Failed to load posts.');
  } finally {
    loading.value = false;
  }
});

async function newPost() {
  try {
    const res = await fetch('/api/posts', { method: 'POST' });
    const data = await res.json();
    router.push(`/admin/posts/${data.slug}`);
  } catch {
    alerts.show('error', 'Failed to create post.');
  }
}
</script>
