import { test } from '@playwright/experimental-ct-react17'

export const initMockServer = (body) => {
  test.beforeEach(({ context }) => {
    context.route('**/questions', async (route) => {
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(body)
      })
    })
  })
}
