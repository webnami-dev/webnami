<template>
  <div>
    <textarea ref="textareaRef"></textarea>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import EasyMDE from 'easymde';
import { icons } from 'lucide';
import { useAlertsStore } from '../stores/alerts.js';

const props = defineProps({
  modelValue: { type: String, default: '' },
  slug: { type: String, default: '' },
  type: { type: String, default: 'posts' },
});

const emit = defineEmits(['update:modelValue']);
const textareaRef = ref(null);
const alerts = useAlertsStore();
let editor = null;

function lucideIcon(name) {
  const key = name.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join('');
  const data = icons[key];
  if (!data) return '';
  const els = data.map(([tag, attrs]) => {
    const a = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
    return `<${tag} ${a}/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${els}</svg>`;
}

function getToolbar() {
  return [
    { name: 'bold', action: EasyMDE.toggleBold, icon: lucideIcon('bold'), title: 'Bold' },
    { name: 'italic', action: EasyMDE.toggleItalic, icon: lucideIcon('italic'), title: 'Italic' },
    { name: 'strikethrough', action: EasyMDE.toggleStrikethrough, icon: lucideIcon('strikethrough'), title: 'Strikethrough' },
    { name: 'underline', action(ed) { const cm = ed.codemirror; const sel = cm.getSelection(); cm.replaceSelection(`<u>${sel || 'underline'}</u>`); }, icon: lucideIcon('underline'), title: 'Underline' },
    '|',
    { name: 'heading-1', action: EasyMDE.toggleHeading1, icon: lucideIcon('heading-1'), title: 'Heading 1' },
    { name: 'heading-2', action: EasyMDE.toggleHeading2, icon: lucideIcon('heading-2'), title: 'Heading 2' },
    { name: 'heading-3', action: EasyMDE.toggleHeading3, icon: lucideIcon('heading-3'), title: 'Heading 3' },
    { name: 'heading-4', action: EasyMDE.toggleHeading4, icon: lucideIcon('heading-4'), title: 'Heading 4' },
    { name: 'heading-5', action: EasyMDE.toggleHeading5, icon: lucideIcon('heading-5'), title: 'Heading 5' },
    { name: 'heading-6', action: EasyMDE.toggleHeading6, icon: lucideIcon('heading-6'), title: 'Heading 6' },
    '|',
    { name: 'quote', action: EasyMDE.toggleBlockquote, icon: lucideIcon('quote'), title: 'Blockquote' },
    { name: 'unordered-list', action: EasyMDE.toggleUnorderedList, icon: lucideIcon('list'), title: 'Unordered List' },
    { name: 'ordered-list', action: EasyMDE.toggleOrderedList, icon: lucideIcon('list-ordered'), title: 'Ordered List' },
    '|',
    { name: 'code', action: EasyMDE.toggleCodeBlock, icon: lucideIcon('code'), title: 'Code' },
    { name: 'link', action: EasyMDE.drawLink, icon: lucideIcon('link'), title: 'Link' },
    { name: 'image', action: EasyMDE.drawImage, icon: lucideIcon('image'), title: 'Image' },
    { name: 'table', action: EasyMDE.drawTable, icon: lucideIcon('table'), title: 'Table' },
    '|',
    { name: 'horizontal-rule', action: EasyMDE.drawHorizontalRule, icon: lucideIcon('minus'), title: 'Horizontal Rule' },
  ];
}

onMounted(() => {
  editor = new EasyMDE({
    element: textareaRef.value,
    spellChecker: false,
    status: false,
    toolbar: getToolbar(),
    initialValue: props.modelValue,
    uploadImage: true,
    imageUploadFunction(file, onSuccess, onError) {
      const body = new FormData();
      body.append('slug', props.slug);
      body.append('type', props.type);
      body.append('image', file);
      fetch('/api/upload', { method: 'POST', body })
        .then((r) => r.json())
        .then((d) => d.url ? onSuccess(d.url) : onError(d.error ?? 'Upload failed.'))
        .catch(() => onError('Upload failed.'));
    },
    imageErrorCallback(msg) {
      alerts.show('error', msg);
    },
  });

  editor.codemirror.on('change', () => {
    emit('update:modelValue', editor.value());
  });
});

onBeforeUnmount(() => {
  if (editor) {
    editor.toTextArea();
    editor = null;
  }
});

// Expose getValue for parent to call directly if needed
defineExpose({
  getValue: () => editor?.value() ?? '',
});
</script>
