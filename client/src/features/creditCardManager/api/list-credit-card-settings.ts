import { apiSlice } from "../../api/apiSlice";
import { IResponse } from "../../core/types";
import { CreditCardSetting } from "../types";

interface Response extends IResponse {
  data: CreditCardSetting[];
}

export const { useListCCSettingsQuery } = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listCCSettings: builder.query<Response, void>({
      query: () => "/management/credit-card-settings",
    }),
  }),
});
