import { apiSlice } from "../../api/apiSlice";

type Payload = {
  card?: number;
  desired_utilization_ratio?: number;
  credit_limit?: number;
  reminder_date?: Date;
};

export const { useUpdateCCSettingMutation } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCCSetting: builder.mutation<void, Payload>({
      query: (payload) => ({
        url: "/management/credit-card-settings",
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});
