import { ApiConstants } from "../constants";

const getFlagIcon = (
    code="IN"
    ,style=ApiConstants.COUNTRY_FLAGS.STYLE.FLAT
    ,size=ApiConstants.COUNTRY_FLAGS.SIZE[64]
    )=>`${ApiConstants.COUNTRY_FLAGS.BASE_URL}/${code}/${style}/${size}.png`;

export default {getFlagIcon}