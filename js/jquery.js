! function(a, b, c, d) {
    a.fn.formchimp = function(b) {
        var d, e = a(this),
            f = a("body"),
            g = e.attr("action").replace("/post?", "/post-json?").concat("&c=?"),
            h = e.find('[type="submit"]'),
            i = { appendElement: e, buttonSelector: h, buttonText: "", debug: !1, errorMessage: "", onMailChimpSuccess: function() {}, onMailChimpError: function() {}, responseClass: "mc-response", successMessage: "", url: g },
            j = i.buttonSelector.text();
        a.extend(i, b), a(e).on("submit", function(b) {
            b.preventDefault(), f.removeClass("mc-success mc-error").addClass("mc-loading"), 0 === a("." + i.responseClass).length ? d = a("<div/>").addClass(i.responseClass).appendTo(i.appendElement) : d.html(""), a.ajax({ url: i.url, data: a(this).serialize(), dataType: "jsonp" }).done(function(b) {
                i.debug && console.log(JSON.stringify(b));
                var e = b.msg;
                isNaN(e.charAt(0)) || "-" !== e.charAt(2) || (e = e.substring(3)), f.addClass("mc-" + b.result).removeClass("mc-loading"), "success" === b.result ? ("" !== i.successMessage && (e = i.successMessage), "" !== i.buttonText && i.buttonSelector.text(i.buttonText), a(c).trigger("mailChimpSuccess"), i.onMailChimpSuccess.call()) : ("" !== i.errorMessage && (e = i.errorMessage), "" !== i.buttonText && i.buttonSelector.text(j), a(c).trigger("mailChimpError"), i.onMailChimpError.call()), d.html(e)
            })
        })
    }
}(jQuery, window, document);