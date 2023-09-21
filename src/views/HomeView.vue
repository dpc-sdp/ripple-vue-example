<script setup lang="ts">
import { RplButton, RplPromoCard, RplTextLink, RplPageComponent } from '@dpc-sdp/ripple-ui-core/vue'
</script>

<template>
  <main>
    <h2 class="rpl-type-h2">Home Page</h2>
    <RplPageComponent>
      <p class="rpl-type-p">Here's an example of a homepage, using components from <code>ripple-ui-core</code>. There is also an <RplTextLink href="/about">About</RplTextLink> page.</p>
    </RplPageComponent>
    <RplPageComponent class="rpl-grid">
      <RplPromoCard class="rpl-col-12 rpl-col-6-m rpl-col-4-l" :highlight="true">
        <template #meta><span class="rpl-card__topic">NEWS</span></template>
        A simple promo card with no links.
      </RplPromoCard>
    </RplPageComponent>
    <RplPageComponent>
      <RplButton >Default button</RplButton>
      &nbsp;
      <RplButton variant="outlined">Outlined button</RplButton>
    </RplPageComponent>
  </main>
</template>

<style>
code {
  color: var(--rpl-clr-accent);
  font-weight: var(--rpl-type-weight-bold);
}
</style>
