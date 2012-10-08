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
# idCard(身份证号为15或18位数字，或17位数字加x)
# tel(固定电话号码，如028-12345678，横线可省略)
# phone(手机号码,不带国家号)
# number(数字)

# 2.属性检测:
# required(必填项,无需属性值)
# maxlength,minlength(最大、最小输入长度,属性值为数字)
# ajaxValidation(远程验证,属性值为一个地址,期待返回一个对象：{vMsg:str,isValid:bool})
# matched(匹配验证,无需属性值,与同一 form 下有相同 name 属性的表单元素比较)
# needone(无需属性值,该元素下的表单元素必须至少有一项有值)
# pattern(正则表达式)

# 验证时机：submit,change,keyup。事件在 body 上进行监听，所以动态添加的元素同样有效，除非在中间阻止了冒泡。
# 触发事件：invalid,valid,pending
# 扩展：为 ValiditAble 原型的 vMethods 属性增加验证方法,方法名匹配 type 属性或自定义属性。
# 验证信息：可由 data-vmsg 指定，远程验证由返回对象的 vMsg 属性指定





节点复制和删除

容器元素增加类 .cloneAble 或 .delAble ,内部放置按钮 .add 和 .del
events 和 deepevents 属性以指定是否复制事件处理函数与深度复制,与 jquery 的 clone 方法对应


# 切换全选
# 容器元素增加类 .toggleCheck ,响应动作的 checkbox 增加类 .checkAll


# number控件
# input:type=number
# 支持属性：max,min,step
# 动态添加的元素可通过 $(selector).numberUI() 进行初始化

# placerholder属性
# 动态添加的元素可通过 $(selector).placeholder() 进行初始化

observer 观察者
1.使用 data-observer 属性在发生改变的表单元素上指定它的观察者
2.0 在观察者标签上用 data-source 属性指定远程数据源，用 data-template-name data-item-before data-item-after 属性指定使用的模板
2.1 可用 autoload 属性让拥有 data-source 属性的元素在页面载入时即请求数据
2.2 可用 data-selected 属性指定模板刷新后的默认选择项目，如 data-selected="value1" 或 data-selected='["value2","value3"]'
2.3 可用 data-method 属性指定ajax请求的方法，默认是 post 方法
3.用 <script type="text/juicer" name="模板名称">模板内容</script> 设置模板









