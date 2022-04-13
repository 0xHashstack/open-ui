import amplitude from "amplitude-js";

//If you only have one environment, just put the single API key
amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE_KEY, null, {
// optional configuration options
  includeUtm: true,
  includeGclid: true,
  includeReferrer: true,
});