"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genEnum = void 0;
const getComment_1 = require("../utils/getComment");
const genEnum = ({ name, values, documentation, }) => {
    const enumValues = values.map(({ name }) => `\t${name}`).join('\n');
    return `${(0, getComment_1.getComment)(documentation)}\nenum ${name} { \n${enumValues}\n }\n`;
};
exports.genEnum = genEnum;
//# sourceMappingURL=genEnum.js.map