import { apiSlice } from "../../api/apiSlice";
import { IResponse } from "../../core/types";
import { CreditCardSetting } from "../types";

interface Response extends IResponse {
  data: CreditCardSetting;
}

export const { useGetCCSettingQuery } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCCSetting: builder.query<Response, string>({
      query: (settingId) => `/management/credit-card-settings/${settingId}`,
    }),
  }),
});
