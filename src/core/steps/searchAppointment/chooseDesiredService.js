import wait from '../../helpers/wait.js';
import xpathContains from '../../helpers/xpathContains.js';
import timeout from '../../helpers/timeout.js';

const chooseDesiredService = async (driver) => {
  const { DESIRED_SERVICE } = process.env;
  const desiredService = xpathContains('p', DESIRED_SERVICE);
  const desiredServiceButton = await driver.getPath(desiredService, timeout());
  await desiredServiceButton.click();
  await wait.xs();
};

export default chooseDesiredService;
