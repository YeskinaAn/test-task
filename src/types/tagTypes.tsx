export interface TagType {
  id: number;
  name: string;
  value: number;
  category: string;
}

export type OptionsType = {
  label: string;
  type: string;
} [] | undefined;
