export type Label = {
  id: number;
  name: string;
};

export type LabelListAPIResponse = {
  status: string;
  message?: string;
  data?: Label[];
};
