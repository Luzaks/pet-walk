const footerHelper = (prop, svgState, state, comparsion) => {
  if (prop === svgState || prop === state || prop === comparsion) return '#1D6CE3';
  return '#E5E6E8';
};

export default footerHelper;
