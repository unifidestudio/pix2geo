<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

useHead({
  title: 'Grid Tiles 3 - Sidebar - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        @click="toggleSidebar('layouts')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">Tile Grid</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <TilesGridV3 />
    </div>
  </div>
</template>
