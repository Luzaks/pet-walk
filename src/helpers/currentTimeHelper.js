const currentTimeHelper = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
};

export default currentTimeHelper;
