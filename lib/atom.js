function atom(value) {
  return /\(|\)/.test(value) ? null : value;
}

module.exports = atom;
