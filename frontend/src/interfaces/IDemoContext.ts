import { IDemo } from ".";

export default interface IDemoContext {
  demo: IDemo;
  setDemo: (demos: IDemo) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
}
