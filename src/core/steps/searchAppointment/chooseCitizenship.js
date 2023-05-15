import { citizenshipSelector } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import timeout from '../../helpers/timeout.js';

const chooseCitizenship = async (driver) => {
  const { CITIZENSHIP } = process.env;
  const citizenshipButton = await driver.getPath(citizenshipSelector, timeout());
  await citizenshipButton.click();
  await citizenshipButton.type(CITIZENSHIP);
  await driver.keyboard.press('Enter');
  await wait.sm();
};

export default chooseCitizenship;
