import * as migration_20261028_124308_initial from './20261028_124308_initial';
import * as migration_20261103_100059_contact_phones from './20261103_100059_contact_phones';

export const migrations = [
  {
    up: migration_20261028_124308_initial.up,
    down: migration_20261028_124308_initial.down,
    name: '20261028_124308_initial',
  },
  {
    up: migration_20261103_100059_contact_phones.up,
    down: migration_20261103_100059_contact_phones.down,
    name: '20261103_100059_contact_phones'
  },
];
