import { test, expect } from '@playwright/test'
import TextBox from '../page/input.page';
import WaitPage from '../page/wait.page';



test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Waits')).toHaveText('Waits');
    await textBox.navigateToMenu(" Timeout ");
    await expect(textBox.dashboardTitle).toHaveText("Wait");

})

test('wait for simple Alert', async ({ page }) => {
    const waitPage = new WaitPage(page);

    page.on('dialog', dialog => {
        dialog.accept()
    })
    await waitPage.simpleAlertButton.click()
    await page.waitForEvent("dialog");
})