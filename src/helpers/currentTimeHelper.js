const currentTimeHelper = () => {
  const now = new Date();
  if (now.getMinutes() < 10) {
    return `${now.getHours()}:0${now.getMinutes()}`;
  }
  return `${now.getHours()}:${now.getMinutes()}`;
};

export default currentTimeHelper;
