import { acceptTermsSelector, nextButtonSelector } from '../../helpers/selectors.js';
import timeout from '../../helpers/timeout.js';
import wait from '../../helpers/wait.js';
import xpathContains from '../../helpers/xpathContains.js';

const acceptTermsAndConditions = async (driver) => {
  const nextButtonPath = xpathContains('button', nextButtonSelector);
  const acceptTermsCheckbox = await driver.get(acceptTermsSelector, timeout());
  const nextButton = await driver.getPath(nextButtonPath, timeout());

  await acceptTermsCheckbox.click();
  await nextButton.click();
  await driver.waitForNavigation();
  await wait.sm();
};

export default acceptTermsAndConditions;
