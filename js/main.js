var Fontsampler = require("fontsampler-js/dist/fontsampler")
var FontsamplerSkin = require("fontsampler-js/dist/fontsampler-skin")

window.addEventListener("load", function () {

    var fontsamplers = document.querySelectorAll(".fontsampler-wrapper")
    var options = {
        rootClass: "fontsampler-wrapper",
        generate: false,
        lazyload: true,
        // ui: {
        // }
    }


    // store this method globally, so it can be called again
    window.fontsamplers = []
    window.fontsamplerSetup = function (node) {
        // return
        var fs = new Fontsampler(node, false, options).init()
            FontsamplerSkin(fs)
            fs.init()

            // additional UI setup specific to Fontsampler WP
            var sampleTextSelect = fs.root.querySelector("select[name='sample-text']")
            if (sampleTextSelect) {
                sampleTextSelect.addEventListener("change", function () {
                    fs.setText(sampleTextSelect.value)
                })
            }

            var invertButtons = fs.root.querySelectorAll("[data-fsjs-block='invert'] button")
            if (invertButtons) {
                for (var b = 0; b < invertButtons.length; b++) {
                    invertButtons[b].addEventListener("click", onInvertClicked)
                }
            }
            function onInvertClicked (e) {
                // var selectedClass = fs.getOption(classes.buttonSelected)
                var selectedClass = "fsjs-button-selected"

                // jquery, bad, sad, mad
                jQuery(e.currentTarget).addClass(selectedClass).siblings().removeClass(selectedClass)
                jQuery(fs.root.querySelector(".fsjs-block-tester .current-font"))
                    .toggleClass("invert", e.currentTarget.dataset.choice === "negative")
            }

            window.fontsamplers.push(fs)
    }

    if (fontsamplers.length > 0) {
        for (var i = 0; i < fontsamplers.length; i++) {
            window.fontsamplerSetup(fontsamplers[i])
        }
    }

});