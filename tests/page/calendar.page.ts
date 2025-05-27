import { Page } from '@playwright/test'

class CalendarPage {
    page: Page
    constructor(page: Page) {
        this.page = page

    }

    get calendar() {
        return this.page.locator("#birthday");
    }
}
export default CalendarPage;