"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const SingleBrowserImplementation_1 = require("../SingleBrowserImplementation");
class Context extends SingleBrowserImplementation_1.default {
    createResources() {
        return __awaiter(this, void 0, void 0, function* () {
            const context = yield this.browser
                .createIncognitoBrowserContext();
            const page = yield context.newPage();
            return {
                context,
                page,
            };
        });
    }
    freeResources(resources) {
        return __awaiter(this, void 0, void 0, function* () {
            yield resources.context.close();
        });
    }
}
exports.default = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25jdXJyZW5jeS9idWlsdC1pbi9Db250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxnRkFBeUU7QUFFekUsTUFBcUIsT0FBUSxTQUFRLHFDQUEyQjtJQUU1QyxlQUFlOztZQUMzQixNQUFNLE9BQU8sR0FBRyxNQUFPLElBQUksQ0FBQyxPQUE2QjtpQkFDcEQsNkJBQTZCLEVBQUUsQ0FBQztZQUNyQyxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxPQUFPO2dCQUNILE9BQU87Z0JBQ1AsSUFBSTthQUNQLENBQUM7UUFDTixDQUFDO0tBQUE7SUFFZSxhQUFhLENBQUMsU0FBdUI7O1lBQ2pELE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7Q0FFSjtBQWhCRCwwQkFnQkMifQ==