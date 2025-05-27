import { test, expect } from '@playwright/test';
import TextBox from '../page/input.page';
import AlertPage from '../page/alert.page';


test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Alert')).toHaveText('Alert');
    await textBox.navigateToMenu("Dialog");
    await expect(textBox.dashboardTitle).toHaveText("Alert");

})

test('accept the alert', async ({ page }) => {
    const alertPage = new AlertPage(page);
    page.on('dialog', async (page) => {
        await page.accept();

    })
    await alertPage.acceptAlert.click()
})

test('dismiss the alert', async ({ page }) => {
    const alertPage = new AlertPage(page);

    page.on('dialog', dialog => {
        dialog.dismiss()
        const message = dialog.message()
        console.log(message);
        expect(message).toEqual("Are you happy with LetCode?")
    })

    await alertPage.dismissAlert.click()

})

test.only('get prompt alert', async ({ page }) => {
    const alertPage = new AlertPage(page);
    page.on('dialog', dialog => {
        dialog.accept('shama')
    })
    alertPage.promptAlert.click();
    await expect(alertPage.successNotification).toHaveText("Your name is: ".concat("shama"))
})