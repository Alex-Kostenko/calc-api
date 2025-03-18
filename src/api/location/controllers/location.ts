/**
 * location controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::location.location",
  ({ strapi }) => ({
    async find(ctx) {
      const data = await strapi.entityService.findMany(
        "api::location.location",
        {
          limit: 1000,
          populate: [
            "state",
            "auctions.auction_tax.tax",
            "port.car_types",
            "price_by_type",
          ],
        }
      );

      return { data };
    },
  })
);
