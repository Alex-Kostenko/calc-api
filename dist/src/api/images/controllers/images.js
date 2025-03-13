"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A set of functions called "actions" for `images`
 */
const path_1 = __importDefault(require("path"));
const jszip_1 = __importDefault(require("jszip"));
const zip = new jszip_1.default();
exports.default = {
    async downloadImages(ctx) {
        try {
            const files = await strapi.entityService.findMany("plugin::upload.file", {
                filters: { mime: { $startsWith: "image/png" } }, // Fetch only image files
                fields: ["url", "name"],
            });
            //       const test = await strapi.entityService.findMany("api::auction.auction", {
            //         populate: ["image"],
            //       });
            //
            //       console.log("test", test);
            if (!files.length) {
                return ctx.throw(404, "No images found");
            }
            ctx.set("Content-Disposition", "attachment; filename=images.zip");
            ctx.set("Content-Type", "application/zip");
            for (const file of files) {
                const filePath = path_1.default.join(strapi.dirs.static.public, file.url); // Adjust if using custom storage
                zip.file(file.name, filePath);
            }
            const file = await zip.generateAsync({ type: "nodebuffer" });
            ctx.body = { ...ctx.body, file };
            ctx.status = 200;
        }
        catch (err) {
            console.error("Error creating ZIP:", err);
            ctx.throw(500, "Failed to generate ZIP");
        }
    },
};
