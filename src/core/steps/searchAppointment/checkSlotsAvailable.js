import { errorSelector } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import timeout from '../../helpers/timeout.js';

const checkSlotsAvailable = async (driver) => {
  try {
    await driver.getPath(errorSelector, timeout);
    await wait.custom(timeout.timeout);
    return true;
  } catch (error) {
    return false;
  }
};

export default checkSlotsAvailable;
