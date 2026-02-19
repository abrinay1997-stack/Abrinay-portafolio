
import { test, expect } from '@playwright/test';

const URL = 'http://localhost:3002/Abrinay-portafolio/';

test.describe('QA Integral - Fase 14', () => {

  test('Metadatos y SEO', async ({ page }) => {
    await page.goto(URL);

    // Title
    await expect(page).toHaveTitle('ABRINAY');

    // Meta Description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('Portafolio profesional de Abrinay');

    // JSON-LD
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    const data = JSON.parse(jsonLd || '{}');
    expect(data['@type']).toBe('Person');
    expect(data['name']).toBe('Brian Joel Carvajal Mahecha');
  });

  test('Accesibilidad Básica', async ({ page }) => {
    await page.goto(URL);

    // Check for focus-visible styles (indirectly by checking if focusable elements have reasonable tags)
    const buttons = page.locator('button');
    const links = page.locator('a');

    expect(await buttons.count()).toBeGreaterThan(0);
    expect(await links.count()).toBeGreaterThan(0);

    // Aria labels in Navbar
    const menuButton = page.locator('button[aria-label]');
    expect(await menuButton.count()).toBeGreaterThan(0);
  });

  test('Navegación y Funcionalidad', async ({ page }) => {
    await page.goto(URL);

    // Home sections
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('#work')).toBeVisible();

    // Navigation to Biography
    // Need to open menu first
    await page.click('button[aria-label="Abrir menú"]');
    await page.click('button:has-text("BIOGRAFÍA")');

    // Wait for transition
    await page.waitForTimeout(1000);
    await expect(page.locator('#biography-page')).toBeVisible();

    // Navigation back to Home
    await page.click('button[aria-label="Ir al inicio"]');
    await page.waitForTimeout(1000);
    await expect(page.locator('#hero')).toBeVisible();
  });

  test('Visuales y Animaciones', async ({ page }) => {
    await page.goto(URL);

    // Spotlight check (CSS variable check)
    const body = page.locator('body');
    // Move mouse and check if variables are set
    await page.mouse.move(100, 100);
    const mouseX = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--mouse-x'));
    expect(mouseX).not.toBe('50%');

    // Screenshot of Hero for visual regression
    await page.screenshot({ path: 'verification/qa_hero_desktop.png' });

    // Mobile view
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: 'verification/qa_hero_mobile.png' });
  });

});
