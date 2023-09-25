<script setup lang="ts">
import { RouterView } from 'vue-router'
import {
  RplLayout,
  RplIconSprite,
  RplPrimaryNav,
  RplSocialShare,
  RplFooter
} from '@dpc-sdp/ripple-ui-core/vue'
import '@dpc-sdp/ripple-ui-core/style'
import '@dpc-sdp/ripple-ui-core/style/components'
import HomeBanner from '@/components/HomeBanner.vue'
import router from '@/router'

const menu = router.options.routes.map((route: any, i) => ({
  id: i,
  text: `${route.name[0].toUpperCase()}${route.name.slice(1)}`,
  url: route.path
}))

const social = {
  url: window.location.href,
  pagetitle: document.title
}
</script>

<template>
  <RplLayout>
    <template #aboveHeader>
      <RplIconSprite />
      <slot name="aboveHeader"></slot>
    </template>
    <template #primaryNav>
      <slot name="primaryNav">
        <RplPrimaryNav
          :items="menu"
          :primaryLogo="{
            altText: 'Victoria government logo',
            href: '/'
          }"
          :secondaryLogo="{
            src: '/assets/logo.svg',
            altText: 'Example'
          }"
          :showQuickExit="false"
        >
        </RplPrimaryNav>
      </slot>
    </template>
    <template #breadcrumbs>
      <slot name="breadcrumbs">
      </slot>
    </template>
    <template #aboveBody="{ hasBreadcrumbs }">
      <slot name="aboveBody" :hasBreadcrumbs="hasBreadcrumbs">
        <HomeBanner v-bind="$route.meta.banner" />
      </slot>
    </template>
    <template #body="{ hasSidebar = $route.path !== '/' }">
      <slot name="body" :hasSidebar="hasSidebar">
        <RouterView />
      </slot>
    </template>
    <template #belowBody>
      <slot name="belowBody"></slot>
    </template>
    <template #aboveSidebar>
      <slot name="aboveSidebar"></slot>
    </template>
    <template #sidebar>
      <slot name="sidebar">
        <RplSocialShare v-if="$route.path !== '/'" v-bind="social" />
      </slot>
    </template>
    <template #belowSidebar>
      <slot name="aboveSidebar"></slot>
    </template>
    <template #footer>
      <slot name="footer">
        <RplFooter :nav="[{text: 'Navigation', items: menu}]">
        </RplFooter>
      </slot>
    </template>
  </RplLayout>
</template>
