import { Page } from '@playwright/test'
import { sortingTableMenu } from '../customType/sortingTableMenu';


class TablePage {

    page: Page

    constructor(page: Page) {
        this.page = page

    }

    async shoppingItemPrice() {
        const allRows = await this.page.locator("table#shopping>tbody>tr").all();
        let count: number = 0;

        for (const row of allRows) {
            const rowValue = await row.locator("td").last().innerText();
            count = count + Number(rowValue);
        }
        return count;
    }

    async markUserPresent(username: string) {

        const allRows = await this.page.locator("table[id=simpletable]>tbody>tr").all()

        for (const row of allRows) {
            const name = await row.locator("td").nth(1).innerText();
            if (name === username) {
                await row.locator("td").nth(3).locator('input').check();
            }
            else continue;
        }
    }


    async sortingByMenuName(menuName: sortingTableMenu) {

        const allMenus = await this.page.locator('table[class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"]>thead>th').all();

        for (const menu of allMenus) {
            if (await menu.innerText() == menuName) {
                await this.page.getByRole('button', { name: menuName }).click();
            }
        }
    }

    async columnList(menuName: sortingTableMenu) {

        const unSortedColumn: string[] = [];
        const allRows = await this.page.locator('table[class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"]>tr').all();

        const allMenus = await this.page.locator('table[class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"]>thead>th').all();

        let currentIndex: number = -1;

        for (let i = 0; i < allMenus.length; i++) {
            if (await allMenus[i].innerText() == menuName) {
                currentIndex = i;
            }
        }

        for (const row of allRows) {
            unSortedColumn.push(await row.locator("td").nth(currentIndex).innerText());
        }

        return unSortedColumn;
    }

    async sortingAscending(menuName: sortingTableMenu) {
        const data = await this.columnList(menuName);

        if (menuName === 'Dessert (100g)') {
            const sortingListStringTypeColumns = data.sort((data1, data2) => {
                return data1.localeCompare(data2);
            });
            return sortingListStringTypeColumns;
        }

        const sortingListNumberTypeColumns = data.sort((data1, data2) => {
            return Number(data1) - Number(data2)
        });
        return sortingListNumberTypeColumns;
    }

}
export default TablePage;