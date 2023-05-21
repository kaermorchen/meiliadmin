import EphemeralStore from 'ember-simple-auth/session-stores/ephemeral';
import LocalStorageStore from 'ember-simple-auth/session-stores/local-storage';
import config from 'meiliadmin/config/environment';

const settings = config?.APP?.meilisearch;

class ConfigStore extends EphemeralStore {
  restore() {
    const result = {
      authenticated: Object.assign(
        { authenticator: 'authenticator:meilisearch' },
        settings
      ),
    };

    return Promise.resolve(result);
  }
}

export default settings ? ConfigStore : LocalStorageStore;
