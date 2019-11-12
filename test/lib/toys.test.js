const { equal, deepEqual } = require('assert');
const atom = require('../../lib/atom');
const list = require('../../lib/list');
const car = require('../../lib/car');

module.exports = {
  atom() {
    equal(atom('atom'), 'atom');
    equal(atom('turkey'), 'turkey');
    equal(atom(1492), 1492);
    equal(atom('u'), 'u');
    equal(atom('*abc$'), '*abc$');
    equal(atom('(atom)'), null);
  },

  list() {
    const a = atom;
    const l = list;

    deepEqual(l(a('atom')), ['atom']);
    deepEqual(l(a('atom'), a('turkey'), a('or')), ['atom', 'turkey', 'or']);
    deepEqual(l(l(a('atom'), a('turkey')), a('or')), [['atom', 'turkey'], 'or']);
    deepEqual(l(a('x'), a('y'), a('z')), ['x', 'y', 'z']);
    deepEqual(l(l(a('x'), a('y')), a('z')), [['x', 'y'], 'z']);
    deepEqual(l(a('how'), a('are'), a('you'), a('doing'), a('so'), a('far')), [
      'how',
      'are',
      'you',
      'doing',
      'so',
      'far',
    ]);
    equal(l(a('how'), a('are'), a('you'), a('doing'), a('so'), a('far')).length, 6);
    deepEqual(
      l(l(l(a('how')), a('are')), l(l(a('you')), l(a('doing'), a('so'))), a('far')),
      [[['how'], 'are'], [['you'], ['doing', 'so']], 'far'],
    );
    equal(
      l(l(l(a('how')), a('are')), l(l(a('you')), l(a('doing'), a('so'))), a('far'))
        .length,
      3,
    );
    deepEqual(l(), []);
    deepEqual(l(l(), l(), l()), [[], [], []]);
  },

  car() {
    equal(car(list(atom('a'), atom('b'), atom('c'))), 'a');
    deepEqual(
      car(list(list(atom('a'), atom('b'), atom('c')), atom('x'), atom('y'), atom('z'))),
      ['a', 'b', 'c'],
    );
    equal(car(atom('hotdog')), null);
    equal(car(list()), null);
  },
};
