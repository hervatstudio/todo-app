"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pathUtils = require("../../utils/path");
var patternUtils = require("../../utils/pattern");
var DeepFilter = /** @class */ (function () {
    function DeepFilter(options, micromatchOptions) {
        this.options = options;
        this.micromatchOptions = micromatchOptions;
        this.index = new Map();
    }
    /**
     * Returns filter for directories.
     */
    DeepFilter.prototype.getFilter = function (positive, negative) {
        var _this = this;
        var positiveRe = patternUtils.convertPatternsToRe(positive, this.micromatchOptions);
        var negativeRe = patternUtils.convertPatternsToRe(negative, this.micromatchOptions);
        return function (entry) { return _this.filter(entry, positiveRe, negativeRe); };
    };
    /**
     * Returns true if entry must be added to result.
     */
    DeepFilter.prototype.filter = function (entry, positiveRe, negativeRe) {
        // Exclude duplicate results
        if (this.options.unique) {
            if (this.isDuplicateEntry(entry)) {
                return false;
            }
            this.createIndexRecord(entry);
        }
        // Filter files and directories by options
        if (this.onlyFileFilter(entry) || this.onlyDirectoryFilter(entry)) {
            return false;
        }
        if (this.isSkippedByAbsoluteNegativePatterns(entry, negativeRe)) {
            return false;
        }
        return this.isMatchToPatterns(entry.path, positiveRe) && !this.isMatchToPatterns(entry.path, negativeRe);
    };
    /**
     * Return true if the entry already has in the cross reader index.
     */
    DeepFilter.prototype.isDuplicateEntry = function (entry) {
        return this.index.has(entry.path);
    };
    /**
     * Create record in the cross reader index.
     */
    DeepFilter.prototype.createIndexRecord = function (entry) {
        this.index.set(entry.path, undefined);
    };
    /**
     * Returns true for non-files if the «onlyFiles» option is enabled.
     */
    DeepFilter.prototype.onlyFileFilter = function (entry) {
        return this.options.onlyFiles && !entry.isFile();
    };
    /**
     * Returns true for non-directories if the «onlyDirectories» option is enabled.
     */
    DeepFilter.prototype.onlyDirectoryFilter = function (entry) {
        return this.options.onlyDirectories && !entry.isDirectory();
    };
    /**
     * Return true when `absolute` option is enabled and matched to the negative patterns.
     */
    DeepFilter.prototype.isSkippedByAbsoluteNegativePatterns = function (entry, negativeRe) {
        if (!this.options.absolute) {
            return false;
        }
        var fullpath = pathUtils.makeAbsolute(this.options.cwd, entry.path);
        return this.isMatchToPatterns(fullpath, negativeRe);
    };
    /**
     * Return true when entry match to provided patterns.
     *
     * First, just trying to apply patterns to the path.
     * Second, trying to apply patterns to the path with final slash (need to micromatch to support «directory/**» patterns).
     */
    DeepFilter.prototype.isMatchToPatterns = function (filepath, patternsRe) {
        return patternUtils.matchAny(filepath, patternsRe) || patternUtils.matchAny(filepath + '/', patternsRe);
    };
    return DeepFilter;
}());
exports.default = DeepFilter;
