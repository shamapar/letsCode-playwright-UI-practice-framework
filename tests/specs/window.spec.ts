import { test, expect } from '@playwright/test'
import TextBox from '../page/input.page';
import WindowPage from '../page/window.page';

test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Window')).toHaveText('Window');
    await textBox.navigateToMenu(" Tabs ");
    await expect(textBox.dashboardTitle).toHaveText("Windows");

})

test('checking new windows', async ({ page, context }) => {
    const windowPage = new WindowPage(page);
    await windowPage.newHomeButton.click();
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page1 = await context.newPage();
    const page2 = await context.waitForEvent('page');
    await expect(page2.locator("//h1")).toHaveText("Ready to be a Pro Engineer?");
    await page2.close()

})

