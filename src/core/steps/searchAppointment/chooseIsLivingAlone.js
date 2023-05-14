import { livingAloneSelector } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import timeout from '../../helpers/timeout.js';

const { LIVING_ALONE } = process.env;

const chooseIsLivingAlone = async (driver) => {
  const livingAloneButton = await driver.getPath(livingAloneSelector, timeout);
  await livingAloneButton.click();
  await livingAloneButton.type(LIVING_ALONE ? 'no' : 'yes');
  await livingAloneButton.type('Enter');
  await wait.xs();
};

export default chooseIsLivingAlone;
