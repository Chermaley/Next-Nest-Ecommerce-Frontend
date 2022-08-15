export interface MemoCache<K extends object, V> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}

export default function memoize<
  Arg extends object,
  Rest extends any[],
  Result extends any,
>(
  target: (arg: Arg, ...rest: Rest) => Result,
  _cache?: MemoCache<Arg, Result>,
): (arg: Arg, ...rest: Rest) => Result {
  const cache = _cache ?? new WeakMap();
  return function (arg, ...rest) {
    if (cache.has(arg)) {
      return cache.get(arg)!;
    } else {
      const result = target(arg, ...rest);
      cache.set(arg, result);
      return result;
    }
  };
}
