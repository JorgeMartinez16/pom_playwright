import { promises } from "dns";
import BasePage from "./basePage";
import { Page, Locator} from '@playwright/test'


class loginPage extends BasePage{
    private usernameBy: Locator;
    private passwordBy: Locator;
    private loginButtonBy: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameBy = this.page.locator("#login_email");
        this.passwordBy = this.page.locator("#login_password");
        /* this.loginButtonBy = this.page.locator('//button[contains(text(), "Ingresar")]'); */
        this.loginButtonBy = page.locator('button:has-text("Ingresar")');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameBy.fill(username);
        await this.passwordBy.fill(password);
        await this.loginButtonBy.click();
    }
  
}

export default loginPage;