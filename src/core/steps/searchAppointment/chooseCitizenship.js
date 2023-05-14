import { citizenshipSelector } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import timeout from '../../helpers/timeout.js';

const { CITIZENSHIP } = process.env;

const chooseCitizenship = async (driver) => {
  const citizenshipButton = await driver.getPath(citizenshipSelector, timeout);
  await citizenshipButton.click();
  await citizenshipButton.type(CITIZENSHIP);
  await citizenshipButton.type('Enter');
  await wait.xs();
};

export default chooseCitizenship;
