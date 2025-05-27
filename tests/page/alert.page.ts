import { Page } from '@playwright/test'

class AlertPage {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    get acceptAlert() {
        return this.page.getByRole('button', { name: "Simple Alert" });
    }

    get dismissAlert() {
        return this.page.getByRole('button', { name: "confirm" })
    }

    get promptAlert() {
        return this.page.getByRole('button', { name: "Prompt Alert" })
    }
    get successNotification() {
        return this.page.locator('#myName')
    }
}
export default AlertPage;