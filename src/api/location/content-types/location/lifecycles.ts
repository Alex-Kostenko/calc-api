import { validateNotNull } from "../../../../utils/validateNotNull";

export default {
  beforeCreate({ params }) {
    return validateNotNull(params.data, ["port", "state", "auctions"]);
  },
};
