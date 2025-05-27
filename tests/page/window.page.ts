import { Page } from '@playwright/test'

class WindowPage {
    page: Page
    constructor(page: Page) {
        this.page = page

    }

    get newHomeButton() {
        return this.page.getByRole('button', { name: 'Goto Home Open muiltple windows' });
    }


}
export default WindowPage;