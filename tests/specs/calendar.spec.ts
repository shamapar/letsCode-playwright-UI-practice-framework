import { test, expect } from '@playwright/test';
import TextBox from '../page/input.page';
import CalendarPage from '../page/calendar.page';


test.beforeEach('login to application', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const textBox = new TextBox(page);
    await expect(textBox.menuTitleInDashboard('Calendar')).toHaveText('Calendar');
    await textBox.navigateToMenu("  Date & Time  ");
    await expect(textBox.dashboardTitle).toHaveText("Date Picker");

})

test('pick a date', async ({ page }) => {
    const calendarPage = new CalendarPage(page);
    await calendarPage.calendar.fill("1977-07-10")
})
