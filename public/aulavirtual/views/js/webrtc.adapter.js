/* 
WebRTC Adapter - 2016 
Version: 0.1
Author: Kellerman Rivero (krsloco@gmail.com)
Description: A simple adapter to unify webrtc api for chrome/firefox
*/

(function (window, undefined) {

    function detectBrowser() {
        var browser = {
            name: '',
            isIncompatible: true,
            isChrome: false,
            isFirefox: false,
            version: undefined
        };

        if (navigator.webkitGetUserMedia) {
            browser.isChrome = true;
            browser.name = 'Chrome';
            browser.isIncompatible = false,
            browser.version = parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2])
        }
        else if (navigator.mozGetUserMedia)
        {
            browser.isFirefox = true;
            browser.name = 'Firefox';
            browser.isIncompatible = false,
            browser.version = parseInt(navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1])
        }

        return browser;
    }

    var _ = {};

    _.browser = detectBrowser();

    if (_.browser.isIncompatible) {
        throw "Incompatible browser";
    }

    _.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

    /* 
    The RTCSessionDescription interface represents the parameters of a session. 
    Each RTCSessionDescription consists of a description type indicating which part of the offer/answer 
    negotiation process it describes and of the SDP descriptor of the session.

    The process of negotiating a connection between two peers involves exchanging RTCSessionDescription 
    objects back and forth until the two peers agree upon a configuration for the connection.
    */
    _.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;

    /* The RTCIceCandidate interface of the the WebRTC API represents a candidate internet connectivity establishment (ICE) server for establishing an RTCPeerConnection. */
    _.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate;

    
    _.getUserMedia = (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia).bind(navigator);
    _.attachStream = function (element, stream) {
        if (typeof element.srcObject !== 'undefined') {
            element.srcObject = stream;
        } else if (typeof element.mozSrcObject !== 'undefined') {
            element.mozSrcObject = stream;
        } else if (typeof element.src !== 'undefined') {
            element.src = URL.createObjectURL(stream);
        } else {
            console.log('Error attaching stream to element.');
        }
    };
    _.reattachStream = function (to, from) {
        if (typeof to.srcObject !== 'undefined') {
            to.srcObject = from.srcObject;
        } else if (typeof to.mozSrcObject !== 'undefined') {
            to.mozSrcObject = from.mozSrcObject;
        } else if (typeof to.src !== 'undefined') {
            to.src = from.src;
        } else {
            console.log('Error reattaching stream to element.');
        }
    }
    _.createIceServer = function (url, username, password) {
        var iceServer = null;
        var url_parts = url.split(':');
        if (url_parts[0].indexOf('stun') === 0) {
            // Create iceServer with stun url.
            iceServer = { 'url': url };
        } else if (url_parts[0].indexOf('turn') === 0 &&
                   (url.indexOf('transport=udp') !== -1 ||
                    url.indexOf('?transport') === -1)) {

            if (namespace.browser.isChrome && namespace.browser.version < 28)
            {
                // For pre-M28 chrome versions use old TURN format.
                var url_turn_parts = url.split("turn:");
                iceServer = {
                    'url': 'turn:' + username + '@' + url_turn_parts[1],
                    'credential': password
                };
            }
            else
            {
                // Create iceServer with turn url.
                // Ignore the transport parameter from TURN url.
                var turn_url_parts = url.split("?");
                iceServer = {
                    'url': turn_url_parts[0],
                    'credential': password,
                    'username': username
                };
            }
        }
        return iceServer;
    };

    function getAuthorUtils(){
        
    }

    _.author = new (function() {
        this.FullName = "Kellerman Rivero";
        this.Email =  "krsloco@gmail.com";
        this.Copyright = "2016";
        this.MeetTheAuthor = function() {
            window.location = "https://twitter.com/riverokellerman";
        }
    })();

    window.webrtc = _;

})(window, undefined);