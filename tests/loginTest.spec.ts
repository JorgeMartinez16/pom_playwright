import { test, expect, Page } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import BasePage from "../pages/basePage";

type Pagina = {
  page: Page;
  user?: string;
};

test.describe("Login test", () => {
  let basePage: BasePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    loginPage = new LoginPage(page);
    await basePage.homePage();
  });

  test("should login with credentials", async ({ page }: Pagina) => {
    await test.step("valid credentials", async () => {
      //Given
      const username = "analistaaco@gmail.com";
      const password = "1";
    });

    await test.step("Act: Login with valid credentials", async () => {
      // When
      await loginPage.login("analistaaco@gmail.com", "1");
    });

    await test.step("Verifylogged in user", async () => {
      // Then
      await expect(
        page.locator('button.ant-btn >> text=Analista Acometida')
      ).toBeVisible({ timeout: 10000 });
      
    });
  });

  //Asi si tuviera un fixture con los usuarios validos en un json
  /* test('should login with valid credentials', async ( { page }) => {
        await loginPage.login('validUsername', 'validPassword');
        const loggedUser = await page.locator('#nameofuser').textContent();
        expect(loggedUser).toBe('validUsername');
    }) */
});
