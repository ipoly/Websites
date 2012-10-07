// Generated by CoffeeScript 1.3.3
(function() {
  var ValiditAble, tabMethod;

  ValiditAble = (function() {

    function ValiditAble(el) {
      this.isValidtAble = true;
      return $.extend(el, this);
    }

    ValiditAble.prototype.checkValidity = function() {
      var method, t;
      t = $(this);
      if (t.is(":text,textarea,:password")) {
        t.val($.trim(t.val()));
      }
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
        var t;
        t = $(this);
        if (!t.val()) {
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
      id: function() {
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
        var reg, t, val;
        t = $(this);
        val = t.val();
        if (!val.length) {
          return "pending";
        }
        reg = /^\d*\.?\d+$/;
        if (!reg.test(val)) {
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
    return $("body").on("change keyup", ":input", function() {
      if (!this.isValidtAble) {
        new ValiditAble(this);
      }
      clearTimeout(this.vTimer);
      return this.vTimer = setTimeout($.proxy(this, "checkValidity"), 300);
    });
  });

  /* --------------------------------------------
       Begin cloneable.coffee
  --------------------------------------------
  */


  $("body").on("click", ".cloneAble .add", function(e) {
    var clone, root;
    root = $(this).closest(".cloneAble");
    clone = root.clone().hide();
    clone.find(":input").val("");
    clone.find(".validityMsg").remove();
    root.toggleClass("cloneAble delAble").after(clone);
    clone.fadeIn();
    return e.preventDefault();
  });

  $("body").on("click", ".delAble .del", function(e) {
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
      var _ref;
      if (e.target === this && ((_ref = this.validityMsg) != null ? _ref.length : void 0)) {
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

  $("input[type=number]").each(function() {
    var that, wrapper;
    that = $(this);
    wrapper = $("<span class='number'><i class='less'/><i class='more'/></span>");
    that.after(wrapper);
    return wrapper.find(".less").after(that);
  });

  $(".number").on("click", function(e) {
    var input, tango, val;
    tango = $(e.target);
    input = $("input", this);
    val = parseInt(input.val(), 10) || 0;
    if (tango.is(".less")) {
      val--;
    } else if (tango.is(".more")) {
      val++;
    }
    return input.val(val).trigger("change");
  });

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

  $("table").on("change", ".checkAll", function(e) {
    var t;
    t = $(this);
    return t.closest("table").find(":checkbox:not(.checkAll)").attr("checked", !!t.attr("checked"));
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

  $("#questionForm").on("keyup", function(e) {
    var limit, t, txt;
    t = $(e.target);
    console.log(11);
    if (t.is("textarea")) {
      txt = t.val().split("");
      limit = parseInt(t.attr("max"), 10);
      while (txt.length > limit) {
        txt.pop();
      }
      t.val(txt.join(""));
      return $("h2 span", this).html("还可以输入" + (limit - txt.length) + "个字");
    }
  });

}).call(this);
