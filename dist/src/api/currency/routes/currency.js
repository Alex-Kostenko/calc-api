"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        {
            method: "GET",
            path: "/currency",
            handler: "currency.index",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
