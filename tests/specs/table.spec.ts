import { test, expect } from '@playwright/test';
import TextBox from '../page/input.page';
import TablePage from '../page/table.page';


test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Table').first()).toHaveText('Table');
    await page.getByRole('link', { name: " Table " }).first().click()
    await expect(textBox.dashboardTitle).toHaveText("Table");

})

test('adding my shopping list expense', async ({ page }) => {
    const tablePage = new TablePage(page);
    expect(await tablePage.shoppingItemPrice()).toEqual(858)
})

test.only('mark user as present from Simple table', async ({ page }) => {
    const tablePage = new TablePage(page);
    await tablePage.markUserPresent("Raj")
    await page.pause();
    await expect(page.locator('//input[@class="qe"]')).toBeChecked()
})

test('Sorting table', async ({ page }) => {

    const tablePage = new TablePage(page);

    const menuName = "Dessert (100g)";

    await tablePage.sortingByMenuName(menuName);
    const ascendingSortedList = await tablePage.sortingAscending(menuName);

    expect(ascendingSortedList).toEqual(await tablePage.columnList(menuName));

    await tablePage.sortingByMenuName(menuName);
    expect(ascendingSortedList.reverse()).toEqual(await tablePage.columnList(menuName));
})