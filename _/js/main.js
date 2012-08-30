// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var lis, slider;
    $(".popSelector").on("click", function() {
      return $(this).toggleClass("on");
    }).on("mouseleave", function() {
      return $(this).removeClass("on");
    });
    if ($.browser.msie && $.browser.version === "6.0") {
      $(".dropNav,.dropNav li").on("hover", function(e) {
        return $(this).toggleClass("hover", e.type === "mouseenter");
      });
      $(window).on("scroll", function() {
        return $("#sideBar").stop(true).animate({
          "top": $(this).scrollTop() + 187
        }, 800, "easeOutQuad");
      });
      $("label:has(input)").on("click", function(e) {
        if (!$(e.target).is("input")) {
          return $("input", this).click();
        }
      });
    }
    if ($.browser.msie) {
      $("li:has(footer),.imgMetro a").on("hover", function(e) {
        var pos;
        pos = {
          "mouseenter": 0,
          "mouseleave": "100%"
        };
        return $("footer", this).stop(true).animate({
          "top": pos[e.type]
        }, 400, "easeOutQuad");
      });
    }
    $("ol").each(function() {
      return $("i", this).each(function(i) {
        return $(this).addClass("o" + (i + 1));
      });
    });
    $(".tab").on("mouseenter", "header > :header", function(e) {
      var root, that;
      that = $(this);
      root = that.parents(".tab");
      that.addClass("on").siblings().removeClass("on");
      return root.find(".content > *").removeClass("on").eq(that.index()).addClass("on");
    }).find("header>*:first").trigger("mouseenter");
    $("input[type=number]").on("change", function(e) {
      var that;
      that = $(this);
      return that.val(parseInt(that.val(), 10) || that.attr("min") || 0);
    });
    $("table").on("click", function(e) {
      var tango;
      tango = $(e.target);
      if (tango.is(".selectAll")) {
        return $(":checkbox", this).attr("checked", !!tango.attr("checked"));
      }
    });
    $(".dateEnd").datepicker({
      minDate: +1
    });
    $(".dateBegin").datepicker({
      minDate: 0,
      onSelect: function(dateText, inst) {
        return $(this).siblings(".dateEnd").datepicker("option", "minDate", new Date(dateText));
      }
    });
    $(".dialogBtn").on("click", function() {
      if (this.dialog) {
        return this.dialog.dialog("open");
      } else {
        this.dialog = $(this).next(".dialog").dialog({
          modal: true,
          show: "fade",
          hide: "fade"
        });
        return this.dialog.dialog("option", "dialogClass", this.dialog.data("dialogclass"));
      }
    });
    $(":input").on("invalid", function() {
      var that;
      that = $(this);
      this.select();
      if (!this.validityMsg) {
        this.validityMsg = $('<span class="validityMsg"><span> <i></i> <strong></strong></span></span>');
        if (that.is(":checkbox,:radio")) {
          $("[name=" + that.attr("name") + "]:last").after(this.validityMsg);
        } else {
          that.after(this.validityMsg);
        }
      }
      return this.validityMsg.addClass("invalid").find("strong").html(this.validationMessage);
    }).on("change", function() {
      var _ref;
      if ((_ref = this.validityMsg) != null) {
        _ref.removeClass("invalid");
      }
      return setTimeout($.proxy(function() {
        return this.checkValidity();
      }, this), 0);
    });
    $("#calendarBig").datepicker({
      dateFormat: "yy/mm/dd",
      beforeShowDay: function(date) {
        var dateStr, _ref;
        dateStr = $.datepicker.formatDate("yy/mm/dd", date);
        return [(_ref = this.showsDate) != null ? _ref[dateStr] : void 0];
      },
      onChangeMonthYear: function(year, month, inst) {
        var data;
        data = [
          {
            name: "year",
            value: year
          }, {
            name: "month",
            value: month
          }
        ];
        return $(this).trigger("dataChange", [data]);
      },
      onSelect: function(dateText, inst) {
        var data;
        data = this.showsDate[dateText];
        return $(this).parent().find("[data-template-name]").trigger("dataRender", data);
      }
    }).on("dataRender", function(e, data) {
      var that;
      if (e.target === this) {
        that = $(this);
        $.each(data, function(i) {
          var _ref;
          return (_ref = this.localDate) != null ? _ref : this.localDate = $.datepicker.formatDate("yy年m月d日 DD", new Date(i));
        });
        this.showsDate = data;
        that.datepicker("refresh");
        return setTimeout(function() {
          var today, valid;
          valid = that.find("tbody a");
          today = valid.filter(".ui-state-highlight");
          if (today.length) {
            return today.click();
          } else {
            return valid.first().click();
          }
        }, 0);
      }
    }).trigger("dataChange");
    $("#ticketOrder").on("click", "button", function(e) {
      return e.preventDefault();
    }).on("change", function(e) {
      var activeLabel, data, dateTime, number, price;
      if (!$(e.target).is("[data-template-name]")) {
        $("label.on", this).removeClass("on");
        activeLabel = $("label:has(:checked)", this).addClass("on");
        dateTime = activeLabel.eq(0).text();
        price = activeLabel.eq(1).text();
        number = $("input[type=number]", this).val();
        data = {
          dateTime: dateTime,
          price: price,
          number: number
        };
        return $("#selectInfo", this).trigger("dataRender", data);
      }
    }).find("label:not(:has(input))").addClass("disabled");
    slider = $("#slider");
    if (slider.length) {
      lis = slider.find("li");
      while (slider.find("li").length < 4) {
        lis.after(lis.clone());
      }
      slider.find(".sliderWrapper div").jCarouselLite({
        btnNext: "#slider .next",
        btnPrev: "#slider .prev",
        vertical: true,
        speed: 400,
        visible: 4,
        easing: "easeOutQuart",
        afterEnd: function(a) {
          return a.first().trigger("setCurrent");
        }
      });
      slider.on("mouseenter", "li", function() {
        return $(this).trigger("setCurrent");
      });
      slider.on("hover", function(e) {
        if (e.type === "mouseenter") {
          return clearInterval(this.timer);
        } else {
          return this.timer = setInterval($.proxy(function() {
            return $(".next", this).click();
          }, this), 5000);
        }
      });
      slider.on("setCurrent", function(e) {
        var img, tango;
        tango = $(e.target);
        img = tango.find("img");
        $("li", this).removeClass("current");
        tango.addClass("current");
        return $(".stage", this).attr("href", img.data("href")).find("img").attr("src", img.attr("src"));
      });
      return lis.first().trigger("setCurrent");
    }
  });

}).call(this);
