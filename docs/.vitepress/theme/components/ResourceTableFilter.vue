<template>
  <div v-if="hasTables" class="resource-filter-container">
    <div class="filter-header">
      <div class="search-box">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Filter resources on this page by name, keyword, or tag..."
          class="filter-input"
          @input="applyFilter"
        />
        <button v-if="searchQuery" class="clear-btn" @click="clearSearch" title="Clear search">
          ✕
        </button>
      </div>

      <div class="filter-stats">
        <span class="count-badge">
          Showing <strong>{{ visibleRows }}</strong> of {{ totalRows }} resources
        </span>
      </div>
    </div>

    <!-- Quick Filter Pills -->
    <div class="filter-pills">
      <button
        v-for="tag in quickTags"
        :key="tag"
        :class="['tag-pill', { active: activeTag === tag }]"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const searchQuery = ref('')
const activeTag = ref('All')
const totalRows = ref(0)
const visibleRows = ref(0)
const hasTables = ref(false)

const quickTags = ['All', 'Free', 'Open Source', 'Figma', 'AI', 'Tutorials']

function countAndInitTables() {
  if (typeof window === 'undefined') return
  nextTick(() => {
    // Exclude home page and about pages without data tables
    if (route.path === '/' || route.path.endsWith('/index.html')) {
      hasTables.value = false
      return
    }

    const rows = document.querySelectorAll('.vp-doc table tbody tr')
    if (rows && rows.length > 0) {
      hasTables.value = true
      totalRows.value = rows.length
      applyFilter()
    } else {
      hasTables.value = false
    }
  })
}

function selectTag(tag) {
  if (activeTag.value === tag) {
    activeTag.value = 'All'
    searchQuery.value = ''
  } else {
    activeTag.value = tag
    searchQuery.value = tag === 'All' ? '' : tag
  }
  applyFilter()
}

function clearSearch() {
  searchQuery.value = ''
  activeTag.value = 'All'
  applyFilter()
}

function applyFilter() {
  if (typeof window === 'undefined') return
  const q = searchQuery.value.trim().toLowerCase()
  const rows = document.querySelectorAll('.vp-doc table tbody tr')
  let count = 0

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase()
    const matches = !q || text.includes(q)
    if (matches) {
      row.style.display = ''
      count++
    } else {
      row.style.display = 'none'
    }
  })

  visibleRows.value = count
}

onMounted(() => {
  countAndInitTables()
})

watch(() => route.path, () => {
  searchQuery.value = ''
  activeTag.value = 'All'
  countAndInitTables()
})
</script>

<style scoped>
.resource-filter-container {
  margin: 1.5rem 0 2rem;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.resource-filter-container:focus-within {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.15);
}

.filter-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
}

.search-box {
  position: relative;
  flex: 1 1 300px;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 0.85rem;
  width: 1.1rem;
  height: 1.1rem;
  color: var(--vp-c-text-2);
  pointer-events: none;
}

.filter-input {
  width: 100%;
  padding: 0.65rem 2.2rem 0.65rem 2.4rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
}

.filter-input:focus {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.clear-btn {
  position: absolute;
  right: 0.75rem;
  background: transparent;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.2rem;
  line-height: 1;
}

.clear-btn:hover {
  color: var(--vp-c-brand-1);
}

.filter-stats {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.count-badge strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.filter-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px dashed var(--vp-c-divider);
}

.tag-pill {
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-pill:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tag-pill.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #ffffff;
}

@media (max-width: 640px) {
  .filter-header {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>

