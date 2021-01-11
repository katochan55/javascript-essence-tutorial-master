import { DataSource } from './data-source.js';

const p = Promise.resolve();
let _dirty;

const targetObj = await DataSource.get(KEY);

export async function createStore(KEY) {
  const pxy = new Proxy(targetObj, {
    set(target, prop, value, receiver) {
      _dirty = true;

      const result = Reflect.set(target, prop, value, receiver);

      p.then(() => {
        if (_dirty) {
          console.log('** update data **');
          _dirty = false;
          DataSource.set(KEY, target);
        }
      });

      return result;
    }
  });
  return pxy;
}
