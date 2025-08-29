import { test as base } from '@playwright/test';

type AuthFixtures = {
  loginAsAdmin: () => Promise<void>;
};

export const test = base.extend<AuthFixtures>({
  loginAsAdmin: async ({ page }, use) => {
    const login = async () => {
      await page.goto('/');
      await page.getByPlaceholder('Username').fill('Admin');
      await page.getByPlaceholder('Password').fill('admin123');
      await page.getByRole('button', { name: 'Login' }).click();
    };
    await login();
    await use(login);
  },
});