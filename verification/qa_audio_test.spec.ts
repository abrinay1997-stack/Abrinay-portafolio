
import { test, expect } from '@playwright/test';

test('audio toggle and scroll interaction', async ({ page }) => {
  // Go to the dev server
  await page.goto('http://localhost:3001/Abrinay-portafolio/');

  // Check if Audio Toggle is present
  const audioToggle = page.locator('button:has-text("Audio_Off")');
  await expect(audioToggle).toBeVisible();

  // Click to activate audio
  await audioToggle.click();

  // Verify it changed to Audio_Live
  const liveToggle = page.locator('button:has-text("Audio_Live")');
  await expect(liveToggle).toBeVisible();

  // Scroll to trigger transitions
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 2000));
  await page.waitForTimeout(500);

  // Take a screenshot of the active state
  await page.screenshot({ path: 'verification/audio_toggle_active.png' });
});
