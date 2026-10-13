import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk'

// Browser telemetry (page views, web vitals, JS errors) to the homelab's
// Grafana stack: Alloy faro.receiver at faro.tkuipers.ca -> Loki.
export default defineNuxtPlugin((nuxtApp) => {
  const faro = initializeFaro({
    url: 'https://faro.tkuipers.ca/collect',
    app: { name: 'tkuipers.ca', environment: 'production' },
    instrumentations: getWebInstrumentations({ captureConsole: true }),
  })

  // client-side navigation: one view per page
  nuxtApp.$router.afterEach((to) => {
    faro.api.setView({ name: to.path })
    faro.api.pushEvent('page_view', { path: to.path })
  })
})
