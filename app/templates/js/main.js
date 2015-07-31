/**
@author Matt Przybylski
**/
var main = (function($, document, window, undefined) {
    'use strict';

    /* ----------------------------------------------------------------------------- *\
       Public Methods
    \* ----------------------------------------------------------------------------- */

    /**
    @method init

    @return {null}
    **/
    function init() {
        console.log('main.init()');
    }

    /* ----------------------------------------------------------------------------- *\
       Private Methods
    \* ----------------------------------------------------------------------------- */



    // Expose API publicly
    return {
        init: init
    };
})(jQuery, document, window);

// Initialize on document ready
jQuery(document).ready(function() {
    'use strict';

    main.init();
});