"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_helper_1 = require("@prisma/generator-helper");
const sdk_1 = require("@prisma/sdk");
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const genEnum_1 = require("./helpers/genEnum");
const genType_1 = require("./helpers/genType");
const writeFileSafely_1 = require("./utils/writeFileSafely");
const genScalar_1 = require("./helpers/genScalar");
const { version } = require('../package.json');
(0, generator_helper_1.generatorHandler)({
    onManifest() {
        sdk_1.logger.info(`${constants_1.GENERATOR_NAME}:Registered`);
        return {
            version,
            defaultOutput: '../generated',
            prettyName: constants_1.GENERATOR_NAME,
        };
    },
    onGenerate: async (options) => {
        var _a, _b;
        const outputPath = ((_a = options.generator.output) === null || _a === void 0 ? void 0 : _a.value) || './generated';
        const outputFileName = ((_b = options.generator.config) === null || _b === void 0 ? void 0 : _b.outputFileName) || 'schema.graphql';
        const output = path_1.default.join(outputPath, outputFileName);
        const enumValues = options.dmmf.datamodel.enums
            .map((enumInfo) => {
            return (0, genEnum_1.genEnum)(enumInfo);
        })
            .join('\n');
        const typeValues = options.dmmf.datamodel.models
            .map((model) => {
            return (0, genType_1.genType)(model);
        })
            .join('\n');
        const scalarValues = (0, genScalar_1.genScalar)(options.dmmf.datamodel.models);
        const document = [scalarValues, enumValues, typeValues].join('\n');
        await (0, writeFileSafely_1.writeFileSafely)(output, document);
    },
});
//# sourceMappingURL=generator.js.map