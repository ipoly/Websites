// Generated by CoffeeScript 1.3.3
(function() {
  var ValiditAble, tabMethod, _ref, _ref1;

  $(function() {
    var root;
    root = $("body");
    root.on("change.observer submit.observer", "[data-observer]", function(e) {
      var observer, t;
      t = $(this);
      if (t.is("form") && e.type === "change") {
        return true;
      }
      if (e.type === "submit") {
        e.preventDefault();
      }
      observer = $(t.data("observer"));
      return observer.trigger("dataChange", [this]);
    });
    root.on("dataChange.observer", "[data-source]", function(e, el) {
      var data, t;
      if (e.target === this) {
        t = $(this);
        el = $(el);
        data = el.serializeArray();
        if (!data.length) {
          data = el.find(":input").serializeArray();
        }
        return $[t.data("method") || "post"](t.data("source"), data, null, "json").done(function(data) {
          return t.trigger("dataRender", data);
        }).fail(function(a, b, c) {
          return $.error("获取JSON数据失败:" + b);
        });
      }
    });
    root.on("dataRender.observer", "[data-template-name]", function(e, data) {
      var t, tmpName, _ref;
      if (!(data && e.target === this)) {
        return false;
      }
      t = $(this);
      tmpName = t.data("template-name");
      if ((_ref = this.tpl) == null) {
        this.tpl = $("script[name=" + tmpName + "]").html();
      }
      if (this.tpl) {
        t.html(juicer(this.tpl, data));
        return setTimeout(function() {
          if (t.is("[data-selected]")) {
            return t.trigger("setDefault");
          } else {
            return t.trigger("change");
          }
        }, 0);
      }
    });
    root.on("setDefault.observer", "[data-selected]", function() {
      var filter, filterStr, n, t;
      t = $(this);
      filterStr = t.data("selected");
      if (!filterStr) {
        return true;
      }
      if ($.type(filterStr) === "string") {
        filter = "[value='" + filterStr + "'],:contains('" + filterStr + "')";
      } else {
        filter = ((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = filterStr.length; _i < _len; _i++) {
            n = filterStr[_i];
            _results.push("[value='" + n + "'],:contains('" + n + "')");
          }
          return _results;
        })()).join(",");
      }
      t.find(filter).attr({
        "checked": true,
        "selected": true
      });
      return t.trigger("change");
    });
    root.on("dataRender.observer", "[data-item-before],[data-item-after]", function(e, data) {
      var dom, method, t, tmpName, _ref;
      if (!(data && e.target === this)) {
        return false;
      }
      t = $(this);
      method = t.is("[data-item-before]") ? "prepend" : "append";
      tmpName = t.data("item-before") || t.data("item-after");
      if ((_ref = this.tpl) == null) {
        this.tpl = $("script[name=" + tmpName + "]").html();
      }
      if (this.tpl) {
        dom = $(juicer(this.tpl, data)).hide();
        t[method](dom);
        if (!dom.is("option")) {
          dom.fadeIn();
        }
        return setTimeout(function() {
          return t.trigger("change");
        }, 0);
      }
    });
    return $("[data-source][autoload]").trigger("dataChange");
  });

  /* --------------------------------------------
       Begin validity.coffee
  --------------------------------------------
  */


  ValiditAble = (function() {

    function ValiditAble(el) {
      this.isValidtAble = true;
      return $.extend(el, this);
    }

    ValiditAble.prototype.checkValidity = function() {
      var method, t;
      t = $(this);
      for (method in this.vMethods) {
        if (t.is("[" + method + "],[type=" + method + "]")) {
          this.isValid = this.vMethods[method].call(this);
          switch (this.isValid) {
            case "pending":
              t.trigger("pending");
              break;
            case true:
              t.trigger("valid");
              break;
            default:
              t.trigger("invalid");
          }
        }
      }
      return this.isValid;
    };

    ValiditAble.prototype.vMethods = {
      required: function() {
        var t, val;
        t = $(this);
        val = $.trim(t.val());
        if (!val || val === t.attr("placeholder")) {
          this.vMsg = "该项目是必须的。";
          return false;
        }
        return true;
      },
      pattern: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = new RegExp(t.attr("pattern"));
        if (!reg.test(val)) {
          this.vMsg = "请与所请求的格式保持一致。";
          return false;
        }
        return true;
      },
      maxlength: function() {
        var limit, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        limit = parseInt(t.attr("maxlength"));
        if (val.length > limit) {
          this.vMsg = "输入超出" + (val.length - limit) + "个字符";
          return false;
        }
        return true;
      },
      minlength: function() {
        var limit, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        limit = parseInt(t.attr("minlength"));
        if (val.length > limit) {
          this.vMsg = "还需输入" + (limit - val.length) + "个字符";
          return false;
        }
        return true;
      },
      url: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        if (!reg.test(val)) {
          this.vMsg = "请输入URL。";
          return false;
        }
        return true;
      },
      email: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!reg.test(val)) {
          this.vMsg = "请输入电子邮件地址。";
          return false;
        }
        return true;
      },
      qq: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^[1-9][0-9]{4,}$/;
        if (!reg.test(val)) {
          this.vMsg = "请输入qq号码。";
          return false;
        }
        return true;
      },
      zipcode: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^[1-9]\d{5}(?!\d)$/;
        if (!reg.test(val)) {
          this.vMsg = "请输入邮编。";
          return false;
        }
        return true;
      },
      idCard: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^\d{15}|\d{18}|\d{17}x$/;
        if (!reg.test(val)) {
          this.vMsg = "请输入身份证号码。";
          return false;
        }
        return true;
      },
      tel: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^0\d{2,3}(\-)?\d{7,8}$/;
        if (!reg.test(val)) {
          this.vMsg = "请输入固定电话号码。";
          return false;
        }
        return true;
      },
      phone: function() {
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^(1(([35][0-9])|(47)|[8][01236789]))\d{8}$/;
        if (!reg.test(val)) {
          this.vMsg = "请输入手机号码。";
          return false;
        }
        return true;
      },
      number: function() {
        var t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        if (isNaN(Number(val))) {
          this.vMsg = "请输入数字。";
          return false;
        }
        return true;
      },
      ajaxValidation: function() {
        var t, val;
        t = $(this);
        val = t.val();
        if (val.length) {
          $[t.data("method") || "post"](t.attr("ajaxValidation"), t.serializeArray(), "json").done($.proxy(function(data) {
            $.extend(this, data);
            if (this.isValid) {
              return t.trigger("valid");
            } else {
              return t.trigger("invalid");
            }
          }, this));
        }
        return "pending";
      },
      matched: function() {
        var pVal, partner, t, val;
        t = $(this);
        val = t.val();
        partner = t.closest("form").find("[name=" + (t.attr('name')) + "]").not(this);
        pVal = partner.val();
        if (!val.length || !pVal.length) {
          return "pending";
        }
        partner.trigger("valid");
        if (val !== pVal) {
          this.vMsg = "两次输入不一致。";
          return false;
        }
        return true;
      },
      needone: function() {
        var t, val;
        t = $(this);
        val = t.find(":input").serializeArray();
        if (!val.length) {
          this.vMsg = "至少输入一项。";
          return false;
        }
        return true;
      }
    };

    return ValiditAble;

  })();

  $(function() {
    $("form").attr("noValidate", true);
    $("body").on("submit", "form", function() {
      var inputs, invalidInputs, item, t, _i, _len;
      t = $(this);
      inputs = t.find(":input:not(:button,:submit),[needone]");
      for (_i = 0, _len = inputs.length; _i < _len; _i++) {
        item = inputs[_i];
        if (!item.isValidtAble) {
          new ValiditAble(item);
        }
        item.checkValidity();
      }
      invalidInputs = inputs.filter(function() {
        if (!this.isValid) {
          return true;
        }
      });
      return !invalidInputs.length;
    });
    $("body").on("change keyup", ":input", function() {
      if (!this.isValidtAble) {
        new ValiditAble(this);
      }
      clearTimeout(this.vTimer);
      return this.vTimer = setTimeout($.proxy(this, "checkValidity"), 300);
    });
    return $("body").on("afterClone", ".cloneAble", function() {
      return $(this).find(".validityMsg").remove();
    });
  });

  /* --------------------------------------------
       Begin cloneable.coffee
  --------------------------------------------
  */


  $(function() {
    $("body").on("click", ".cloneAble .add", function(e) {
      var clone, root;
      root = $(this).closest(".cloneAble");
      root.trigger("beforeClone");
      clone = root.clone(root.is("[events]"), root.is("[deepevents]")).hide();
      root.toggleClass("cloneAble delAble").after(clone);
      clone.trigger("afterClone");
      clone.fadeIn();
      return e.preventDefault();
    });
    return $("body").on("click", ".delAble .del", function(e) {
      var root;
      root = $(this).closest(".delAble");
      root.animate({
        opacity: "0",
        marginTop: -root.outerHeight(true)
      }, 400, "easeOutQuart", function() {
        return $(this).remove();
      });
      return e.preventDefault();
    });
  });

  /* --------------------------------------------
       Begin checkall.coffee
  --------------------------------------------
  */


  $(function() {
    return $("body").on("change", ".checkAll", function(e) {
      var t;
      t = $(this);
      return t.closest(".toggleCheck").find(":checkbox:not(.checkAll)").attr("checked", !!t.attr("checked"));
    });
  });

  /* --------------------------------------------
       Begin number.coffee
  --------------------------------------------
  */


  if (!(typeof Modernizr !== "undefined" && Modernizr !== null ? (_ref = Modernizr.inputtypes) != null ? _ref.number : void 0 : void 0)) {
    $.fn.numberUI = function() {
      this.each(function() {
        var t, wrapper;
        t = $(this);
        wrapper = $("<span class='number'><i class='less'>&#x2d;</i><i class='more'>&#x2b;</i></span>");
        t.after(wrapper);
        return wrapper.find(".less").after(t);
      });
      return this;
    };
    $(function() {
      $("input[type=number]").numberUI();
      $("body").on("click dblclick", ".number", function(e) {
        var input, step, tango, val;
        tango = $(e.target);
        input = $("input", this);
        step = Number(input.attr("step")) || 1;
        val = Number(input.val()) || 0;
        if (tango.is(".less")) {
          val -= step;
        } else if (tango.is(".more")) {
          val += step;
        }
        return input.val(val).trigger("change");
      });
      $("body").on("change keyup", ".number input", function() {
        var max, min, t, val;
        t = $(this);
        val = Number(t.val()) || 0;
        max = Number(t.attr("max")) || val;
        min = Number(t.attr("min")) || val;
        val = Math.max(Math.min(val, max), min);
        return t.val(val);
      });
      if ($.browser.msie) {
        return $("body").on("selectstart", ".number i", function() {
          return false;
        });
      }
    });
  }

  /* --------------------------------------------
       Begin placeholder.coffee
  --------------------------------------------
  */


  if (!(typeof Modernizr !== "undefined" && Modernizr !== null ? (_ref1 = Modernizr.input) != null ? _ref1.placeholder : void 0 : void 0)) {
    $.fn.placeholder = function() {
      this.each(function() {
        var t;
        t = $(this);
        if (!$.trim(t.val())) {
          t.addClass("placeholder");
          return t.val(t.attr("placeholder"));
        }
      });
      return this;
    };
    $(function() {
      $("input[placeholder]").placeholder();
      $("body").on("focus", "input.placeholder", function() {
        return $(this).removeClass("placeholder").val("");
      }).on("blur", "input[placeholder]", function() {
        var t, val;
        t = $(this);
        val = $.trim(t.val());
        if (!val) {
          t.val(t.attr("placeholder"));
          return t.addClass("placeholder");
        }
      });
      return $("body").on("afterClone", function(e) {
        var _base;
        return typeof (_base = $(e.target).find(":input").val("")).placeholder === "function" ? _base.placeholder() : void 0;
      });
    });
  }

  /* --------------------------------------------
       Begin lengthctrl.coffee
  --------------------------------------------
  */


  $(function() {
    return $("body").on("keyup", ".lengthCtrl", function(e) {
      var left, length, limit, msg, root, tango, val;
      root = $(this);
      tango = $(e.target);
      if (!tango.data("maxlength")) {
        tango.data("maxlength", Number(tango.attr("maxlength")));
        tango.removeAttr("maxlength");
      }
      limit = tango.data("maxlength");
      val = tango.val().split("");
      length = val.length;
      left = limit - length;
      msg = root.find(".lengthLeft");
      while (left < 0) {
        val.pop();
        left++;
        tango.val(val.join(""));
      }
      msg.html(left);
      return msg.toggleClass("lengthAlert", left < 11);
    });
  });

  /* --------------------------------------------
       Begin main.coffee
  --------------------------------------------
  */


  $(function() {
    return $("body").on("invalid", ":input,[needone]", function(e) {
      var t;
      if (e.target === this) {
        t = $(this);
        this.validityMsg = t.next(".validityMsg");
        if (!this.validityMsg.length) {
          this.validityMsg = $('<span class="validityMsg"><span><i>&#x58;</i><strong></strong></span></span>');
          t.after(this.validityMsg);
        }
        return this.validityMsg.addClass("invalid").find("strong").html(t.data("vMsg") || this.vMsg);
      }
    }).on("valid", ":input,[needone]", function(e) {
      var _ref2;
      if (e.target === this && ((_ref2 = this.validityMsg) != null ? _ref2.length : void 0)) {
        return this.validityMsg.removeClass("invalid");
      }
    });
  });

  if ($.browser.msie && $.browser.version === "6.0") {
    null;
  }

  if ($.browser.msie) {
    null;
  }

  $("ol").each(function() {
    return $("i", this).each(function(i) {
      return $(this).addClass("o" + (i + 1));
    });
  });

  $(".ul1").find(">*:even").addClass("even");

  tabMethod = function(e) {
    var root, that;
    that = $(this);
    root = that.parents(".tab");
    that.addClass("on").siblings().removeClass("on");
    return root.find(".content > *").removeClass("on").eq(that.index()).addClass("on");
  };

  $(".tab").on("mouseenter", "header > *:not(label,a)", tabMethod).on("click", "header > label,header > a", tabMethod).find("header>*:first").trigger("click").trigger("mouseenter");

  $("body").on("click", "label:has(:input:hidden)", function(e) {
    var t;
    if (e.target === this) {
      t = $(this);
      t.toggleClass("on");
      return t.find(":input").attr("checked", t.is(".on"));
    }
  });

  $(".gun").each(function() {
    var t;
    t = $(this);
    t.on("hover", function(e) {
      clearTimeout(this.timer);
      if (e.type === "mouseleave") {
        return this.timer = setTimeout(function() {
          return t.trigger("gun");
        }, $(this).data("speed") || 3000);
      }
    });
    return t.on("gun", function() {
      var first;
      t = $(this);
      first = t.find(">*:first");
      return first.animate({
        "marginTop": -first.outerHeight(true),
        "opacity": 0
      }, 800, "easeOutQuart", function() {
        t.append(first.css({
          "marginTop": 0
        }));
        first.fadeTo(400, 1);
        return t.trigger("mouseleave");
      });
    });
  }).trigger("gun");

}).call(this);
