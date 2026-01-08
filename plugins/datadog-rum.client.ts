import { datadogRum } from '@datadog/browser-rum'

export default defineNuxtPlugin(() => {
  datadogRum.init({
    applicationId: 'ddd9d844-0a7d-4fca-a70a-b35112e06119',
    clientToken: 'pub8169f255b868b6661f67a254cec17b50',
    site: 'us5.datadoghq.com',
    service: 'tkuipers.ca',
    env: 'prod',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 40,
    trackBfcacheViews: true,
    defaultPrivacyLevel: 'mask-user-input',
  })
})

