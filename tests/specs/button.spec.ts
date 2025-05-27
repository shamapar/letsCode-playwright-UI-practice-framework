import { test, expect } from '@playwright/test';
import TextBox from '../page/input.page';
import ButtonPage from '../page/button.page';

test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Button')).toHaveText('Button');
    await textBox.navigateToMenu(" Click ");
    await expect(textBox.dashboardTitle).toHaveText("Button");

})

test('goto home', async ({ page }) => {
    const buttonPage = new ButtonPage(page);
    await buttonPage.homeButton.click();
    const appUrl = "https://letcode.in/"
    await expect(page).toHaveURL(appUrl);
    await page.goBack();
    await expect(page).toHaveURL(appUrl.concat("button"));

})

test('disabled button', async ({ page }) => {
    const buttonPage = new ButtonPage(page);
    await expect(buttonPage.disabledButton).toBeDisabled()
})

test('hold button', async ({ page }) => {
    const buttonPage = new ButtonPage(page);
    await buttonPage.holdButton.click({ delay: 300 });
    await expect(buttonPage.holdButton).not.toBeDisabled()
})


