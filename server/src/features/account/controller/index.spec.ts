import httpMocks from 'node-mocks-http';

import {
    listAccountsController,
    getAccountController,
    createAccountController,
    updateAccountController,
    deleteAccountController,
} from "./index.js";
import {
    createFailureResponse,
    createSuccessResponse
} from '../../common/utils/response.js';
import * as accountService from '../service/index.js';

jest.mock('../service', () => ({
    listAccounts: jest.fn(),
    getAccount: jest.fn(),
    createAccount: jest.fn(),
    updateAccount: jest.fn(),
    deleteAccount: jest.fn(),
}))
jest.mock('../../common/utils/response', () => ({
    createSuccessResponse: jest.fn(),
    createFailureResponse: jest.fn(),
}))

describe('test feature:account | controller:listAccountsController', () => {
    let req: httpMocks.MockRequest<any>;
    let res: httpMocks.MockResponse<any>;

    beforeEach(() => {
        req = httpMocks.createRequest({});
        res = httpMocks.createResponse()
    });

    test('it should return 200', async () => {
        const mockRes = {
            data: [{
                "id":1,
                "created_at":"2023-09-06T17:29:14.251559+00:00",
                "name":"Savings",
                "type":5,
                "opening_date":"2023-09-06",
                "starting_balance":0,
                "latest_balance":0,
                "default_currency":"INR"
            }]
        };
        (accountService.listAccounts as jest.Mock).mockResolvedValue(mockRes)

        await listAccountsController(req, res)

        expect(createSuccessResponse).toHaveBeenCalledWith(
            req,
            res,
            200,
            "",
            mockRes.data
        );
    })

    test('it should return 500', async () => {
        const mockRes = {
            error: "mock error response"
        };
        (accountService.listAccounts as jest.Mock).mockResolvedValue(mockRes)

        await listAccountsController(req, res)

        expect(createFailureResponse).toHaveBeenCalledWith(
            req,
            res,
            500
        );
    })
})

describe('test feature:account | controller:getAccountController', () => {
    let req: httpMocks.MockRequest<any>;
    let res: httpMocks.MockResponse<any>;

    beforeEach(() => {
        req = httpMocks.createRequest({id: 10});
        res = httpMocks.createResponse()
    });

    test('it should return 200 with right object', async () => {
        const mockRes = {
            data: [{
                "id":10,
                "created_at":"2023-09-06T17:29:14.251559+00:00",
                "name":"Savings",
                "type":5,
                "opening_date":"2023-09-06",
                "starting_balance":0,
                "latest_balance":0,
                "default_currency":"INR"
            }]
        };
        (accountService.getAccount as jest.Mock).mockResolvedValue(mockRes)

        await getAccountController(req, res)

        expect(createSuccessResponse).toHaveBeenCalledWith(
            req,
            res,
            200,
            "",
            mockRes.data
        );
    })

    test('it should return 404 for not found object', async () => {
        const mockRes = {
            data: []
        };
        (accountService.getAccount as jest.Mock).mockResolvedValue(mockRes)

        await getAccountController(req, res)

        expect(createFailureResponse).toHaveBeenCalledWith(
            req,
            res,
            404,
            "not-found"
        );
    })

    test('it should return 400',async () => {
        req._setParameter({id: "abc"})

        await getAccountController(req, res)

        expect(createFailureResponse).toHaveBeenCalled()
    })

    test('it should return 500', async () => {
        const mockRes = { error: "mock error response" };
        (accountService.getAccount as jest.Mock).mockResolvedValue(mockRes)

        await getAccountController(req, res)

        expect(createFailureResponse).toHaveBeenCalledWith(
            req,
            res,
            500,
        );
    })
})

describe('test feature:account | controller:createAccountController', () => {
    let req: httpMocks.MockRequest<any>;
    let res: httpMocks.MockResponse<any>;

    beforeEach(() => {
        req = httpMocks.createRequest({
            method: 'POST',
            body: {
                "name": "Checking Test",
                "type": 1,
                "opening_date": "2023-09-08",
                "starting_balance": 0,
                "latest_balance": 120,
                "default_currency": "INR"
            }
        });
        res = httpMocks.createResponse()
    });

    test('it should return 201', async () => {
        const mockRes = {};
        (accountService.createAccount as jest.Mock).mockResolvedValue(mockRes)

        await createAccountController(req, res)

        expect(createSuccessResponse).toHaveBeenCalledWith(
            req,
            res,
            201,
            "",
            req.body
        );
    })

    test('it should return 500 for bad body/other error', async () => {
        req._setBody({})
        const mockRes = {
            error: "mock error response"
        };
        (accountService.createAccount as jest.Mock).mockResolvedValue(mockRes)

        await createAccountController(req, res)

        expect(createFailureResponse).toHaveBeenCalledWith(
            req,
            res,
            500,
            ""
        );
    })
})

describe('test feature:account | controller:updateAccountController', () => {
    let req: httpMocks.MockRequest<any>;
    let res: httpMocks.MockResponse<any>;

    beforeEach(() => {
        req = httpMocks.createRequest({
            method: 'PATCH',
            params: { id: 1 },
            body: { "name": "Checking Test 1" }
        });
        res = httpMocks.createResponse()
    });

    test('it should return 204', async () => {
        const mockRes = {};
        (accountService.updateAccount as jest.Mock).mockResolvedValue(mockRes)

        await updateAccountController(req, res)

        expect(createSuccessResponse).toHaveBeenCalledWith(
            req,
            res,
            204
        );
    })

    test('it should return 500 for bad body/other error', async () => {
        req._setBody({})
        const mockRes = {
            error: "mock error response"
        };
        (accountService.updateAccount as jest.Mock).mockResolvedValue(mockRes)

        await updateAccountController(req, res)

        expect(createFailureResponse).toHaveBeenCalledWith(
            req,
            res,
            500,
            ""
        );
    })
})

describe('test feature:account | controller:deleteAccountController', () => {
    let req: httpMocks.MockRequest<any>;
    let res: httpMocks.MockResponse<any>;

    beforeEach(() => {
        req = httpMocks.createRequest({
            method: 'DELETE',
            params: { id: 1 }
        });
        res = httpMocks.createResponse()
    });

    test('it should return 204', async () => {
        const mockRes = {};
        (accountService.deleteAccount as jest.Mock).mockResolvedValue(mockRes)

        await deleteAccountController(req, res)

        expect(createSuccessResponse).toHaveBeenCalledWith(
            req,
            res,
            204
        );
    })

    test('it should return 500 for bad body/other error', async () => {
        req._setParameter("id", null)
        const mockRes = {
            error: "mock error response"
        };
        (accountService.deleteAccount as jest.Mock).mockResolvedValue(mockRes)

        await deleteAccountController(req, res)

        expect(createFailureResponse).toHaveBeenCalledWith(
            req,
            res,
            500,
            ""
        );
    })
})
