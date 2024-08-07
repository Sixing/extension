(function() {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var a = "Translate"
      , d = this || self;
    function f(b, n) {
        b = b.split(".");
        var c = d;
        b[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift()); )
            b.length || void 0 === n ? c[e] && c[e] !== Object.prototype[e] ? c = c[e] : c = c[e] = {} : c[e] = n
    }
    function g(b) {
        return b
    }
    ;var h = {}
      , MSG_TRANSLATE = a;
    h[0] = MSG_TRANSLATE;
    var MSG_CANCEL = "Cancel";
    h[1] = MSG_CANCEL;
    var MSG_CLOSE = "Close";
    h[2] = MSG_CLOSE;
    function MSGFUNC_PAGE_TRANSLATED_TO(b) {
        return "Google has automatically translated this page to: " + b
    }
    h[3] = MSGFUNC_PAGE_TRANSLATED_TO;
    function MSGFUNC_TRANSLATED_TO(b) {
        return "Translated to: " + b
    }
    h[4] = MSGFUNC_TRANSLATED_TO;
    var MSG_GENERAL_ERROR = "Error: The server could not complete your request. Try again later.";
    h[5] = MSG_GENERAL_ERROR;
    var MSG_LEARN_MORE = "Learn more";
    h[6] = MSG_LEARN_MORE;
    function MSGFUNC_POWERED_BY(b) {
        return "Powered by " + b
    }
    h[7] = MSGFUNC_POWERED_BY;
    var MSG_TRANSLATE_PRODUCT_NAME = a;
    h[8] = MSG_TRANSLATE_PRODUCT_NAME;
    var MSG_TRANSLATION_IN_PROGRESS = "Translation in progress";
    h[9] = MSG_TRANSLATION_IN_PROGRESS;
    function MSGFUNC_TRANSLATE_PAGE_TO(b) {
        return "Translate this page to: " + b + " using Google Translate?"
    }
    h[10] = MSGFUNC_TRANSLATE_PAGE_TO;
    function MSGFUNC_VIEW_PAGE_IN(b) {
        return "View this page in: " + b
    }
    h[11] = MSGFUNC_VIEW_PAGE_IN;
    var MSG_RESTORE = "Show original";
    h[12] = MSG_RESTORE;
    var MSG_SSL_INFO_LOCAL_FILE = "The content of this local file will be sent to Google for translation using a secure connection.";
    h[13] = MSG_SSL_INFO_LOCAL_FILE;
    var MSG_SSL_INFO_SECURE_PAGE = "The content of this secure page will be sent to Google for translation using a secure connection.";
    h[14] = MSG_SSL_INFO_SECURE_PAGE;
    var MSG_SSL_INFO_INTRANET_PAGE = "The content of this intranet page will be sent to Google for translation using a secure connection.";
    h[15] = MSG_SSL_INFO_INTRANET_PAGE;
    var MSG_SELECT_LANGUAGE = "Select Language";
    h[16] = MSG_SELECT_LANGUAGE;
    function MSGFUNC_TURN_OFF_TRANSLATION(b) {
        return "Turn off " + b + " translation"
    }
    h[17] = MSGFUNC_TURN_OFF_TRANSLATION;
    function MSGFUNC_TURN_OFF_FOR(b) {
        return "Turn off for: " + b
    }
    h[18] = MSGFUNC_TURN_OFF_FOR;
    var MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER = "Always hide";
    h[19] = MSG_ALWAYS_HIDE_AUTO_POPUP_BANNER;
    var MSG_ORIGINAL_TEXT = "Original text:";
    h[20] = MSG_ORIGINAL_TEXT;
    var MSG_FILL_SUGGESTION = "Contribute a better translation";
    h[21] = MSG_FILL_SUGGESTION;
    var MSG_SUBMIT_SUGGESTION = "Contribute";
    h[22] = MSG_SUBMIT_SUGGESTION;
    var MSG_SHOW_TRANSLATE_ALL = "Translate all";
    h[23] = MSG_SHOW_TRANSLATE_ALL;
    var MSG_SHOW_RESTORE_ALL = "Restore all";
    h[24] = MSG_SHOW_RESTORE_ALL;
    var MSG_SHOW_CANCEL_ALL = "Cancel all";
    h[25] = MSG_SHOW_CANCEL_ALL;
    var MSG_TRANSLATE_TO_MY_LANGUAGE = "Translate sections to my language";
    h[26] = MSG_TRANSLATE_TO_MY_LANGUAGE;
    function MSGFUNC_TRANSLATE_EVERYTHING_TO(b) {
        return "Translate everything to " + b
    }
    h[27] = MSGFUNC_TRANSLATE_EVERYTHING_TO;
    var MSG_SHOW_ORIGINAL_LANGUAGES = "Show original languages";
    h[28] = MSG_SHOW_ORIGINAL_LANGUAGES;
    var MSG_OPTIONS = "Options";
    h[29] = MSG_OPTIONS;
    var MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE = "Turn off translation for this site";
    h[30] = MSG_TURN_OFF_TRANSLATION_FOR_THIS_SITE;
    h[31] = null;
    var MSG_ALT_SUGGESTION = "Show alternative translations";
    h[32] = MSG_ALT_SUGGESTION;
    var MSG_ALT_ACTIVITY_HELPER_TEXT = "Click on words above to get alternative translations";
    h[33] = MSG_ALT_ACTIVITY_HELPER_TEXT;
    var MSG_USE_ALTERNATIVES = "Use";
    h[34] = MSG_USE_ALTERNATIVES;
    var MSG_DRAG_TIP = "Drag with shift key to reorder";
    h[35] = MSG_DRAG_TIP;
    var MSG_CLICK_FOR_ALT = "Click for alternative translations";
    h[36] = MSG_CLICK_FOR_ALT;
    var MSG_DRAG_INSTUCTIONS = "Hold down the shift key, click, and drag the words above to reorder.";
    h[37] = MSG_DRAG_INSTUCTIONS;
    var MSG_SUGGESTION_SUBMITTED = "Thank you for contributing your translation suggestion to Google Translate.";
    h[38] = MSG_SUGGESTION_SUBMITTED;
    var MSG_MANAGE_TRANSLATION_FOR_THIS_SITE = "Manage translation for this site";
    h[39] = MSG_MANAGE_TRANSLATION_FOR_THIS_SITE;
    var MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT = "Click a word for alternative translations, or double-click to edit directly";
    h[40] = MSG_ALT_AND_CONTRIBUTE_ACTIVITY_HELPER_TEXT;
    var MSG_ORIGINAL_TEXT_NO_COLON = "Original text";
    h[41] = MSG_ORIGINAL_TEXT_NO_COLON;
    h[42] = a;
    h[43] = a;
    h[44] = "Your correction has been submitted.";
    var MSG_LANGUAGE_UNSUPPORTED = "Error: The language of the webpage is not supported.";
    h[45] = MSG_LANGUAGE_UNSUPPORTED;
    var MSG_LANGUAGE_TRANSLATE_WIDGET = "Language Translate Widget";
    h[46] = MSG_LANGUAGE_TRANSLATE_WIDGET;
    var MSG_RATE_THIS_TRANSLATION = "Rate this translation";
    h[47] = MSG_RATE_THIS_TRANSLATION;
    var MSG_FEEDBACK_USAGE_FOR_IMPROVEMENT = "Your feedback will be used to help improve Google Translate";
    h[48] = MSG_FEEDBACK_USAGE_FOR_IMPROVEMENT;
    var MSG_FEEDBACK_SATISFIED_LABEL = "Good translation";
    h[49] = MSG_FEEDBACK_SATISFIED_LABEL;
    var MSG_FEEDBACK_DISSATISFIED_LABEL = "Poor translation";
    h[50] = MSG_FEEDBACK_DISSATISFIED_LABEL;
    var MSG_TRANSLATION_NO_COLON = "Translation";
    h[51] = MSG_TRANSLATION_NO_COLON;
    var k;
    function l(b, n) {
        this.g = n === m ? b : ""
    }
    l.prototype.toString = function() {
        return this.g + ""
    }
    ;
    var m = {};
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var p = window.google && google.translate && google.translate._const;
    if (p) {
        var q;
        a: {
            for (var r = [], t = ["TE_20221226_00,0.1,20230107"], u = 0; u < t.length; ++u) {
                var v = t[u].split(",")
                  , w = v[0];
                if (w) {
                    var x = Number(v[1]);
                    if (!(!x || .1 < x || 0 > x)) {
                        var y = Number(v[2])
                          , z = new Date
                          , A = 1E4 * z.getFullYear() + 100 * (z.getMonth() + 1) + z.getDate();
                        !y || y < A || r.push({
                            version: w,
                            ratio: x,
                            h: y
                        })
                    }
                }
            }
            var B = 0
              , C = window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/)
              , D = Number(C && C[1]) || Math.random();
            for (u = 0; u < r.length; ++u) {
                var E = r[u];
                B += E.ratio;
                if (1 <= B)
                    break;
                if (D < B) {
                    q = E.version;
                    break a
                }
            }
            q = "TE_20230724"
        }
        var F = "https://cdn.jsdelivr.net/gh/Sixing/extension@main/translator_v2.js";
        if (p._cjlc)
            p._cjlc(F);
        else {
            var H = F, I, J = "SCRIPT", K = document;
            J = String(J);
            "application/xhtml+xml" === K.contentType && (J = J.toLowerCase());
            I = K.createElement(J);
            I.type = "text/javascript";
            I.charset = "UTF-8";
            var L, M = H, N = M = null === M ? "null" : void 0 === M ? "undefined" : M, O;
            if (void 0 === k) {
                var P = null
                  , Q = d.trustedTypes;
                if (Q && Q.createPolicy) {
                    try {
                        P = Q.createPolicy("goog#html", {
                            createHTML: g,
                            createScript: g,
                            createScriptURL: g
                        })
                    } catch (b) {
                        d.console && d.console.error(b.message)
                    }
                    k = P
                } else
                    k = P
            }
            var R = (O = k) ? O.createScriptURL(N) : N;
            L = new l(R,m);
            I.src = L instanceof l && L.constructor === l ? L.g : "type_error:TrustedResourceUrl";
            var S, T, U, V = null == (U = (T = (I.ownerDocument && I.ownerDocument.defaultView || window).document).querySelector) ? void 0 : U.call(T, "script[nonce]");
            (S = V ? V.nonce || V.getAttribute("nonce") || "" : "") && I.setAttribute("nonce", S);
            var W = document.getElementsByTagName("head")[0];
            W || (W = document.body.parentNode.appendChild(document.createElement("head")));
            W.appendChild(I)
        }
        f("google.translate.m", h);
        f("google.translate.v", q)
    }
    ;
}
).call(window)
