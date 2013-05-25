/**
 * This library will allow you to audit to what scale
 * your users are using AdBlockers. 
 * Please be sensible. Tracking data based on a individual user
 * will without a doubt annoy those individuals. Therefore I'd 
 * recommend only using this to sample.
 * 
 * It's my personal belief - that if you're using a site
 * which is funded by advertisments, then you have no right
 * to complain about adverts, but whatever.
 * 
 * AdBlock Plus is currently the best Ad Blocking software I've come accross.
 * It's "whitelist" system is fantasic.
 * 
 * @type AdBlockInsights._L4.Anonym$0
 */


var AdBlockInsights = (function(){
    
    /**
     * Name of the div we're sacraficing
     * @type String
     */
    var $el_name = 'advertisement.js';
    
    var $advert_injected = false;
    
    var $callback;
    
    var $timeout_h;
    
    /**
     * Let's create a honey pot.
     * I like honey.
     * @returns {undefined}
     */
    function _injectFakeAdvert()
    {
        var doc = document;
        var body = doc.getElementsByTagName("head")[0];

        // Copyier dom
        var el = doc.createElement('script');
        el.setAttribute("id", $el_name);
        el.setAttribute("type", "text/javascript");
        el.setAttribute("src", $el_name);
        body.appendChild(el);
        $advert_injected = true;
    }
    
    
    /*
     * Just a simple implementation.
     * @returns {undefined}
     */
    function _checkDivExists()
    {
        if ($advert_injected) {
            if (typeof window.AdBlockInsights.AdBlocker == 'undefined') {
                // run the callback func.
                $callback();
                
                return false;
            }
            
            $timeout_h = setTimeout(function() { _checkDivExists() }, 300);
        }
    }

    /** 
     * Bring it all together.
     * @returns {undefined}
     */
    function _start()
    {
        // Hey.
        _injectFakeAdvert();
        
        // hacky events
        $timeout_h = setTimeout(function() { _checkDivExists(); }, 300);
    }
    
    return {
        /**
         * Start up the engines!
         * @param {Closure} callback
         * @returns {Boolean}
         */
        init: function(callback)
        {
            $callback = callback;
            
            // fire away
            _start();
            
        }
        
    };
})();