"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        // {
        //  method: 'GET',
        //  path: '/images',
        //  handler: 'images.exampleAction',
        //  config: {
        //    policies: [],
        //    middlewares: [],
        //  },
        // },
        {
            method: "GET",
            path: "/download-images",
            handler: "images.downloadImages",
            config: {
                auth: false, // Adjust if authentication is needed
            },
        },
    ],
};
