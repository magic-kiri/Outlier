import { expect, test } from '@playwright/experimental-ct-react17'
import { initMockServer } from './initMockServer'
import { questions } from './mock-data'
import App from '../src/App'

initMockServer(questions)
test.beforeEach(async ({ page, mount }) => {
  await page.goto('http://localhost:3100/')
  await mount(<App />)
})

test.describe('Score bar loads properly', () => {
  test('Score initially loads properly', async ({ page }) => {
    const scoreTitle = await page.getByTestId('score-title').innerText()
    expect(scoreTitle).toBe(`Score: 0%\nMax Score: 100%`)
  })

  test('Score loads properly after a correct answer', async ({ page }) => {
    const correctChoice = page.getByRole('button', { name: 'Dirk the Daring' })
    await correctChoice.click()

    const scoreTitle = await page.getByTestId('score-title').innerText()
    expect(scoreTitle).toBe(`Score: 100%\nMax Score: 100%`)
  })

  test('Score loads properly after a wrong answer', async ({ page }) => {
    const correctChoice = page.getByRole('button', { name: 'Arthur' })
    await correctChoice.click()

    const scoreTitle = await page.getByTestId('score-title').innerText()
    expect(scoreTitle).toBe(`Score: 0%\nMax Score: 50%`)
  })
})
