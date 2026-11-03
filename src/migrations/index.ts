import * as migration_20261028_124308_initial from './20261028_124308_initial';
import * as migration_20261103_100059_contact_phones from './20261103_100059_contact_phones';
import * as migration_20261103_110238_address_show_on_map from './20261103_110238_address_show_on_map';
import * as migration_20261103_133508_product_application from './20261103_133508_product_application';

export const migrations = [
  {
    up: migration_20261028_124308_initial.up,
    down: migration_20261028_124308_initial.down,
    name: '20261028_124308_initial',
  },
  {
    up: migration_20261103_100059_contact_phones.up,
    down: migration_20261103_100059_contact_phones.down,
    name: '20261103_100059_contact_phones',
  },
  {
    up: migration_20261103_110238_address_show_on_map.up,
    down: migration_20261103_110238_address_show_on_map.down,
    name: '20261103_110238_address_show_on_map',
  },
  {
    up: migration_20261103_133508_product_application.up,
    down: migration_20261103_133508_product_application.down,
    name: '20261103_133508_product_application'
  },
];
