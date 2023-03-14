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

export const commonTest =
  '<script setup lang="ts">\n</script>\n\n<template>\n  <div __mometa="0" :mometa="{ start: { column: 3, line: 5, offset: 49}, end: { column: 9, line: 13, offset: 348}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'div\', path: $attrs[\'__mometa\']}" >\n    <a __mometa="0.0" :mometa="{ start: { column: 5, line: 6, offset: 59}, end: { column: 9, line: 9, offset: 211}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'a\', path: $attrs[\'__mometa\']}"  href="https://vitejs.dev" target="_blank">\n      <img __mometa="0.0.0" :mometa="{ start: { column: 7, line: 7, offset: 111}, end: { column: 59, line: 7, offset: 163}, isSelfClosing: true, filename: \'app\', isComponent: false, name: \'img\', path: $attrs[\'__mometa\']}"  src="/vite.svg" class="logo" alt="Vite logo" />\n      <span __mometa="0.0.1" :mometa="{ start: { column: 7, line: 8, offset: 170}, end: { column: 23, line: 8, offset: 186}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'span\', path: $attrs[\'__mometa\']}" >asd</span><span __mometa="0.0.2" :mometa="{ start: { column: 23, line: 8, offset: 186}, end: { column: 39, line: 8, offset: 202}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'span\', path: $attrs[\'__mometa\']}" >asd</span>\n    </a>\n    <a __mometa="0.1" :mometa="{ start: { column: 5, line: 10, offset: 216}, end: { column: 9, line: 12, offset: 339}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'a\', path: $attrs[\'__mometa\']}"  href="https://vuejs.org/" target="_blank">\n      <img __mometa="0.1.0" :mometa="{ start: { column: 7, line: 11, offset: 268}, end: { column: 69, line: 11, offset: 330}, isSelfClosing: true, filename: \'app\', isComponent: false, name: \'img\', path: $attrs[\'__mometa\']}"  src="./assets/vue.svg" class="logo vue" alt="Vue logo" />\n    </a>\n  </div>\n</template>\n\n<style scoped>\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n</style>'

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
export const componentTest =
  '<script setup lang="ts">\nimport HelloWorld from \'./components/HelloWorld.vue\'\n</script>\n\n<template>\n  <div __mometa="0" :mometa="{ start: { column: 3, line: 6, offset: 102}, end: { column: 9, line: 14, offset: 401}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'div\', path: $attrs[\'__mometa\']}" >\n    <a __mometa="0.0" :mometa="{ start: { column: 5, line: 7, offset: 112}, end: { column: 9, line: 10, offset: 264}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'a\', path: $attrs[\'__mometa\']}"  href="https://vitejs.dev" target="_blank">\n      <img __mometa="0.0.0" :mometa="{ start: { column: 7, line: 8, offset: 164}, end: { column: 59, line: 8, offset: 216}, isSelfClosing: true, filename: \'app\', isComponent: false, name: \'img\', path: $attrs[\'__mometa\']}"  src="/vite.svg" class="logo" alt="Vite logo" />\n      <span __mometa="0.0.1" :mometa="{ start: { column: 7, line: 9, offset: 223}, end: { column: 23, line: 9, offset: 239}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'span\', path: $attrs[\'__mometa\']}" >asd</span><span __mometa="0.0.2" :mometa="{ start: { column: 23, line: 9, offset: 239}, end: { column: 39, line: 9, offset: 255}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'span\', path: $attrs[\'__mometa\']}" >asd</span>\n    </a>\n    <a __mometa="0.1" :mometa="{ start: { column: 5, line: 11, offset: 269}, end: { column: 9, line: 13, offset: 392}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'a\', path: $attrs[\'__mometa\']}"  href="https://vuejs.org/" target="_blank">\n      <img __mometa="0.1.0" :mometa="{ start: { column: 7, line: 12, offset: 321}, end: { column: 69, line: 12, offset: 383}, isSelfClosing: true, filename: \'app\', isComponent: false, name: \'img\', path: $attrs[\'__mometa\']}"  src="./assets/vue.svg" class="logo vue" alt="Vue logo" />\n    </a>\n  </div>\n  <HelloWorld __mometa="1"  msg="Vite + Vue" />\n</template>\n\n<style scoped>\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n</style>'

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
export const VForTest =
  '<script setup lang="ts">\nimport { ref } from \'vue\'\nconst list = ref([1, 2, 3, 4])\n</script>\n\n<template>\n  <div __mometa="0" :mometa="{ start: { column: 3, line: 7, offset: 106}, end: { column: 9, line: 15, offset: 405}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'div\', path: $attrs[\'__mometa\']}" >\n    <a __mometa="0.0" :mometa="{ start: { column: 5, line: 8, offset: 116}, end: { column: 9, line: 11, offset: 268}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'a\', path: $attrs[\'__mometa\']}"  href="https://vitejs.dev" target="_blank">\n      <img __mometa="0.0.0" :mometa="{ start: { column: 7, line: 9, offset: 168}, end: { column: 59, line: 9, offset: 220}, isSelfClosing: true, filename: \'app\', isComponent: false, name: \'img\', path: $attrs[\'__mometa\']}"  src="/vite.svg" class="logo" alt="Vite logo" />\n      <span __mometa="0.0.1" :mometa="{ start: { column: 7, line: 10, offset: 227}, end: { column: 23, line: 10, offset: 243}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'span\', path: $attrs[\'__mometa\']}" >asd</span><span __mometa="0.0.2" :mometa="{ start: { column: 23, line: 10, offset: 243}, end: { column: 39, line: 10, offset: 259}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'span\', path: $attrs[\'__mometa\']}" >asd</span>\n    </a>\n    <a __mometa="0.1" :mometa="{ start: { column: 5, line: 12, offset: 273}, end: { column: 9, line: 14, offset: 396}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'a\', path: $attrs[\'__mometa\']}"  href="https://vuejs.org/" target="_blank">\n      <img __mometa="0.1.0" :mometa="{ start: { column: 7, line: 13, offset: 325}, end: { column: 69, line: 13, offset: 387}, isSelfClosing: true, filename: \'app\', isComponent: false, name: \'img\', path: $attrs[\'__mometa\']}"  src="./assets/vue.svg" class="logo vue" alt="Vue logo" />\n    </a>\n  </div>\n  <span __mometa="1" :mometa="{ start: { column: 3, line: 16, offset: 408}, end: { column: 59, line: 16, offset: 464}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'span\', path: $attrs[\'__mometa\']}"  v-for="item in list" :key="item">{{ item }}</span>\n</template>\n\n<style scoped>\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n</style>'

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

