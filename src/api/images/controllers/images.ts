/**
 * A set of functions called "actions" for `images`
 */
import path from "path";
import JSZip from "jszip";

const zip = new JSZip();

export default {
  async downloadImages(ctx) {
    try {
      const files = await strapi.entityService.findMany("plugin::upload.file", {
        filters: { mime: { $startsWith: "image/png" } }, // Fetch only image files
        fields: ["url", "name"],
      });
      if (!files.length) {
        return ctx.throw(404, "No images found");
      }

      ctx.set("Content-Disposition", "attachment; filename=images.zip");
      ctx.set("Content-Type", "application/zip");

      for (const file of files) {
        const filePath = path.join(strapi.dirs.static.public, file.url); // Adjust if using custom storage
        zip.file(file.name, filePath);
      }

      const file = await zip.generateAsync({ type: "nodebuffer" });

      ctx.body = { ...ctx.body, file };
      ctx.status = 200;
    } catch (err) {
      console.error("Error creating ZIP:", err);
      ctx.throw(500, "Failed to generate ZIP");
    }
  },
};
