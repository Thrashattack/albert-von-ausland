import { bookAppointmentSelector } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import timeout from '../../helpers/timeout.js';

const bookAppointment = async (driver) => {
  const { TARGET_URL } = process.env;

  await driver.evaluate(() => { window.removeEventListener('beforeunload', window.handleBeforeUnload); });
  await driver.goto(TARGET_URL);

  const bookAppointmentButton = await driver.get(bookAppointmentSelector, timeout());
  await bookAppointmentButton.click();
  await driver.waitForNavigation();
  await wait.sm();
};

export default bookAppointment;
