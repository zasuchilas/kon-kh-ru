const clearHtml = dirtyHtml => {
  return dirtyHtml.replace(/<p><\/p>/g, '');
};

module.exports = {
  clearHtml,
};
