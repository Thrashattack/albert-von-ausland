import wait from '../../helpers/wait.js';
import xpathContains from '../../helpers/xpathContains.js';
import timeout from '../../helpers/timeout.js';

const { PURPOSE } = process.env;

const purpose = xpathContains('p', PURPOSE);

const choosePurpose = async (driver) => {
  const purposeButton = await driver.getPath(purpose, timeout);
  await purposeButton.click();
  await wait.xs();
};

export default choosePurpose;
