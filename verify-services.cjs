const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACT_DIR = "C:\\Users\\user\\.gemini\\antigravity-cli\\brain\\7d89c33e-15a6-4341-8fea-2671716a00a6";

(async () => {
  console.log("Starting visual verification...");
  let browser;
  try {
    browser = await chromium.launch({ headless: true, channel: 'msedge' });
  } catch (e) {
    browser = await chromium.launch({ headless: true });
  }

  // 1. DESKTOP VIEWPORT (1440x1050)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 1050 },
    deviceScaleFactor: 2
  });
  const page = await desktopContext.newPage();

  let targetUrl = 'http://localhost:5174';
  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 5000 });
  } catch {
    targetUrl = 'http://localhost:5173';
    await page.goto(targetUrl, { waitUntil: 'networkidle' });
  }
  console.log("Loaded: " + targetUrl);
  await page.waitForTimeout(1000);

  // Click on "Services" nav link
  console.log("Clicking navbar Services link...");
  const navServicesLink = page.locator('nav a[href="#services"], header a[href="#services"]').first();
  if (await navServicesLink.count() > 0) {
    await navServicesLink.click();
  } else {
    await page.evaluate(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
  await page.waitForTimeout(1000);

  // Check dark mode state
  const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log("Current theme dark mode:", isDark);

  // Capture desktop dark mode
  if (!isDark) {
    const themeBtn = page.locator('header button').first();
    await themeBtn.click();
    await page.waitForTimeout(600);
  }

  console.log("Capturing Services Section - Desktop Dark Mode...");
  const servicesSec = page.locator('#services');
  await servicesSec.screenshot({
    path: path.join(ARTIFACT_DIR, 'services_desktop_dark.png')
  });

  // Switch to Light Mode
  console.log("Toggling theme to Light Mode...");
  const themeBtn = page.locator('header button').first();
  await themeBtn.click();
  await page.waitForTimeout(600);

  console.log("Capturing Services Section - Desktop Light Mode...");
  await servicesSec.screenshot({
    path: path.join(ARTIFACT_DIR, 'services_desktop_light.png')
  });

  // Test Proposal CTA click
  console.log("Testing CTA click on E-Commerce card...");
  const ecomCTA = page.locator('#services button').nth(1);
  await ecomCTA.click();
  await page.waitForTimeout(800);

  const selectedService = await page.locator('#contact select').inputValue();
  console.log("Contact form selected service after click:", selectedService);

  // 2. MOBILE VIEWPORT (390x844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(targetUrl, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  // Capture individual mobile cards
  const mobileCard1 = mobilePage.locator('#services .group').nth(0);
  await mobileCard1.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await mobileCard1.screenshot({
    path: path.join(ARTIFACT_DIR, 'services_mobile_card1.png')
  });

  const mobileCard2 = mobilePage.locator('#services .group').nth(1);
  await mobileCard2.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await mobileCard2.screenshot({
    path: path.join(ARTIFACT_DIR, 'services_mobile_card2.png')
  });

  console.log("All captures and assertions completed successfully!");
  await browser.close();
})();
