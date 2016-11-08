/* 
Conference - 2016 
Version: 0.1
Author: Kellerman Rivero (krsloco@gmail.com)
Description: A conference (webrtc) methods for handle videocalls
*/
(function (window, undefined) {

    var extend = function () {

        // Variables
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        // Check if a deep merge
        if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
            deep = arguments[0];
            i++;
        }

        // Merge the object into the extended object
        var merge = function (obj) {
            for ( var prop in obj ) {
                if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                    // If deep merge and property is an object, merge properties
                    if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                        extended[prop] = extend( true, extended[prop], obj[prop] );
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and conduct a merge
        for ( ; i < length; i++ ) {
            var obj = arguments[i];
            merge(obj);
        }

        return extended;

    };


    var settings = {
        localVideoElementId: 'localVideo',
        remoteVideoElementId: 'remoteVideo',
        sendCandidateCallback: function (evt) {
            console.log(["Candidate: ", evt]);
        },
        sendOfferCallback: function (offer) {
            console.log("Offer:" + offer);
        },
        sendAnswerCallback: function (offer, answer) {
            console.log("Answer:" + answer);
        }
    }

    var _ = {};
    var _localStream;
    var connections = [];
    
    function error(e) {
        console.warn(e);
    }
    
    function getConnection(id) {

        if(connections[id])
        {
            return connections[id];
        }

        var conn = new webrtc.RTCPeerConnection({
                iceServers: [
                        { url: "stun:stun.l.google.com:19302" }
                ]
        });
        
        conn.onicecandidate = function(evt) {
            (settings.sendCandidateCallback || function() {})(id, evt);
        }
        conn.onaddstream = function (evt) {
            if(settings.remoteVideoElementId) 
            {
                webrtc.attachStream(document.getElementById(settings.remoteVideoElementId), evt.stream);
            }
        };

        connections[id] = conn;
        return conn;
    }
    
    function callOffer(id, create, offer, candidates) {
        
         var connection = getConnection(id);

         if(settings.localVideoElementId) 
         {
            if(_localStream) 
            {
                connection.addStream(_localStream);
            }
            else 
            {
                throw "Local stream not initialized";
            }
         }
       
         if(create) { //Create
            connection.createOffer(function(offer) {
                    connection.setLocalDescription(new webrtc.RTCSessionDescription(offer), 
                    function () {
                        settings.sendOfferCallback(id, offer);       
                    }, error);
            }, error);
         } else { //Accept
            connection.setRemoteDescription(new webrtc.RTCSessionDescription(offer), function () {
            connection.createAnswer(function (answer) {
                connection.setLocalDescription(new webrtc.RTCSessionDescription(answer), function () {
                        
                        if(candidates) {
                            candidates.forEach(function(candidate) {
                                    connection.addIceCandidate(new webrtc.RTCIceCandidate(candidate));
                            }, this);
                        }
                        
                        settings.sendAnswerCallback(id, offer, answer);
                    }, error);
                }, error);
            }, error);
         }
                        
         return connection;
    }
    
    function setAnswer(id, answer, candidates) {
         var connection = getConnection(id);

         connection.setRemoteDescription(new webrtc.RTCSessionDescription(answer), function () {
             if(candidates) {
                    candidates.forEach(function(candidate) {
                            connection.addIceCandidate(new webrtc.RTCIceCandidate(candidate));
                    }, this);
             }
         }, error);
    }
    
    function getLocalVideo(callback){
          webrtc.getUserMedia(
            { "audio": true, "video": true }, 
            function (stream) {
                _localStream = stream;
                webrtc.attachStream(document.getElementById(settings.localVideoElementId), stream);
                
                if(callback) callback();
            },
            error);
    };
    
    window.conference = function (_settings) {
        settings = extend(settings, _settings);
        
        this.initialize = function (callback) {
            if(settings.localVideoElementId) 
            {
                getLocalVideo(callback);
            }
            else 
            {
                callback();
            }
        };
        
        this.createCall = function (id) {
            callOffer(id, true);
        };
        
        this.acceptCall = function (id, offer, candidates) {
            callOffer(id, false, offer, candidates);
        };
        
        this.receiveAnswer = function (id, answer, candidates) {
            setAnswer(id, answer, candidates);
        };
        
        this.handleIceCandidate = function (id, candidate) {
            var connection = getConnection(id);

            if(candidate) {
                if (connection.remoteDescription && connection.remoteDescription.sdp && connection.remoteDescription.sdp != "") {
                            connection.addIceCandidate(new webrtc.RTCIceCandidate(candidate));
                }
            }
        };
        
        this.author = new (function() {
            this.FullName = "Kellerman Rivero";
            this.Email =  "krsloco@gmail.com";
            this.Copyright = "2016";
            this.MeetTheAuthor = function() {
                window.location = "https://twitter.com/riverokellerman";
            }
        })();
    };

})(window, undefined);