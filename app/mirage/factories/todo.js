// More info: http://www.ember-cli-mirage.com/docs/v0.1.x/quickstart

import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title(i)  { return `Kerjakan tugas ${i}`; },
  'is-completed': false
});
