import { Page, Locator } from "@playwright/test";

export default class BasePage {
  page: Page;
  wait: number;
  constructor(page: Page) {
    this.page = page;
    this.wait = 5000;
  }

  async homePage(): Promise<void> {
    await this.page.goto("https://solicitudes.onrender.com/home/");
  }

  async logoff(): Promise<void> {
    const logOutButton: Locator = this.page.locator("text=Cerrar sesión");

    await logOutButton.click();
  }
}
