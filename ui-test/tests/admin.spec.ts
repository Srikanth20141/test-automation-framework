import { expect, test, page } from 'playwright/test';
import { chromium } from 'playwright';
//import { test } from './fixtures/login.fixture.ts';
import { type Page } from '@playwright/test';

// test.describe('test', () => {
//   test('add user', async ({ page, loginAsAdmin }) => {
//     await loginAsAdmin();
//     await expect(page).toHaveURL(/\/admin$/);
//   });
// });

// test.describe('login as admin', () => {
//   test.beforeEach(async ({ }) => {
//     const broswer = await chromium.launch();
//     const context = await broswer.newContext();
//     const page = await context.newPage();
//     // await page.goto('http://localhost:3000/login');
//   });
// });
//test

test.describe('test', () => {
  test('add user', async ({ page, Page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="username"]', 'admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/admin$/);
  });
});