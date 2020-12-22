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
const CLEAR_LINE = '\x1B[K';
class Display {
    constructor() {
        this.lastLinesCount = 0;
        this.linesCount = 0;
    }
    log(str) {
        return __awaiter(this, void 0, void 0, function* () {
            // We create an empty line at the start so that any console.log calls
            // from within the script are above our output.
            if (this.linesCount === 0) {
                console.log(CLEAR_LINE); // erases the current line
                this.linesCount += 1;
            }
            // Strip lines that are too long
            const strToLog = str.substr(0, 78);
            console.log(`${CLEAR_LINE}${strToLog}`);
            this.linesCount += 1;
        });
    }
    resetCursor() {
        return __awaiter(this, void 0, void 0, function* () {
            // move cursor up to draw over out output
            process.stdout.write(`\x1B[${this.linesCount}A`);
            this.lastLinesCount = this.linesCount;
            this.linesCount = 0;
        });
    }
    close() {
        // move cursor down so that console output stays
        process.stdout.write(`\x1B[${this.lastLinesCount}B`);
    }
}
exports.default = Display;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzcGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFFNUIsTUFBcUIsT0FBTztJQUE1QjtRQUVZLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxDQUFDLENBQUM7SUE0Qm5DLENBQUM7SUExQmdCLEdBQUcsQ0FBQyxHQUFXOztZQUN4QixxRUFBcUU7WUFDckUsK0NBQStDO1lBQy9DLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7Z0JBQ25ELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1lBRUQsZ0NBQWdDO1lBQ2hDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFWSxXQUFXOztZQUNwQix5Q0FBeUM7WUFDekMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQztLQUFBO0lBRU0sS0FBSztRQUNSLGdEQUFnRDtRQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FFSjtBQS9CRCwwQkErQkMifQ==