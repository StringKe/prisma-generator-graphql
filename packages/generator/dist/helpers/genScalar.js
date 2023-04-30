"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genScalar = void 0;
const genScalar = (models) => {
    const basicSupportType = ['String', 'Int', 'Float', 'Boolean', 'ID'];
    const modelNames = models.map((model) => {
        return model.name;
    });
    const scalarTypes = models
        .map((model) => {
        return model.fields.map((field) => {
            return field.type;
        });
    })
        .flat()
        .filter((type) => {
        return ![...basicSupportType, ...modelNames].includes(type);
    })
        .filter((type, index, self) => {
        return self.indexOf(type) === index;
    })
        .map((type) => {
        return `scalar ${type}`;
    })
        .join('\n');
    return `\n${scalarTypes}\n`;
};
exports.genScalar = genScalar;
//# sourceMappingURL=genScalar.js.map