import { expect, test } from '@playwright/test';
// npx playwright test

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to Baker');
});

test('history page starts with', async ({ page }) => {
	await page.goto('/history');
	expect(await page.textContent('h2')).toBe(' Behind the First residential college on Rice University... 🔗');
});
