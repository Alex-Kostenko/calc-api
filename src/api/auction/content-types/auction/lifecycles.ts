import { validateNotNull } from "../../../../utils/validateNotNull";

export default {
  beforeCreate({ params }) {
    return validateNotNull(params.data, ["auction_tax", "locations"]);
  },
};
