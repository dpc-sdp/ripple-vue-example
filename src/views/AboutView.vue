<script setup lang="ts">
import { RplAccordion, RplPageComponent } from '@dpc-sdp/ripple-ui-core/vue'

const items = [
  {
    id: '1',
    title: 'Accordion one',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    `
  },
  {
    id: '2',
    title: 'Accordion two',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    `
  }
]
</script>

<template>
  <main>
    <h2 class="rpl-type-h2">About Page</h2>
    <RplPageComponent>
      <p class="rpl-type-p">
        This page has an example of an accordion component.
      </p>
    </RplPageComponent>
    <RplPageComponent>
      <RplAccordion id="example-accordion" :items="items" />
    </RplPageComponent>
  </main>
</template>
