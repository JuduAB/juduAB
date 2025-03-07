<template>
    <DefaultTheme.Layout>
        <template #layout-top>
            <MouseFollower />
            <MouseClick />
        </template>
    </DefaultTheme.Layout>
</template>
<script setup>
import DefaultTheme from 'vitepress/theme';

import MouseClick from "./MouseClick.vue";
import MouseFollower from "./MouseFollower.vue";

</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

/* 修正因视图过渡导致的月牙图标偏移 */
.check .icon {
  top: -2px;
}
</style>