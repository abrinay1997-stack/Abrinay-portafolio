
import { test, expect } from '@playwright/test';

test('audio toggle icon only and default active', async ({ page }) => {
  // Go to the dev server
  await page.goto('http://localhost:3001/Abrinay-portafolio/');

  // Check if Audio Toggle is present (should be active/Live by default, so looking for the specific style)
  const audioToggle = page.locator('button[aria-label="Desactivar sonido"]');
  await expect(audioToggle).toBeVisible();

  // It should NOT have the text labels anymore
  const offText = page.locator('text=Audio_Off');
  await expect(offText).not.toBeVisible();
  const liveText = page.locator('text=Audio_Live');
  await expect(liveText).not.toBeVisible();

  // Click to mute
  await audioToggle.click();

  // Verify it changed aria-label
  const mutedToggle = page.locator('button[aria-label="Activar sonido"]');
  await expect(mutedToggle).toBeVisible();

  // Take a screenshot of the new icon-only state
  await page.screenshot({ path: 'verification/audio_toggle_icon_only.png' });
});
