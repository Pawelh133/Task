import { IInput, TDeepReadonly, TObjectType } from './Solution.types';

const SolutionTypescript = (): JSX.Element => {
  const typedFreeze = <T,>(
    obj: TObjectType<T>
  ): TDeepReadonly<TObjectType<T>> => {
    return Object.freeze(obj);
  };

  const input: IInput = {
    key1: {
      key2: 'string 1',
      key3(arg) {
        return arg;
      },
      key4: 'elo',
    },
    key5: { key6: 'string 4' },
    key7: 'string 5',
    key8: 'string 6',
  };

  const output = typedFreeze<IInput>(input);

  return (
    <pre style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
      <code>input: {JSON.stringify(input, null, 2)}</code>
      <code>output: {JSON.stringify(output, null, 2)}</code>
    </pre>
  );
};

export default SolutionTypescript;
