import { test, expect } from '@playwright/test';

test('depuis la notion de saponification vers la recette', async ({ page }) => {
  await page.goto('/articles/notion-saponification');
  const journey = page.getByRole('complementary', { name: 'Utiliser cette notion chez vous' });
  await journey.getByRole('link', { name: /Suivre la recette de savon/ }).click();
  await expect(page).toHaveURL(/\/articles\/savon-surgras-saponification$/);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('le filtre de matériel réduit les guides et se réinitialise', async ({ page }) => {
  await page.goto('/bien-sequiper');
  await expect(page.locator('.equipment-card')).toHaveCount(6);
  await page.getByRole('button', { name: 'Faire un savon', exact: true }).click();
  await expect(page.locator('.equipment-card')).toHaveCount(3);
  await expect(page.getByRole('button', { name: 'Faire un savon', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('status')).toContainText('3 guides');
  await page.getByRole('button', { name: 'Tout le matériel' }).click();
  await expect(page.locator('.equipment-card')).toHaveCount(6);
});

test('une seule FAQ, utilisable au clavier', async ({ page }) => {
  await page.goto('/articles/levain-ne-monte-pas');
  await expect(page.locator('.faq-section')).toHaveCount(1);
  const question = page.locator('.faq-item summary').first();
  await question.focus();
  await question.press('Enter');
  await expect(page.locator('.faq-item').first()).toHaveAttribute('open', '');
});

for (const route of ['/', '/recettes', '/bien-sequiper', '/articles/notion-saponification', '/articles/confiture-sans-cuisson-crufiture']) {
  test(`rendu et largeur : ${route}`, async ({ page }, testInfo) => {
    const errors=[]; page.on('pageerror', e=>errors.push(e.message));
    await page.goto(route);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toHaveCount(1);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflow).toBe(false);
    expect(errors).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath('page.png'), fullPage: true });
  });
}
