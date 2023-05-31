const globalWindows: any = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}

let devtoolsHook = typeof window !== 'undefined' && globalWindows.__VUE_DEVTOOLS_GLOBAL_HOOK__
if (!devtoolsHook) {
  globalWindows.__VUE_DEVTOOLS_GLOBAL_HOOK__ = devtoolsHook = {}
}
const orginEmit = devtoolsHook.emit

const enum DevtoolsHooks {
  APP_INIT = 'app:init',
  APP_UNMOUNT = 'app:unmount',
  COMPONENT_UPDATED = 'component:updated',
  COMPONENT_ADDED = 'component:added',
  COMPONENT_REMOVED = 'component:removed',
  COMPONENT_EMIT = 'component:emit',
  PERFORMANCE_START = 'perf:start',
  PERFORMANCE_END = 'perf:end'
}

devtoolsHook.emit = function (event: any, ...args: any[]) {
  if (event === DevtoolsHooks.APP_INIT) {
    console.log(args)
  }
  orginEmit?.apply(this, [event, ...args])
}

export {}
