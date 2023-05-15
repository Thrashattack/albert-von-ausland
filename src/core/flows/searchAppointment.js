import bookAppointment from '../steps/searchAppointment/bookAppointment.js';
import acceptTermsAndConditions from '../steps/searchAppointment/acceptTermsAndConditions.js';
import chooseCitizenship from '../steps/searchAppointment/chooseCitizenship.js';
import chooseNumberOfPeople from '../steps/searchAppointment/chooseNumberOfPeople.js';
import chooseDesiredService from '../steps/searchAppointment/chooseDesiredService.js';
import choosePurpose from '../steps/searchAppointment/choosePurpose.js';
import chooseTypeOfApplication from '../steps/searchAppointment/chooseTypeOfApplication.js';
import checkSlotsAvailable from '../steps/searchAppointment/checkSlotsAvailable.js';
import chooseIsLivingAlone from '../steps/searchAppointment/chooseIsLivingAlone.js';

const searchAppointment = async (driver, newPage) => {
  const state = {
    retries: 0,
    noSlotsAvailable: true,
    page: driver,
  };

  while (state.noSlotsAvailable) {
    try {
      await bookAppointment(state.page);
      await acceptTermsAndConditions(state.page);
      await chooseCitizenship(state.page);
      await chooseNumberOfPeople(state.page);
      await chooseIsLivingAlone(state.page);
      await chooseDesiredService(state.page);
      await choosePurpose(state.page);
      await chooseTypeOfApplication(state.page);
      state.noSlotsAvailable = await checkSlotsAvailable(state.page);
      state.retries += 1;
      console.log(`No slots available. Retrying... (${state.retries})`);
    } catch (error) {
      state.retries += 1;
      state.page = newPage();
      console.log(error);
    }
  }

  return state;
};

export default searchAppointment;
