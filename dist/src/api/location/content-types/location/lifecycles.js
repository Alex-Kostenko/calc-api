"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateNotNull_1 = require("../../../../utils/validateNotNull");
exports.default = {
    beforeCreate({ params }) {
        return (0, validateNotNull_1.validateNotNull)(params.data, ["port", "state", "auctions"]);
    },
};
