const wait = async (ms) => new Promise((resolve) => { setTimeout(resolve, ms); });

export default {
  xs: () => wait(1000),
  sm: () => wait(3000),
  md: () => wait(5000),
  lg: () => wait(7000),
  custom: wait,
};
