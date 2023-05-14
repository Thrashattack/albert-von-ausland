const {
  RETRY_INTERVAL,
} = process.env;

export default {
  timeout: RETRY_INTERVAL ?? 5000,
};
