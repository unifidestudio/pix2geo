<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import useMakrdownToc from '/@src/composable/useMarkdownToc'
import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-IconBox - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="vuero-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
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
        <h1 class="title is-4">V-IconBox</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <V-Breadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: 'index' },
          },
          {
            label: 'Components',
            to: { name: 'components' },
          },
          {
            label: 'V-IconBox',
            to: { name: 'components-icon-box' },
          },
        ]"
      />

      <div class="columns">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <!--Icon Box-->
          <IconBoxDefaultDocumentation />

          <!--Box Colors-->
          <IconBoxColorsDocumentation />

          <!--Box Border-->
          <IconBoxSquaredBorderDocumentation />

          <!--Box Rounded-->
          <IconBoxRoundedDocumentation />

          <!--Box Colors-->
          <IconBoxRoundedBorderDocumentation />

          <!--Feather Icons-->
          <IconBoxFeatherDocumentation />

          <!--Font Awesome-->
          <IconBoxFaDocumentation />

          <!--Props-->
          <IconBoxPropsDocumentation />

          <!--Slots-->
          <IconBoxSlotsDocumentation />
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
