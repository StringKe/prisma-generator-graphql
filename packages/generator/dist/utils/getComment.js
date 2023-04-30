"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComment = void 0;
const getComment = (comment) => {
    return comment ? `"""\n ${comment} \n"""\n` : '';
};
exports.getComment = getComment;
//# sourceMappingURL=getComment.js.map