define(['jquery', 'rangeslider', 'selectric'], function ($) {

    function debounce(fn, debounceDuration) {
        debounceDuration = debounceDuration || 100;
        return function () {
            if (!fn.debouncing) {
                var args = Array.prototype.slice.apply(arguments);
                fn.lastReturnVal = fn.apply(window, args);
                fn.debouncing = true;
            }
            clearTimeout(fn.debounceTimeout);
            fn.debounceTimeout = setTimeout(function () {
                fn.debouncing = false;
            }, debounceDuration);
            return fn.lastReturnVal;
        };
    }

    /**
     * Workaround to dispatch a native event instead of relying
     * on the plugin's jquery type of event
     *
     * @param element: DOM node to trigger the event on
     * @param type: String with event type
     */
    function dispatchVanillaEvent(element, type) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(type, true, true);
        element.dispatchEvent(evt);
    }

    /**
     * setup function for all those UI components and interactions
     * that require jquery
     */
    function main(wrapper) {

        var $wrapper = $(wrapper),
            typeTesterSelector = ".type-tester",
            typeTesterContentSelector = ".type-tester__content";

        $wrapper.find(".fontsampler-interface select[name='sample-text']").on('change', function () {
            var $fs = $(this).closest('.fontsampler-interface').find(typeTesterContentSelector),
                val = $(this).val();

            $fs.html(val);
        });

        $wrapper.find('.fontsampler-interface input[type="range"]').rangeslider({
            // Feature detection the default is `true`.
            // Set this to `false` if you want to use
            // the polyfill also in Browsers which support
            // the native <input type="range"> element.
            polyfill: false,
            onSlide: function (position, element) {
                debounce(dispatchVanillaEvent(this.$element[0], 'input'), 250);
            },
            onSlideEnd: function (position, element) {
                debounce(dispatchVanillaEvent(this.$element[0], 'input'), 250);
            }
        });

        // transform select dropdowns
        $wrapper.find(".fontsampler-interface select").not("[size]").each(function () {
            $(this).selectric({
                onChange: function (element) {
                    debounce(dispatchVanillaEvent(element, 'change'));
                }
            }).closest('.selectric-wrapper').addClass('selectric-wide');
        });


        $wrapper.find(".fontsampler-interface .fontsampler-multiselect").on("click", "button", function () {
            var $this = $(this),
                $fs = $this.closest('.fontsampler-interface').find(typeTesterContentSelector),
                val = $this.data("value");

            switch ($this.closest('.fontsampler-multiselect').data("name")) {
                case "alignment":
                    $fs.css("text-align", val);
                    break;

                case "invert":
                    if (val == "positive") {
                        $fs.removeClass("invert");
                        $("body").removeClass("fontsampler-inverted");
                    } else {
                        $fs.addClass("invert");
                        $("body").addClass("fontsampler-inverted");
                    }
                    break;

                case "opentype":
                    $this.siblings(".fontsampler-opentype-features").toggleClass("shown");
                    break;
            }

            $this.siblings("button").removeClass("fontsampler-multiselect-selected");
            if ($this.siblings("button").length === 0) {
                $this.toggleClass("fontsampler-multiselect-selected");
            } else {
                $this.addClass("fontsampler-multiselect-selected");
            }
        });

        // prevent line breaks on single line instances
        $wrapper.find(typeTesterContentSelector + '.fontsampler-is-singleline')
            .on("keypress keyup change paste", function (event) {

                if (event.type === "keypress") {
                    // for keypress events immediately block pressing enter for line break
                    if (event.keyCode === 13) {
                        return false;
                    }
                } else {
                    // allow other events, filter any html with $.text() and replace linebreaks
                    // TODO fix paste event from setting the caret to the front of the non-input non-textarea
                    var $this = $(this),
                        text = $this.text(),
                        hasLinebreaks = text.indexOf("\n"),
                        numChildren = $this.children().length;

                    if (-1 !== hasLinebreaks || 0 !== numChildren) {
                        $(this).html(text.replace('/\n/gi', ''));
                    }
                }
            });

        $wrapper.removeClass("on-loading");

        // for fontsamplers that only have one font but display the fontpicker label,
        // insert the font family name that opentype.js loaded into the label
        $wrapper.find(".fontsampler-font-label").each(function () {
            $(this).children('label').html($wrapper.data('initial-font-name'))
        });
    }

    return main;

});