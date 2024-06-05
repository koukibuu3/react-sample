export type RecursiveItem = {
  id: string;
  name: string;
  children?: RecursiveItem[];
}
