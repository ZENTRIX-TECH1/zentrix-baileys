"use strict";

// Show banner once when package is first imported
(function showBanner() {
    const c = '\x1b[36m', g = '\x1b[32m', y = '\x1b[33m', w = '\x1b[97m', d = '\x1b[90m', r = '\x1b[0m', b = '\x1b[1m';
    console.log('');
    console.log(`${c}${b}  ╔══════════════════════════════════════════╗${r}`);
    console.log(`${c}${b}  ║                                          ║${r}`);
    console.log(`${c}${b}  ║   ███████╗███████╗███╗   ██╗████████╗   ║${r}`);
    console.log(`${c}${b}  ║   ╚══███╔╝██╔════╝████╗  ██║╚══██╔══╝   ║${r}`);
    console.log(`${c}${b}  ║     ███╔╝ █████╗  ██╔██╗ ██║   ██║      ║${r}`);
    console.log(`${c}${b}  ║    ███╔╝  ██╔══╝  ██║╚██╗██║   ██║      ║${r}`);
    console.log(`${c}${b}  ║   ███████╗███████╗██║ ╚████║   ██║      ║${r}`);
    console.log(`${c}${b}  ║   ╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝      ║${r}`);
    console.log(`${c}${b}  ║                                          ║${r}`);
    console.log(`${c}${b}  ║         ${g}R I X  B A I L E Y S${c}           ║${r}`);
    console.log(`${c}${b}  ║                                          ║${r}`);
    console.log(`${c}${b}  ╠══════════════════════════════════════════╣${r}`);
    console.log(`${c}${b}  ║  ${g}✔  ZENTRIX Baileys loaded!${c}              ║${r}`);
    console.log(`${c}${b}  ║  ${y}⚡  Version  : ${w}4.2.0 (stable)${c}          ║${r}`);
    console.log(`${c}${b}  ║  ${y}📦  Package  : ${w}@zentrix/baileys${c}        ║${r}`);
    console.log(`${c}${b}  ║  ${y}🚀  Engine   : ${w}Multi-Device (MD)${c}       ║${r}`);
    console.log(`${c}${b}  ╠══════════════════════════════════════════╣${r}`);
    console.log(`${c}${b}  ║  ${d}Thanks for using ZENTRIX Baileys! 🙏${c}    ║${r}`);
    console.log(`${c}${b}  ║  ${d}Built with 💙 by the Zentrix Team${c}       ║${r}`);
    console.log(`${c}${b}  ╚══════════════════════════════════════════╝${r}`);
    console.log('');
})();


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

// ✅ Support ALL import styles:
//
// Style 1 - Named ESM:
//   import { makeWASocket } from '@zentrix/baileys'
//
// Style 2 - Default ESM:
//   import makeWASocket from '@zentrix/baileys'
//
// Style 3 - CommonJS:
//   const { makeWASocket } = require('@zentrix/baileys')
//
// Style 4 - Default pkg destructure:
//   import pkg from '@zentrix/baileys'
//   const { makeWASocket } = pkg
//
// Style 5 - Whiskeysockets alias (drop-in replacement):
//   "@whiskeysockets/baileys": "npm:@zentrix/baileys@latest"

exports.default = Socket_1.default;

// Merge everything onto the default export so all styles work
module.exports = Object.assign(
    Socket_1.default,
    exports,
    {
        default: Socket_1.default,
        makeWASocket: Socket_1.default,
    }
);
