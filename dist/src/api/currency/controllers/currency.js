"use strict";
/**
 * A set of functions called "actions" for `currency`
 */
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
exports.default = {
    index: async (ctx, next) => {
        try {
            const date = new Date();
            const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}.${date.getFullYear()}`;
            const data = await fetch(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${formattedDate}`);
            if (!data.ok) {
                return (ctx.body = "error");
            }
            const { body } = data;
            const reader = body.getReader();
            const bodyData = JSON.parse((await reader.read().then(utils_1.getValueFromStream)).replace(/\r\n/g, ""));
            ctx.body = {
                rate: bodyData.exchangeRate.find((r) => r.currency === "USD")
                    .purchaseRateNB,
                status: "success",
            };
        }
        catch (err) {
            ctx.body = { rate: 42, status: "fail" };
        }
    },
};
