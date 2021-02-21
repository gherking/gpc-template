import { PreCompiler } from "gherking";
import { /* TODO */ } from "gherkin-ast";
const debug = require("debug")("gpc:template");

// TODO: Add implementation of your precompiler
export class Template implements PreCompiler {
    constructor() {
        debug("Intialize");
    }
}
/*
 * @example:
 * export class MyPrecompiler implements PreCompiler {
 *   constructor(config) {
 *     super();
 *     this.config = config;
 *   }
 * 
 *   onScenario(scenario) {
 *     // doing smth with scenario
 *   }
 * }
 */