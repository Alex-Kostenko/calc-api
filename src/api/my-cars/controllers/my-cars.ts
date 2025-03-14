/**
 * A set of functions called "actions" for `my-cars`
 */

import { Context } from "koa";
import path from "path";
import JSZip from "jszip";

const zip = new JSZip();

export default {
  index: async (ctx: Context, next) => {
    const {
      credentials: { email },
    } = ctx.state.auth;
    const list = await strapi.entityService.findMany(
      "api::cars-list.cars-list",
      {
        filters: {
          author: { email: email },
        },
        populate: ["start_port_images", "author", "end_port_images"],
      }
    );

    try {
      const newList = await Promise.all(
        list.map(async (l) => {
          if ("start_port_images" in l && l.start_port_images !== null) {
            const images = l.start_port_images as {
              url: string;
              name: string;
            }[];
            images.forEach((img) => {
              const filePath = path.join(strapi.dirs.static.public, img.url); // Adjust if using custom storage
              zip.file(img.name, filePath);
            });

            const start_port_file = await zip.generateAsync({
              type: "nodebuffer",
            });
            return { ...l, start_port_file };
          }
        })
      );
      ctx.body = newList;
    } catch (err) {
      ctx.body = err;
    }
  },
};
