<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-[22px] font-semibold tracking-tight" style="color: var(--color-content); line-height: 1.2;">Settings</h1>
    </div>

    <form @submit.prevent="saveSettings" class="flex flex-col gap-0">

      <!-- General -->
      <section class="settings-section">
        <div class="flex flex-col gap-2">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <span class="w-28 shrink-0 text-sm" style="color: var(--color-accent);">Logo</span>
            <div class="flex items-center gap-3">
              <img
                v-if="logoSrc"
                :src="logoSrc"
                alt="Logo"
                class="h-8 object-contain rounded"
              />
              <label
                class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium cursor-pointer transition-colors duration-100"
                style="color: var(--color-accent); border: 1px solid color-mix(in srgb, var(--color-accent) 25%, transparent);"
                @mouseenter="(e) => e.currentTarget.style.backgroundColor='var(--color-hover)'"
                @mouseleave="(e) => e.currentTarget.style.backgroundColor=''"
              >
                <Upload :size="12" />
                Upload Logo
                <input
                  ref="logoInput"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/svg+xml"
                  class="sr-only"
                  @change="uploadLogo"
                />
              </label>
              <button
                v-if="logo"
                type="button"
                @click="removeLogo"
                class="text-[12px] transition-colors duration-100"
                style="color: var(--color-accent);"
                @mouseenter="(e) => e.currentTarget.style.color='#e03131'"
                @mouseleave="(e) => e.currentTarget.style.color='var(--color-accent)'"
              >
                Remove
              </button>
            </div>
          </div>

          <!-- Blog Name -->
          <div class="flex items-center gap-2">
            <span class="w-28 shrink-0 text-sm" style="color: var(--color-accent);">Blog Name</span>
            <input
              id="blogName"
              v-model="blogName"
              type="text"
              class="admin-input text-sm"
            />
          </div>

          <!-- Description -->
          <div class="flex items-center gap-2">
            <span class="w-28 shrink-0 text-sm" style="color: var(--color-accent);">Description</span>
            <input
              id="homepageHeading"
              v-model="homepageHeading"
              type="text"
              class="admin-input text-sm"
            />
          </div>

          <!-- Author -->
          <div class="flex items-center gap-2">
            <span class="w-28 shrink-0 text-sm" style="color: var(--color-accent);">Author</span>
            <input
              v-model="author"
              type="text"
              placeholder="Your name"
              class="admin-input text-sm"
            />
          </div>
        </div>
      </section>

      <!-- Palette -->
      <section class="settings-section">
        <div class="flex flex-col gap-4">
          <div class="flex items-start gap-2">
            <span class="w-28 shrink-0 text-sm pt-1" style="color: var(--color-accent);">Palette</span>
            <div class="flex flex-wrap gap-2">
              <label
                v-for="palette in colorPalettes"
                :key="palette.name"
                class="cursor-pointer"
              >
                <input
                  type="radio"
                  name="colorPalette"
                  :value="palette.name"
                  v-model="selectedPalette"
                  class="sr-only"
                />
                <div
                  class="flex flex-col items-center gap-1 px-2 py-1.5 rounded border transition-all duration-100"
                  :style="selectedPalette === palette.name
                    ? 'border-color: var(--color-content);'
                    : 'border-color: color-mix(in srgb, var(--color-accent) 25%, transparent);'"
                >
                  <div class="flex gap-0.5">
                    <div class="w-3 h-3 rounded-full border border-black/10" :style="{ background: palette.bg }"></div>
                    <div class="w-3 h-3 rounded-full" :style="{ background: palette.primary }"></div>
                    <div class="w-3 h-3 rounded-full" :style="{ background: palette.accent }"></div>
                  </div>
                  <span class="text-[10px] leading-none" style="color: var(--color-accent);">{{ palette.name }}</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- Social Links -->
      <section class="settings-section">
        <div class="flex flex-col gap-2">
          <div
            v-for="link in socialLinks"
            :key="link.name"
            class="social-link-row flex items-center gap-2"
          >
            <span class="w-28 shrink-0 text-sm capitalize" style="color: var(--color-accent);">{{ link.name }}</span>
            <input
              v-model="link.href"
              type="text"
              :placeholder="link.placeholder"
              class="social-link-href admin-input text-sm"
            />
          </div>
        </div>
      </section>

      <!-- Advanced Settings (collapsible) -->
      <section class="settings-section">
        <div>
          <button
            type="button"
            @click="advancedOpen = !advancedOpen"
            class="flex items-center gap-2 text-[12px] font-medium transition-colors duration-100 cursor-pointer"
            style="color: var(--color-accent);"
            @mouseenter="(e) => e.currentTarget.style.color='var(--color-content)'"
            @mouseleave="(e) => e.currentTarget.style.color='var(--color-accent)'"
          >
            <ChevronRight
              :size="13"
              :style="{ transition: 'transform 0.15s', transform: advancedOpen ? 'rotate(90deg)' : 'rotate(0deg)' }"
            />
            <span class="admin-label cursor-pointer" style="margin-bottom: 0;">Advanced Settings</span>
          </button>
          <div v-show="advancedOpen" class="mt-3">
            <div class="flex flex-col gap-3">
              <div class="flex items-start gap-2">
                <span class="w-28 shrink-0 text-sm pt-1.5" style="color: var(--color-accent);">Site URL</span>
                <div class="flex-1">
                  <input
                    id="blogUrl"
                    v-model="blogUrl"
                    type="url"
                    class="admin-input text-sm"
                  />
                  <p class="text-[11px] mt-1" style="color: var(--color-accent);">
                    Public URL of your site. Used for SEO metadata and RSS feed links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Save -->
      <div class="pt-2 pb-8">
        <button
          type="submit"
          class="inline-flex items-center gap-1.5 px-2 py-1 rounded text-[12px] font-medium text-white transition-opacity duration-100"
          style="background-color: var(--color-primary);"
          @mouseenter="(e) => e.currentTarget.style.opacity='0.88'"
          @mouseleave="(e) => e.currentTarget.style.opacity='1'"
        >
          <Save :size="12" />
          Save Settings
        </button>
      </div>

    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Save, Upload, ChevronRight } from 'lucide-vue-next';
