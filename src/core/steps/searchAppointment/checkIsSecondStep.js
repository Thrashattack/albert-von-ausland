import { serviceSelectionTab } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import timeout from '../../helpers/timeout.js';

const checkIsSecondStep = async (driver) => {
  try {
    await wait.lg();
    const secondStep = await driver.get(serviceSelectionTab, timeout());
    return await secondStep.evaluate((tab) => tab.innerText === 'Service selection');
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default checkIsSecondStep;
