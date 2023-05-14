export default () => {
  const {
    RETRY_INTERVAL,
  } = process.env;
  return {
    timeout: RETRY_INTERVAL ?? 5000,
  };
};
