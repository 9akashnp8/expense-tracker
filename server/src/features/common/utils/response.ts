import { Request, Response } from "express";

/**
 * Wrapper to create a standardized
 * success (2xx) response
 * @param req express Request object
 * @param res express Response object
 * @param status 2xx status code
 * @param body optional body to send
 * along with default body
 */
export function createSuccessResponse(
    req: Request,
    res: Response,
    status: 200 | 201 | 204,
    message: string = "",
    body: object | object[] | null = {}, // TODO: improve this
) {
    res.status(status).json({ status: "success", message, data: body });
}

/**
 * Wrapper to create a standardized
 * failure (4xx/5xx) response
 * @param req express Request object
 * @param res express Response object
 * @param status 4xx/5xx status code
 * @param body optional body to send
 * along with default body
 */
export function createFailureResponse(
    req: Request,
    res: Response,
    status: 400 | 404 | 500,
    message: string = "",
    body: object | object[] | null = {}, // TODO: improve this
) {
    res.status(status).json({ status: "failure", message, data: body });
}
