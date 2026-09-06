const { chromium } = require('playwright');
const path = require('path');

const ARTIFACT_DIR = "C:\\Users\\user\\.gemini\\antigravity-cli\\brain\\a13e81e8-90bf-4c0c-8bdf-f168285bd1dc";

(async () => {
  console.log("Launching browser with msedge...");
  let browser;
  try {
    browser = await chromium.launch({ headless: true, channel: 'msedge' });
  } catch (e) {
    browser = await chromium.launch({ headless: true });
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:5173...");
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // 1. Light Mode Hero
  console.log("Capturing Light Mode Hero...");
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'nexusdev_hero_light.png'),
    fullPage: false
  });

  // 2. Toggle to Dark Mode
  console.log("Toggling to Dark Mode...");
  const themeBtn = page.locator('header button').first();
  await themeBtn.click();
  await page.waitForTimeout(600);

  // Capture Dark Mode Hero
  console.log("Capturing Dark Mode Hero...");
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'nexusdev_hero_dark.png'),
    fullPage: false
  });

  // 3. Dark Mode Services
  console.log("Capturing Dark Mode Services...");
  const servicesSec = page.locator('#services');
  await servicesSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'nexusdev_services_dark.png'),
    fullPage: false
  });

  // 4. Dark Mode Work Grid
  console.log("Capturing Dark Mode Work Grid...");
  const workSec = page.locator('#work');
  await workSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'nexusdev_work_dark.png'),
    fullPage: false
  });

  // 5. Open Case Study Modal in Dark Mode
  console.log("Opening Case Study Modal...");
  const firstCard = page.locator('#work .group').first();
  await firstCard.click();
  await page.waitForTimeout(800);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'nexusdev_modal_dark.png'),
    fullPage: false
  });

  // Close modal via Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  // 6. Process Section
  console.log("Capturing Process Roadmap...");
  const processSec = page.locator('#process');
  await processSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'nexusdev_process_dark.png'),
    fullPage: false
  });

  // 7. Dark Mode Contact Section
  console.log("Capturing Dark Mode Contact...");
  const contactSec = page.locator('#contact');
  await contactSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, 'nexusdev_contact_dark.png'),
    fullPage: false
  });

  console.log("Comprehensive visual capture complete!");
  await browser.close();
})();
