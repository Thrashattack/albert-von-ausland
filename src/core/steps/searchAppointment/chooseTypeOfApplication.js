import { nextButtonSelector } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import xpathContains from '../../helpers/xpathContains.js';
import timeout from '../../helpers/timeout.js';

const chooseTypeOfApplication = async (driver) => {
  const { TYPE_OF_APPLICATION } = process.env;
  const typeOfApplication = xpathContains('label', TYPE_OF_APPLICATION);
  const nextButton = xpathContains('button', nextButtonSelector);
  const typeOfApplicationButton = await driver.getPath(typeOfApplication, timeout());
  await typeOfApplicationButton.click();
  await wait.sm();

  const nextButtonButton2 = await driver.getPath(nextButton, timeout());
  await nextButtonButton2.click();
  await driver.waitForNavigation();
  await wait.lg();
};

export default chooseTypeOfApplication;
