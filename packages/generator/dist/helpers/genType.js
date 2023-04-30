"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genType = void 0;
const getComment_1 = require("../utils/getComment");
const genType = ({ name, fields, documentation }) => {
    const typeFields = fields
        .map(({ name, type, isRequired, isList, documentation }) => {
        const required = isRequired ? '!' : '';
        const combineType = isList ? `[${type}]` : type;
        return `${(0, getComment_1.getComment)(documentation)}\t${name}: ${combineType}${required}`;
    })
        .join('\n');
    return `${(0, getComment_1.getComment)(documentation)}type ${name} { \n${typeFields}\n }\n`;
};
exports.genType = genType;
//# sourceMappingURL=genType.js.map