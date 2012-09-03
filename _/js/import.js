// 导入js文档
//@codekit-prepend "jquery.easing.min.js";
//@codekit-prepend "jquery-ui.js";
//@codekit-prepend "jquery.ui.CN.js";
//@codekit-prepend "juicer.js";
//@codekit-prepend "observer.js";
//@codekit-prepend "formvalidate.js";
juicer.set({
    'tag::operationOpen': '{$',
    'tag::operationClose': '}',
    'tag::interpolateOpen': '${',
    'tag::interpolateClose': '}',
    'tag::noneencodeOpen': '$${',
    'tag::noneencodeClose': '}',
    'tag::commentOpen': '{#',
    'tag::commentClose': '}'
});