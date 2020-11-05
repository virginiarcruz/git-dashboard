export interface AppContextInterface {
  configValue: {
    loading?: boolean;
    data?: void;
  };
  repo?: string | undefined;
  setRepo?: any | undefined;
}
