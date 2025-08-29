import { test } from './fixtures/login.fixture.ts';

test.describe('test', () => {

  test('add user', async ({ page, loginAsAdmin }) => {
    await loginAsAdmin();
  });
});