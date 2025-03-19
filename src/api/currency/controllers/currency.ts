/**
 * A set of functions called "actions" for `currency`
 */

import { Context, Next } from "koa";
import { getValueFromStream } from "../../../utils";

interface BodyData {
  bank: "PB";
  baseCurrency: number;
  baseCurrencyLit: string;
  date: string;
  exchangeRate: Exchange[];
}

interface Exchange {
  baseCurrency: string;
  currency: string;
  saleRateNB: number;
  purchaseRateNB: number;
}

export default {
  index: async (ctx: Context, next: Next) => {
    try {
      const date = new Date();
      const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${date.getFullYear()}`;

      const data = await fetch(
        `https://api.privatbank.ua/p24api/exchange_rates?json&date=${formattedDate}`
      );

      if (!data.ok) {
        return (ctx.body = "error");
      }

      const { body } = data;

      const reader = body.getReader();
      const bodyData: BodyData = JSON.parse(
        (await reader.read().then(getValueFromStream)).replace(/\r\n/g, "")
      );

      ctx.body = {
        rate: bodyData.exchangeRate.find((r) => r.currency === "USD")!
          .purchaseRateNB,
        status: "success",
      };
    } catch (err) {
      ctx.body = { rate: 42, status: "fail" };
    }
  },
};
