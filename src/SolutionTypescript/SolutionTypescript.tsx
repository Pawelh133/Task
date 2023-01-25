import { cloneDeep, isEmpty } from 'lodash';
import { ITreeElement, TTreeElementType } from './Solution.types';

const SolutionTypescript = (): JSX.Element => {
  const setLeafTypedValue = (leaf: string) => {
    if (['true', 'false'].includes(leaf)) return leaf === 'true';
    if (/^\d+$/.test(leaf)) return parseInt(leaf);

    return leaf;
  };

  const setUpTreeElement = (element: TTreeElementType): TTreeElementType => {
    if (element) {
      if (typeof element === 'function') {
        return setLeafTypedValue(element());
      }

      if (typeof element === 'string') {
        return setLeafTypedValue(element);
      }

      if (typeof element === 'object' && !isEmpty(element)) {
        Object.keys(element).forEach((elementNode) => {
          type TKeyType = keyof TTreeElementType;

          element[elementNode as TKeyType] = setUpTreeElement(
            element[elementNode as TKeyType]
          );
        });
      }
    }

    return element;
  };

  const typedFreeze = (tree: ITreeElement) => {
    const treeCopy = cloneDeep(tree);

    return Object.freeze(setUpTreeElement(treeCopy));
  };

  const input = {
    key1: {
      key2: 'some text 1',
      key3: {
        key4: '1',
        key6: 'true',
        key7: { key8: () => '56', key9: 'false' }, // key8 will be not displayed because of function.
      },
    },
    key11: 'some text 2',
    key12: {},
    key13: null,
  };

  const output = typedFreeze(input);

  return (
    <pre style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
      <code>input: {JSON.stringify(input, null, 2)}</code>
      <code>output: {JSON.stringify(output, null, 2)}</code>
    </pre>
  );
};

export default SolutionTypescript;
