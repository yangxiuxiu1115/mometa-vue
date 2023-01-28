export const common = `<script setup lang="ts">
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <span>asd</span><span>asd</span>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`

export const commonTest = `<script setup lang="ts">
</script>

<template>
  <div :mometa="{ start: { column: 3, line: 5, offset: 49}, end: { column: 9, line: 13, offset: 348}, isSelfClosing: false}">
    <a :mometa="{ start: { column: 5, line: 6, offset: 59}, end: { column: 9, line: 9, offset: 211}, isSelfClosing: false}" href="https://vitejs.dev" target="_blank">
      <img :mometa="{ start: { column: 7, line: 7, offset: 111}, end: { column: 59, line: 7, offset: 163}, isSelfClosing: true}" src="/vite.svg" class="logo" alt="Vite logo" />
      <span :mometa="{ start: { column: 7, line: 8, offset: 170}, end: { column: 23, line: 8, offset: 186}, isSelfClosing: false}">asd</span><span :mometa="{ start: { column: 23, line: 8, offset: 186}, end: { column: 39, line: 8, offset: 202}, isSelfClosing: false}">asd</span>
    </a>
    <a :mometa="{ start: { column: 5, line: 10, offset: 216}, end: { column: 9, line: 12, offset: 339}, isSelfClosing: false}" href="https://vuejs.org/" target="_blank">
      <img :mometa="{ start: { column: 7, line: 11, offset: 268}, end: { column: 69, line: 11, offset: 330}, isSelfClosing: true}" src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`

export const component = `<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <span>asd</span><span>asd</span>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`
export const componentTest = `<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div :mometa="{ start: { column: 3, line: 6, offset: 102}, end: { column: 9, line: 14, offset: 401}, isSelfClosing: false}">
    <a :mometa="{ start: { column: 5, line: 7, offset: 112}, end: { column: 9, line: 10, offset: 264}, isSelfClosing: false}" href="https://vitejs.dev" target="_blank">
      <img :mometa="{ start: { column: 7, line: 8, offset: 164}, end: { column: 59, line: 8, offset: 216}, isSelfClosing: true}" src="/vite.svg" class="logo" alt="Vite logo" />
      <span :mometa="{ start: { column: 7, line: 9, offset: 223}, end: { column: 23, line: 9, offset: 239}, isSelfClosing: false}">asd</span><span :mometa="{ start: { column: 23, line: 9, offset: 239}, end: { column: 39, line: 9, offset: 255}, isSelfClosing: false}">asd</span>
    </a>
    <a :mometa="{ start: { column: 5, line: 11, offset: 269}, end: { column: 9, line: 13, offset: 392}, isSelfClosing: false}" href="https://vuejs.org/" target="_blank">
      <img :mometa="{ start: { column: 7, line: 12, offset: 321}, end: { column: 69, line: 12, offset: 383}, isSelfClosing: true}" src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`

export const VFor = `<script setup lang="ts">
import { ref } from 'vue'
const list = ref([1, 2, 3, 4])
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <span>asd</span><span>asd</span>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <span v-for="item in list" :key="item">{{ item }}</span>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`

export const VForTest = `<script setup lang="ts">
import { ref } from 'vue'
const list = ref([1, 2, 3, 4])
</script>

<template>
  <div :mometa="{ start: { column: 3, line: 7, offset: 106}, end: { column: 9, line: 15, offset: 405}, isSelfClosing: false}">
    <a :mometa="{ start: { column: 5, line: 8, offset: 116}, end: { column: 9, line: 11, offset: 268}, isSelfClosing: false}" href="https://vitejs.dev" target="_blank">
      <img :mometa="{ start: { column: 7, line: 9, offset: 168}, end: { column: 59, line: 9, offset: 220}, isSelfClosing: true}" src="/vite.svg" class="logo" alt="Vite logo" />
      <span :mometa="{ start: { column: 7, line: 10, offset: 227}, end: { column: 23, line: 10, offset: 243}, isSelfClosing: false}">asd</span><span :mometa="{ start: { column: 23, line: 10, offset: 243}, end: { column: 39, line: 10, offset: 259}, isSelfClosing: false}">asd</span>
    </a>
    <a :mometa="{ start: { column: 5, line: 12, offset: 273}, end: { column: 9, line: 14, offset: 396}, isSelfClosing: false}" href="https://vuejs.org/" target="_blank">
      <img :mometa="{ start: { column: 7, line: 13, offset: 325}, end: { column: 69, line: 13, offset: 387}, isSelfClosing: true}" src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <span :mometa="{ start: { column: 3, line: 16, offset: 408}, end: { column: 59, line: 16, offset: 464}, isSelfClosing: false}" v-for="item in list" :key="item">{{ item }}</span>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`

export const uicomponent = `<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <hello-world msg="Vite + Vue" />
  <a-button type="primary">Primary Button</a-button>
  <div>sadasd</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`

export const uicomponentTest = `<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <hello-world msg="Vite + Vue" />
  <a-button :mometa="{ start: { column: 3, line: 8, offset: 171}, end: { column: 53, line: 8, offset: 221}, isSelfClosing: false}" type="primary">Primary Button</a-button>
  <div :mometa="{ start: { column: 3, line: 9, offset: 224}, end: { column: 20, line: 9, offset: 241}, isSelfClosing: false}">sadasd</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>`
