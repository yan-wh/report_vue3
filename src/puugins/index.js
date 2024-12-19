

export const plugin = {
  install(app, option) {
    // 全局属性
    app.provide('config', window.globalConfig)
  }
}