import * as accountService from "../../account/service/index.js";
import { createTransaction } from "./index.js";
import { calcRemainingBalance } from "../utils/functions.js";

jest.mock("../../common/supabase.js");
jest.mock("../../account/service", () => ({
    getAccount: jest.fn(),
    updateAccount: jest.fn(),
}));

describe("test feature:transaction service:createTransaction", () => {
    test("ensure balance is calculated correctly", () => {
        const initialBalance = 100;
        const amountWithdrawn = 10;
        const remainingBalance = calcRemainingBalance(
            initialBalance,
            amountWithdrawn,
            true,
        );
        expect(remainingBalance).toBe(90);
    });

    test("ensure operation fails and return error if account not found", async () => {
        const txnPayload = {
            item: "Eight Transaction",
            amount: 10,
            txn_date_time: "2023-09-07T22:31:00",
            category: 1,
            account: 1,
            label: 1,
            notes: "Third Notes",
            is_expense: false,
        };
        (accountService.getAccount as jest.Mock).mockReturnValueOnce({
            data: [],
            error: "getAccount error",
        });
        expect(await createTransaction(txnPayload)).toStrictEqual({
            error: "getAccount error",
        });
    });
});
