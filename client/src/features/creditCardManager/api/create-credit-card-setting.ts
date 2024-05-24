import { apiSlice } from "../../api/apiSlice";
import { IResponse } from "../../core/types";

type Payload = {
  card: number;
  desired_utilization_ratio: number;
  credit_limit: number;
  reminder_date: Date;
};

interface Response extends IResponse {
  data: { id: number; created_date: Date } & Payload;
}

export const { useCreateCCSettingMutation } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCCSetting: builder.mutation<Response, Payload>({
      query: (payload) => ({
        url: "/management/credit-card-settings",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});
