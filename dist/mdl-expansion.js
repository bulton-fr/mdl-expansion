/**
 * Material design expansion package
 * @author : bulton-fr <bulton.fr@gmail.com>
 */

(function () {
    'use strict';

    var MaterialExpansion = function MaterialExpansion(element) {
        this.element_ = element;

        // Initialize instance.
        this.init();
    };

    window['MaterialExpansion'] = MaterialExpansion;

    /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */
    MaterialExpansion.prototype.Constant_ = {
        // None at the moment.
    };

    /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */
    MaterialExpansion.prototype.CssClasses_ = {
        SUMMARY: 'mdl-expansion__summary',
        IS_OPEN: 'mdl-expansion--is-open',
        IS_UPGRADED: 'is-upgraded'
    };
    
    MaterialExpansion.prototype.toggleContent = function () {
        if (this.element_.classList.contains(this.CssClasses_.IS_OPEN)) {
            this.element_.classList.remove(this.CssClasses_.IS_OPEN);
        } else {
            this.element_.classList.add(this.CssClasses_.IS_OPEN);
        }
    };
    
    MaterialExpansion.prototype.eventOnKeyboard = function (event) {
        if (event.keyCode !== 13) {
            return;
        }

        return this.toggleContent();
    };

    MaterialExpansion.prototype.init = function () {
        if (!this.element_) {
            return;
        }

        var arrow = this.element_.querySelector('.'+this.CssClasses_.SUMMARY);
        arrow.addEventListener('click', this.toggleContent.bind(this));
        arrow.addEventListener('keydown', this.eventOnKeyboard.bind(this));

        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    };

    // The component registers itself. It can assume componentHandler is available
    // in the global scope.
    componentHandler.register({
        constructor: MaterialExpansion,
        classAsString: 'MaterialExpansion',
        cssClass: 'mdl-js-expansion'
    });
})();
  