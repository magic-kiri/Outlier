import { expect, test } from '@playwright/experimental-ct-react17'
import { initMockServer } from './initMockServer'
import { questions } from './mock-data'
import App from '../src/App'

initMockServer(questions)
test.beforeEach(async ({ page, mount }) => {
  await page.goto('http://localhost:3100/')
  await mount(<App />)
})

test.describe('Question Body loads properly', () => {
  test('Question description loaded properly', async ({ page }) => {
    await page.waitForSelector('.Description')
    const description = page.locator('.Description')
    const question = await description.innerText()
    expect(question).toBe(
      "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?"
    )
  })
  test('Question options loaded properly', async ({ page }) => {
    await page.waitForSelector('.ChoiceBox .GridButton')
    const options = await page.locator('.ChoiceBox .GridButton').allInnerTexts()
    expect(options.length).toBe(4)

    const questionOptions = [
      'Arthur',
      'Sir Toby Belch',
      'Guy of Gisbourne',
      'Dirk the Daring'
    ]
    questionOptions.forEach((option) =>
      expect(options.includes(option)).toBeTruthy()
    )
  })
})

test.describe('Question Body interacts properly', () => {
  test('Show proper text after clicking a correct choice', async ({ page }) => {
    const correctChoice = page.getByRole('button', { name: 'Dirk the Daring' })
    await correctChoice.click()
    const resultMessage = await page.getByTestId('result-message').innerText()
    expect(resultMessage).toBe('Correct!')
  })

  test('Show proper text after clicking a incorrect choice', async ({
    page
  }) => {
    const correctChoice = page.getByRole('button', { name: 'Arthur' })
    await correctChoice.click()
    const resultMessage = await page.getByTestId('result-message').innerText()
    expect(resultMessage).toBe('Sorry!')
  })
  test('Loads next question after clicking next question button', async ({
    page
  }) => {
    const correctChoice = page.getByRole('button', { name: 'Arthur' })
    await correctChoice.click()
    const nextButton = page.getByRole('button', { name: 'Next Question' })
    await nextButton.click()

    const title = page.getByTestId('Header-Title')
    expect(await title.innerText()).toBe('Question 2 of 2')

    const category = page.getByTestId('Question-Category')
    expect(await category.innerText()).toBe('Animals')

    const description = page.locator('.Description')
    const question = await description.innerText()
    expect(question).toBe('What is the scientific name for modern day humans?')
  })
})
