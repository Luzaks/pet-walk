const footerHelper = (prop, svgState, state) => {
  if (prop === svgState || prop === state) return '#1D6CE3';
  return '#E5E6E8';
};

export default footerHelper;
