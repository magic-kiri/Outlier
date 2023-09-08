import { expect, test } from '@playwright/experimental-ct-react17'
import { initMockServer } from './initMockServer'
import { questions } from './mock-data'
import App from '../src/App'

initMockServer(questions)

test.describe('Header works properly', () => {
  test.beforeEach(async ({ page, mount }) => {
    await page.goto('http://localhost:3100/')
    await mount(<App />)
  })

  test('Question header loads properly', async ({ page }) => {
    const title = page.getByTestId('Header-Title')
    expect(await title.innerText()).toBe('Question 1 of 2')
  })

  test('Question category loads properly', async ({ page }) => {
    const category = page.getByTestId('Question-Category')
    expect(await category.innerText()).toBe('Entertainment: Video Games')
  })

  test('Question difficulty loads properly', async ({ page }) => {
    await page.waitForSelector('.Star')
    const stars = Array.from(await page.locator('.Star').all())
    for (let i = 0; i < stars.length; i++) {
      const className = await stars[i].getAttribute('class')
      expect(className).toBe(i < 3 ? 'Star filled' : 'Star ')
    }
  })
})