import { useAlertsStore } from '../stores/alerts.js';
import { useRebuildStore } from '../stores/rebuild.js';

const alerts = useAlertsStore();
const rebuild = useRebuildStore();

const logoInput = ref(null);
const advancedOpen = ref(false);

// Flat fields bound to form inputs
const blogName = ref('');
const blogUrl = ref('');
const homepageHeading = ref('');
const author = ref('');
const logo = ref('');
const selectedPalette = ref('Default');
const socialLinks = ref([]);

const logoSrc = computed(() => logo.value ? `/admin/site/${logo.value}` : null);

const colorPalettes = [
  { name: 'Default', bg: '#fafafa', primary: '#3b5bdb', accent: '#6b7280' },
  { name: 'Forest',  bg: '#f4f7f2', primary: '#16a34a', accent: '#4a7a54' },
  { name: 'Ink',     bg: '#ffffff', primary: '#27272a', accent: '#64748b' },
  { name: 'Ocean',   bg: '#f0f9fc', primary: '#2563eb', accent: '#466e7c' },
  { name: 'Plum',    bg: '#faf8fd', primary: '#7c3aed', accent: '#7a5c96' },
  { name: 'Rose',    bg: '#fff5f7', primary: '#e11d48', accent: '#8c3f52' },
  { name: 'Slate',   bg: '#f8fafc', primary: '#475569', accent: '#5c7080' },
  { name: 'Sunset',  bg: '#fffbf5', primary: '#ea580c', accent: '#8a5820' },
];

async function loadSettings() {
  try {
    const res = await fetch('/api/settings');
    if (!res.ok) throw new Error();
    const data = await res.json();
    blogName.value = data.config?.site?.name ?? '';
    blogUrl.value = data.config?.site?.url ?? '';
    homepageHeading.value = data.config?.homepage?.heading ?? '';
    author.value = data.config?.author ?? '';
    logo.value = data.config?.site?.logo ?? '';
    selectedPalette.value = data.colorPalette ?? 'Default';
    socialLinks.value = data.config?.footer?.socialLinks ?? [];
  } catch {
    alerts.show('error', 'Failed to load settings.');
  }
}

onMounted(loadSettings);

async function uploadLogo(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const formData = new FormData();
  formData.append('logo', file);
  try {
    const res = await fetch('/api/settings/logo', { method: 'POST', body: formData });
    const data = await res.json();
    if (!res.ok) { alerts.show('error', data.error || 'Failed to upload logo.'); return; }
    logo.value = data.logo;
    rebuild.markDirty();
    alerts.show('success', 'Logo uploaded.');
  } catch {
    alerts.show('error', 'Failed to upload logo.');
  } finally {
    if (logoInput.value) logoInput.value.value = '';
  }
}

async function removeLogo() {
  try {
    const res = await fetch('/api/settings/logo', { method: 'DELETE' });
    if (!res.ok) { alerts.show('error', 'Failed to remove logo.'); return; }
    logo.value = '';
    rebuild.markDirty();
    alerts.show('success', 'Logo removed.');
  } catch {
    alerts.show('error', 'Failed to remove logo.');
  }
}

async function saveSettings() {
  try {
    const body = {
      blogName: blogName.value,
      blogUrl: blogUrl.value,
      homepageHeading: homepageHeading.value,
      author: author.value,
      colorPalette: selectedPalette.value,
      socialLinks: JSON.stringify(socialLinks.value),
    };
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) { alerts.show('error', data.error || 'Failed to save settings.'); return; }
    rebuild.markDirty();
    alerts.show('success', 'Settings saved successfully.');
    await loadSettings();
  } catch {
    alerts.show('error', 'Failed to save settings.');
  }
}
</script>
