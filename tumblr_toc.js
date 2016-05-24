var Tumblr_Toc = Tumblr_Toc || {}
'use strict'
querySelector='div.body-text'

window.onload = function() {
    Tumblr_Toc.targetSection = document.querySelector(
      Tumblr_Toc.querySelector).childNodes
    Tumblr_Toc.currentHeadingLevel = 1
    Tumblr_Toc.tocDoc = '<ul>'
    for (Tumblr_Toc.i = 0; Tumblr_Toc.i < Tumblr_Toc.targetSection.length; Tumblr_Toc.i++) {
        Tumblr_Toc.targetChildNode = Tumblr_Toc.targetSection[Tumblr_Toc.i]
        if (typeof Tumblr_Toc.targetChildNode.tagName !== 'undefined') {
            if (Tumblr_Toc.targetChildNode.tagName.match(/^H([1-6])/)) {
                Tumblr_Toc.settedId = Tumblr_Toc.targetChildNode.id || 'generatedid_' + Tumblr_Toc.i
                Tumblr_Toc.targetChildNode.setAttribute('id', Tumblr_Toc.settedId)
                if (RegExp.$1 > Tumblr_Toc.currentHeadingLevel) {
                    Tumblr_Toc.tocDoc += '<ul>'
                } else if (RegExp.$1 < Tumblr_Toc.currentHeadingLevel) {
                    Tumblr_Toc.tocDoc += '</ul>'
                }
                Tumblr_Toc.currentHeadingLevel = RegExp.$1
                Tumblr_Toc.tocDoc += '<li><a href="#' + Tumblr_Toc.settedId + '">' + Tumblr_Toc.targetChildNode.textContent + '</a></li>'
            }
        }
    }
    Tumblr_Toc.tocDoc += '</ul>'

    Tumblr_Toc.tumblr_toc = document.getElementById('tumblr_toc')
    Tumblr_Toc.tumblr_toc.innerHTML = Tumblr_Toc.tocDoc
}
