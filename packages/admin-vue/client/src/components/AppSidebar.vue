<template>
  <aside
    class="fixed top-0 left-0 h-screen w-36 flex flex-col z-40"
    :style="{ backgroundColor: 'var(--color-sidebar)', borderRight: '1px solid var(--color-border-subtle)' }"
  >
    <!-- Logo -->
    <div
      class="flex items-center gap-2.5 px-4 h-[52px] shrink-0"
      :style="{ borderBottom: '1px solid var(--color-border-subtle)' }"
    >
      <RouterLink to="/admin" class="flex items-center gap-2.5 min-w-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 159 195" preserveAspectRatio="xMidYMid meet" class="shrink-0">
          <g transform="translate(0,195) scale(0.05,-0.05)" :fill="'var(--color-primary)'" stroke="none">
            <path d="M1350 3138 c-1008 -249 -1250 -1616 -390 -2198 1059 -716 2367 496 1746 1617 -244 441 -859 705 -1356 581z m676 -135 c463 -166 785 -652 742 -1120 -49 -544 -995 -531 -995 13 1 266 201 442 446 392 109 -23 111 -17 28 116 -225 361 -808 231 -1224 -272 -174 -210 -261 -291 -373 -344 l-100 -47 -13 44 c-23 79 -17 261 12 401 137 642 856 1040 1477 817z"/>
          </g>
        </svg>
        <span class="text-sm font-semibold tracking-tight truncate" :style="{ color: 'var(--color-content)' }">WebNami</span>
      </RouterLink>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-2 py-3 flex flex-col gap-0.5 overflow-y-auto">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="sidebar-nav-item flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors duration-100"
        :style="navStyle(item.to)"
        @mouseenter="(e) => hoverEnter(e, item.to)"
        @mouseleave="(e) => hoverLeave(e, item.to)"
      >
        <component :is="item.icon" :size="15" style="flex-shrink:0;" />
        {{ item.label }}
      </RouterLink>
    </nav>

    <!-- Bottom actions -->
    <div class="px-2 py-3 flex flex-col gap-0.5" :style="{ borderTop: '1px solid var(--color-border-subtle)' }">
      <a
        href="/"
        target="_blank"
        class="flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors duration-100"
        :style="{ color: 'var(--color-accent)' }"
        @mouseenter="(e) => { e.currentTarget.style.backgroundColor = 'var(--color-sidebar-hover)'; e.currentTarget.style.color = 'var(--color-content)'; }"
        @mouseleave="(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--color-accent)'; }"
      >
        <ExternalLink :size="15" style="flex-shrink:0;" />
        View Site
      </a>
      <button
        class="w-full flex items-center gap-2.5 px-3 py-2 rounded text-[13px] font-medium transition-colors duration-100"
        :style="{ color: 'var(--color-accent)' }"
        @click="toggleTheme"
        @mouseenter="(e) => { e.currentTarget.style.backgroundColor = 'var(--color-sidebar-hover)'; e.currentTarget.style.color = 'var(--color-content)'; }"
        @mouseleave="(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'var(--color-accent)'; }"
      >
        <Sun v-if="theme.dark" :size="15" style="flex-shrink:0;" />
        <Moon v-else :size="15" style="flex-shrink:0;" />
        {{ theme.dark ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { FileText, File, SlidersHorizontal, ExternalLink, Sun, Moon } from 'lucide-vue-next';
import { useThemeStore } from '../stores/theme.js';

const route = useRoute();
const theme = useThemeStore();

const navItems = [
  { to: '/admin/posts', label: 'Posts', icon: FileText },
  { to: '/admin/pages', label: 'Pages', icon: File },
  { to: '/admin/settings', label: 'Settings', icon: SlidersHorizontal },
];

function isActive(to) {
  return route.path === to || route.path.startsWith(to + '/');
}

function navStyle(to) {
  if (isActive(to)) {
    return { backgroundColor: 'var(--color-sidebar-active)', color: 'var(--color-primary)' };
  }
  return { color: 'var(--color-accent)' };
}

function hoverEnter(e, to) {
  if (!isActive(to)) {
    e.currentTarget.style.backgroundColor = 'var(--color-sidebar-hover)';
    e.currentTarget.style.color = 'var(--color-content)';
  }
}

function hoverLeave(e, to) {
  if (!isActive(to)) {
    e.currentTarget.style.backgroundColor = '';
    e.currentTarget.style.color = 'var(--color-accent)';
  }
}

function toggleTheme() {
  if (theme.dark) theme.setLight();
  else theme.setDark();
}
</script>
