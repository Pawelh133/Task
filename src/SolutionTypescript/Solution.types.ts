export type TObjectType<T> = {
  [key: string]: string | ((arg: string) => string) | TObjectType<T>;
};

export type TDeepReadonly<T> = {
  readonly [P in keyof T]: TDeepReadonly<T[P]>;
};

export type IInput = {
  key1: { key2: string; key3: (arg: string) => string; key4: string };
  key5: { key6: string };
  key7: string;
  key8: string;
}