export const uicomponentTest =
  '<script setup lang="ts">\nimport HelloWorld from \'./components/HelloWorld.vue\'\n</script>\n\n<template>\n  <HelloWorld __mometa="0"  msg="Vite + Vue" />\n  <hello-world __mometa="1"  msg="Vite + Vue" />\n  <a-button __mometa="2" :mometa="{ start: { column: 3, line: 8, offset: 171}, end: { column: 53, line: 8, offset: 221}, isSelfClosing: false, filename: \'app\', isComponent: true, name: \'a-button\', path: $attrs[\'__mometa\']}"  type="primary">Primary Button</a-button>\n  <div __mometa="3" :mometa="{ start: { column: 3, line: 9, offset: 224}, end: { column: 20, line: 9, offset: 241}, isSelfClosing: false, filename: \'app\', isComponent: false, name: \'div\', path: $attrs[\'__mometa\']}" >sadasd</div>\n</template>\n\n<style scoped>\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n</style>'

export const slotcomponent = `<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue">
    <template #icon>
      <div>asd</div>
    </template>
  </HelloWorld>
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
export const slotcomponentTest =
  '<script setup lang="ts">\nimport HelloWorld from \'./components/HelloWorld.vue\'\n</script>\n\n<template>\n  <HelloWorld __mometa="0"  msg="Vite + Vue">\n    <template #icon>\n      <div __mometa="0.0" :mometa="{ start: { column: 7, line: 8, offset: 159}, end: { column: 21, line: 8, offset: 173}, isSelfClosing: false, filename: \'app\', isComponent: false, slotName: \'icon\', name: \'div\', path: $attrs[\'__mometa\']}" >asd</div>\n    </template>\n  </HelloWorld>\n</template>\n\n<style scoped>\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n</style>'
