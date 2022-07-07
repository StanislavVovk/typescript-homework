"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var default_request_1 = require("./requests/default_request");
var cleaner_1 = require("./service/cleaner");
var api_path_enums_1 = require("./enums/api_path_enums");
var _a = api_path_enums_1.API_PATH, POPULAR = _a.POPULAR, DETAILS = _a.DETAILS, UPCOMING = _a.UPCOMING, RATED = _a.RATED, SEARCH = _a.SEARCH;
function render() {
    return __awaiter(this, void 0, void 0, function () {
        var upcoming, popular, top_rated, search;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    upcoming = document.querySelector("#upcoming"), popular = document.querySelector("#popular"), top_rated = document.querySelector("#top_rated"), search = document.querySelector("#search");
                    return [4 /*yield*/, (0, default_request_1.get_response)(POPULAR)];
                case 1:
                    _a.sent();
                    upcoming.addEventListener('change', function (e) {
                        e.preventDefault();
                        (0, cleaner_1.cleaner)();
                        (0, default_request_1.get_response)(UPCOMING);
                    });
                    popular.addEventListener("change", function (e) {
                        e.preventDefault();
                        (0, cleaner_1.cleaner)();
                        (0, default_request_1.get_response)(POPULAR);
                    });
                    top_rated.addEventListener("change", function (e) {
                        e.preventDefault();
                        (0, cleaner_1.cleaner)();
                        (0, default_request_1.get_response)(RATED);
                    });
                    search.addEventListener("change", function () {
                        (0, cleaner_1.cleaner)();
                        (0, default_request_1.get_response)(SEARCH, 1, search.value);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.render = render;
