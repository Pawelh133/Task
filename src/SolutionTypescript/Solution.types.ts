export type TTreeElementType =
  | (() => string)
  | ITreeElement
  | string
  | number
  | boolean
  | null
  | undefined;

export interface ITreeElement {
  [x: string]: TTreeElementType;
}