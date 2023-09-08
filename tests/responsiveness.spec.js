import { expect, test } from '@playwright/experimental-ct-react17'
import { initMockServer } from './initMockServer'
import { questions } from './mock-data'
import App from '../src/App'

initMockServer(questions)
test.beforeEach(async ({ page, mount }) => {
  await page.goto('http://localhost:3100/')
  await mount(<App />)
})

test.describe('Responsiveness works properly for mobile', () => {
  test.use({
    viewport: {
      width: 550,
      height: 700
    }
  })
  test('Question options appear vertically in moblie', async ({ page }) => {
    await page.waitForSelector('.ChoiceBox .GridButton')
    const options = await page.locator('.ChoiceBox .GridButton').allInnerTexts()
    const answerBox = page.locator('.AnswerBox')

    const aboveItemsCount = await answerBox
      .locator(
        `.ChoiceBox:above(div:has-text("${options[options.length - 1]}"))`
      )
      .count()
    const leftItemCount = await answerBox
      .locator(
        `.ChoiceBox:left-of(div:has-text("${options[options.length - 1]}"))`
      )
      .count()
    expect(aboveItemsCount).toBe(3)
    expect(leftItemCount).toBe(0)
  })
})

test.describe('Responsiveness works properly for desktop', () => {
  test('Question options appear horizontaly in desktop', async ({ page }) => {
    await page.waitForSelector('.ChoiceBox .GridButton')
    const options = await page.locator('.ChoiceBox .GridButton').allInnerTexts()
    const answerBox = page.locator('.AnswerBox')

    const aboveItemsCount = await answerBox
      .locator(
        `.ChoiceBox:above(div:has-text("${options[options.length - 1]}"))`
      )
      .count()
    const leftItemCount = await answerBox
      .locator(
        `.ChoiceBox:left-of(div:has-text("${options[options.length - 1]}"))`
      )
      .count()
    expect(aboveItemsCount).toBe(2)
    expect(leftItemCount).toBe(2)
  })
})
