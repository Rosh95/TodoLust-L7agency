function secondsToTime(secs) {
  const hours = Math.floor(secs / 3600);

  const divisorForMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  const obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
}

export default secondsToTime;
