import { launch } from 'puppeteer';

const setupDriver = async () => {
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
  const browser = await launch({
    headless: false,
    args: [
      `--user-agent=${userAgent}`,
      '--no-sandbox',
      '--start-maximized',
      '--disable-dev-shm-usage',
      '--remote-allow-origins=*',
      '--disable-blink-features=AutomationControlled',
      '--disable-infobars',
      '--disable-extensions',
    ],
    ignoreDefaultArgs: ['--enable-automation'],
  });

  const page = await browser.newPage();

  // Antibot bypass
  await page.evaluateOnNewDocument((ua) => {
    Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
    Object.defineProperty(navigator, 'productSub', { get: () => '20100101' });
    Object.defineProperty(navigator, 'vendor', { get: () => '' });
    Object.defineProperty(navigator, 'oscpu', { get: () => 'Windows NT 10.0; Win64; x64' });
    const { open } = window;

    window.open = (...args) => {
      const newPage = open(...args);
      Object.defineProperty(newPage.navigator, 'userAgent', { get: () => ua });
      return newPage;
    };

    window.open.toString = () => 'function open() { [native code] }';
  }, userAgent);

  await page.setUserAgent(userAgent);

  await page.setExtraHTTPHeaders({
    'upgrade-insecure-requests': '1',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,en;q=0.8',
  });

  await page.setViewport({ width: 1920, height: 1080 });

  page.get = page.waitForSelector;
  page.getPath = page.waitForXPath;

  return page;
};

export default setupDriver;
