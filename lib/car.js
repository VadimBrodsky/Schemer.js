function car(list) {
  return Array.isArray(list) && list.length > 0 ? list[0] : null;
}

module.exports = car;
