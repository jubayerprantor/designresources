<template>
  <div class="bangla-showcase-container">
    <div class="showcase-header">
      <div class="header-title">
        <h3>🎨 Interactive Bangla Typography Previewer</h3>
        <p>Type any phrase below to test how different typefaces render in real-time.</p>
      </div>
      <div class="showcase-controls">
        <label class="control-label">
          Size: <strong>{{ fontSize }}px</strong>
          <input v-model="fontSize" type="range" min="18" max="52" step="2" class="size-slider" />
        </label>
      </div>
    </div>

    <!-- Live Preview Input -->
    <div class="input-wrap">
      <input
        v-model="previewText"
        type="text"
        placeholder="টাইপ করুন এখানে..."
        class="preview-input"
      />
    </div>

    <!-- Font Cards Grid -->
    <div class="font-grid">
      <div v-for="font in fonts" :key="font.name" class="font-card">
        <div class="card-meta">
          <div class="font-info">
            <span class="font-name">{{ font.name }}</span>
            <span class="font-category">{{ font.category }}</span>
          </div>
          <a :href="font.url" target="_blank" rel="noopener noreferrer" class="download-link">
            Get Font ↗
          </a>
        </div>
        <div
          class="font-preview-box"
          :style="{
            fontFamily: font.fontFamily,
            fontSize: fontSize + 'px'
          }"
        >
          {{ previewText || 'আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।' }}
        </div>
        <div class="font-alphabet" :style="{ fontFamily: font.fontFamily }">
          অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const previewText = ref('আমাদের ভালোবাসার বাংলা বর্ণমালা')
const fontSize = ref(28)

const fonts = [
  {
    name: 'Anek Bangla',
    category: 'Google Fonts · Variable · Modern Sans',
    fontFamily: "'Anek Bangla', sans-serif",
    url: 'https://fonts.google.com/specimen/Anek+Bangla'
  },
  {
    name: 'Noto Sans Bengali',
    category: 'Google Fonts · Clean · UI Standard',
    fontFamily: "'Noto Sans Bengali', sans-serif",
    url: 'https://fonts.google.com/specimen/Noto+Sans+Bengali'
  },
  {
    name: 'Hind Siliguri',
    category: 'Google Fonts · Clear Text · Editorial',
    fontFamily: "'Hind Siliguri', sans-serif",
    url: 'https://fonts.google.com/specimen/Hind+Siliguri'
  },
  {
    name: 'Tiro Bangla',
    category: 'Google Fonts · Formal Serif · Literary',
    fontFamily: "'Tiro Bangla', serif",
    url: 'https://fonts.google.com/specimen/Tiro+Bangla'
  },
  {
    name: 'Kalpurush',
    category: 'Avash / Ekushey · Open Source Standard',
    fontFamily: "'Kalpurush', 'SolaimanLipi', sans-serif",
    url: 'https://www.omicronlab.com/bangla-fonts.html'
  },
  {
    name: 'SolaimanLipi',
    category: 'Community Favorite · Modern Web Standard',
    fontFamily: "'SolaimanLipi', sans-serif",
    url: 'https://fontbd.com/free-fonts/solaimanlipi'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;600&family=Hind+Siliguri:wght@400;600&family=Noto+Sans+Bengali:wght@400;600&family=Tiro+Bangla&display=swap');

.bangla-showcase-container {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.showcase-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.header-title h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.header-title p {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.showcase-controls {
  display: flex;
  align-items: center;
}

.control-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.control-label strong {
  color: var(--vp-c-brand-1);
}

.size-slider {
  width: 120px;
  accent-color: var(--vp-c-brand-1);
  cursor: pointer;
}

.input-wrap {
  margin-bottom: 1.5rem;
}

.preview-input {
  width: 100%;
  padding: 0.85rem 1.25rem;
  font-size: 1.15rem;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 10px;
  outline: none;
  transition: all 0.2s ease;
}

.preview-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
}

.font-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
}

.font-card {
  padding: 1.25rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.font-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.font-name {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.font-category {
  display: block;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin-top: 0.15rem;
}

.download-link {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: rgba(139, 92, 246, 0.1);
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: all 0.2s ease;
}

.download-link:hover {
  background: var(--vp-c-brand-1);
  color: #ffffff;
}

.font-preview-box {
  min-height: 80px;
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  word-break: break-word;
  margin: 0.5rem 0;
}

.font-alphabet {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 0.6rem;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

