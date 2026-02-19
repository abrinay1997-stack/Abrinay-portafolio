
import { test, expect } from '@playwright/test';

test('verify animations and effects', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000); // Wait for entry animations

  // Check if Hero title spans are present
  const spans = page.locator('h1.brand-reveal span');
  const count = await spans.count();
  console.log(`Hero title characters: ${count}`);
  expect(count).toBeGreaterThan(0);

  // Take screenshot of Hero
  await page.screenshot({ path: 'verification/final_hero.png' });

  // Scroll to Catalog
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/final_catalog.png' });

  // Navigate to Biography
  await page.click('button:has-text("Biografía")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/final_biography.png' });
});
