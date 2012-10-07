各文件夹用途：
/img:图片
    blank.gif 透明gif
    loadingX.gif 有14，20，40，60四种尺寸的loading图片
/css:样式表
/js:脚本
/json:ajax调用的数据示例
src:前端开发中使用的源文件
    /layout:jade布局模块
    /inc:jade功能模块

icoMoon.pdf是目前所使用的字体图标一览表



# 表单验证

# 1.type检测：
# url(网址)
# email(邮箱)
# qq(从10000开始)
# zipcode(中国邮编，6位数字)
# id(身份证号为15或18位数字，或17位数字加x)
# tel(固定电话号码，如028-12345678，横线可省略)
# phone(手机号码,不带国家号)
# number(数字)

# 2.属性检测:
# required(必填项,无需属性值)
# maxlength,minlength(最大、最小输入长度,属性值为数字)
# ajaxValidation(远程验证,属性值为一个地址,期待返回一个对象：{vMsg:str,isValid:bool})
# matched(匹配验证,无需属性值,与同一form下有相同name属性的表单元素比较)
# needone(无需属性值,该元素下的表单元素必须至少有一项有值)
# pattern(正则表达式)

# 验证时机：submit,change,keyup。事件在body上进行监听，所以动态添加的元素同样有效，除非在中间阻止了冒泡。
# 触发事件：invalid,valid,pending
# 扩展：为ValiditAble原型的vMethods属性增加验证方法,方法名匹配type属性或自定义属性。
# 验证信息：可由data-vmsg指定，远程验证由返回对象的vMsg属性指定





节点复制和删除

容器元素增加类.cloneAble或.delAble,内部放置按钮.add和.del
events和deepevents属性以指定是否复制事件处理函数与深度复制,与jquery的clone方法对应


# 切换全选
# 容器元素增加类.toggleCheck,响应动作的checkbox增加类.checkAll
