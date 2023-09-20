import winston from "winston";

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { app: "expense-tracker" },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

if (process.env.NODE_ENV === "production") {
    logger
        .clear()
        .add(
            new winston.transports.File({
                filename: "error.log",
                level: "error",
            }),
        )
        .add(
            new winston.transports.File({
                filename: "combined.log",
            }),
        );
}
