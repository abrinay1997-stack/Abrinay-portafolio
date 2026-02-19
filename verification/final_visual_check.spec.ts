import { test, expect } from '@playwright/test';

test('verify animations and effects', async ({ page }) => {
  await page.goto('http://localhost:3001/Abrinay-portafolio/');

  // Wait for brand reveal
  await page.waitForTimeout(2000);

  // Capture Hero
  await page.screenshot({ path: 'verification/hero_final.png' });

  // Hover over a project card in Catalog
  const catalog = page.locator('section#catalog, div:has-text("Obras & Catálogo")').first();
  await catalog.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  const card = page.locator('article.glass-card').first();
  await card.hover();
  await page.mouse.move(100, 100); // Trigger spotlight movement
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'verification/catalog_hover_final.png' });
});
