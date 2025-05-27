import { test, expect } from '@playwright/test'
import TextBox from '../page/input.page';
import ElementsPage from '../page/elements.page';


test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Elements')).toHaveText('Elements');
    await textBox.navigateToMenu(" Find Elements ");
    await expect(textBox.dashboardTitle).toHaveText("Elements");

})

test('check image visibility', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.enterInTextbox.fill("shamapar");
    await elementsPage.searchButton.click()

    await expect(elementsPage.image).toBeVisible();
    await elementsPage.allRepository();

    expect((await elementsPage.allRepository()).length).toEqual(6);
})