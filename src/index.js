// eslint-disable-next-line import/no-unresolved
import { playAudioFile } from 'audic';
import { config } from 'dotenv';
import searchAppointment from './core/flows/searchAppointment.js';
import setupDriver from './config/setupDriver.js';

config();
const driver = await setupDriver();

await searchAppointment(driver);

console.log('Appointment Found!');
await playAudioFile('./src/assets/finallyFound.mp3');
