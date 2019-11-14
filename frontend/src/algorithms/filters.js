

export const filters = {
    /**
     * Mapping of facetType to nice name
     */
    "tpcategorie": "Catégories",
    "tppays": "Pays",
    "tpcouleur": "Couleur",
    "tpformat": "Format",
    "tpmillesime": "Millesime",
    "tpregion": "Région"
}

export const serializeToString = (filterType, filterObj) => {
    // given a filterType (key) from the obj above and a filterObj (a json object mapping any of those values to a true/false value)
    // convert it into a query string for filtering

    let keys = Object.keys(filterObj);
    let filter;

    let string = `@${filterType}==(`;
    for (let i=0; i<keys.length; i++){
        filter = filterObj[keys[i]];
        if (filter) string += `${keys[i]},`;
    }
    if (string.substring(string.length-1,string.length) === ",") string = string.substring(0,string.length-1)
    string += ")";
    if (string === `@${filterType}==()`) string = ""
    return string
}