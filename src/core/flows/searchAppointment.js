import bookAppointment from '../steps/searchAppointment/bookAppointment.js';
import acceptTermsAndConditions from '../steps/searchAppointment/acceptTermsAndConditions.js';
import chooseCitizenship from '../steps/searchAppointment/chooseCitizenship.js';
import chooseNumberOfPeople from '../steps/searchAppointment/chooseNumberOfPeople.js';
import chooseDesiredService from '../steps/searchAppointment/chooseDesiredService.js';
import choosePurpose from '../steps/searchAppointment/choosePurpose.js';
import chooseTypeOfApplication from '../steps/searchAppointment/chooseTypeOfApplication.js';
import checkSlotsAvailable from '../steps/searchAppointment/checkSlotsAvailable.js';

const searchAppointment = async (driver) => {
  const state = {
    retries: 0,
    noSlotsAvailable: true,
  };
  while (state.noSlotsAvailable) {
    await bookAppointment(driver);
    await acceptTermsAndConditions(driver);
    await chooseCitizenship(driver);
    await chooseNumberOfPeople(driver);
    await chooseDesiredService(driver);
    await choosePurpose(driver);
    await chooseTypeOfApplication(driver);

    state.noSlotsAvailable = await checkSlotsAvailable(driver);
    state.retries += 1;
    console.log(`No slots available. Retrying... (${state.retries})`);
  }
};

export default searchAppointment;
