import { test, expect } from '@playwright/test';

const times = 30;
const delay = 400;

test('React', async ({ page }) => {
  await page.goto('http://localhost:8080/react');
  const input = page.locator('input');
  await expect(input).toBeEnabled();

  const timer = Date.now()
  for (let i = 0; i < times; i++) {
    await input.type('ball', { delay });
    const mark = page.locator('mark').first();
    await expect(mark).toHaveText('Ball');
    await input.fill('');
  }
  console.log(`React: ${Date.now() - timer}ms`);
});

test('Vue', async ({ page }) => {
  await page.goto('http://localhost:8080/vue');
  const input = page.locator('input');
  await expect(input).toBeEnabled();

  const timer = Date.now()
  for (let i = 0; i < times; i++) {
    await input.type('ball', { delay });
    const mark = page.locator('mark').first();
    await expect(mark).toHaveText('Ball');
    await input.fill('');
  }
  console.log(`Vue: ${Date.now() - timer}ms`);
});
