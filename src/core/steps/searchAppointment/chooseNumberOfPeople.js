import { numberOfPeopleSelector } from '../../helpers/selectors.js';
import wait from '../../helpers/wait.js';
import timeout from '../../helpers/timeout.js';

const chooseNumberOfPeople = async (driver) => {
  const { NUMBER_OF_PEOPLE } = process.env;
  const numberOfPeopleButton = await driver.getPath(numberOfPeopleSelector, timeout());
  await numberOfPeopleButton.click();
  numberOfPeopleButton.type(NUMBER_OF_PEOPLE);
  await numberOfPeopleButton.type('Enter');
  await wait.xs();
};

export default chooseNumberOfPeople;
