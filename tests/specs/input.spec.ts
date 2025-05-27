import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import TextBox from '../page/input.page';

test.beforeEach('login to application', async ({ page }) => {

    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard("Input")).toHaveText('Input');
    await textBox.navigateToMenu(" Edit ");
    await expect(textBox.dashboardTitle).toHaveText("Input");


})

test('fill fullname', async ({ page }) => {
    const fullname = faker.person.fullName();
    const textBox = new TextBox(page);
    const fullnameTextBox = textBox.inputTextBoxByID("#fullName")
    await fullnameTextBox.fill(fullname);
    await expect(fullnameTextBox).toHaveValue(fullname);

})

test('append text', async ({ page }) => {
    const textBox = new TextBox(page);
    await textBox.appendingText("person");
    await expect(textBox.inputTextBoxByID("#join")).toHaveValue("I am good person");
})

test('check inside the text', async ({ page }) => {
    const textBox = new TextBox(page);
    const textBoxValue = textBox.inputTextBoxByID("#getMe");
    // const value = await textBoxValue.inputValue();
    await expect(textBoxValue).toHaveValue("ortonikc");
})

test('clear the text', async ({ page }) => {
    const textBox = new TextBox(page);
    const textBoxValue = textBox.inputTextBoxByID("#clearMe")
    await textBoxValue.clear();
    await expect(textBoxValue).toHaveValue("");
})

test('check textbox is editable or not', async ({ page }) => {
    const textBox = new TextBox(page);
    const textBoxLocator = textBox.inputTextBoxByID("#noEdit");
    await expect(textBoxLocator).toBeDisabled()
})

test('check testbox is read only or not', async ({ page }) => {
    const textBox = new TextBox(page);
    const textBoxLocator = textBox.inputTextBoxByID("#dontwrite");
    await expect(textBoxLocator).not.toBeEditable()
})