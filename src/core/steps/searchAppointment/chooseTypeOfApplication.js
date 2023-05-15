import wait from '../../helpers/wait.js';
import xpathContains from '../../helpers/xpathContains.js';
import timeout from '../../helpers/timeout.js';

const chooseTypeOfApplication = async (driver) => {
  const { TYPE_OF_APPLICATION } = process.env;
  const typeOfApplication = xpathContains('label', TYPE_OF_APPLICATION);
  await driver.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await driver.mouse.move(Math.random() * 1000, Math.random() * 1000);
  await driver.mouse.move(Math.random() * 1000, Math.random() * 1000);
  await driver.mouse.move(Math.random() * 1000, Math.random() * 1000);
  await driver.mouse.move(Math.random() * 1000, Math.random() * 1000);
  const typeOfApplicationButton = await driver.getPath(typeOfApplication, timeout());
  await typeOfApplicationButton.click();
  await driver.evaluate(() => window.scrollTo(0, 0));
  await wait.lg();
};

export default chooseTypeOfApplication;
