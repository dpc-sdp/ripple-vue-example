<script lang="ts" setup>
import { RplHeroHeader } from '@dpc-sdp/ripple-ui-core/vue'

interface Props {
  title: string
  content: string
}

defineProps<Props>()
</script>

<template>
  <RplHeroHeader :behindNav="true" :title="title">
    {{ content }}
  </RplHeroHeader>
</template>
