import { loadYoga } from 'yoga-layout/load';
import type { Yoga as YogaType } from 'yoga-layout/load';
export * from 'yoga-layout/load';

const YogaProxy = new Proxy({} as YogaType, {
  get(target: YogaType, prop: keyof YogaType) {
    if (prop in target) {
      return target[prop];
    }
    return (globalThis as any).yoga_instance[prop];
  },

  set(target: YogaType, prop: keyof YogaType, value: any) {
    ((globalThis as any).yoga_instance as any)[prop] = value;
    target[prop] = value as never;
    return true;
  }
});

export const loadGlobalYoga = async () => {
  if (!(globalThis as any).yoga_instance) {
    (globalThis as any).yoga_instance = await loadYoga();
  }
  return (globalThis as any).yoga_instance;
};

export default YogaProxy;