// rem等比适配配置文件

(function(win) {
    const doc = win.document;
    const docElem = doc.documentElement;
    const DESIGN_DRAFT_WIDTH = 828;//设计稿宽度
    let dpr = Math.min(win.devicePixelRatio, 3);
    const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    //设置dpr,安卓6以下不支持initial-scale小于1
    const userAgent = navigator.userAgent.toLowerCase();
    const check = userAgent.match(/android\s([0-9.]*)/);
    if (check && check[1] && +check[1].split('.')[0] -6 < 0){
        dpr = 1;
    }
    docElem.dataset.dpr = `${dpr}`;
    const recalc = function() {
        const width = docElem.getBoundingClientRect().width;
        const font = width / DESIGN_DRAFT_WIDTH > 1 ? 1 : width / DESIGN_DRAFT_WIDTH;
        docElem.style.setProperty('font-size', `${100 * font}px`, 'important');
        window.htmlFontSize = 100 * font;
    };

    recalc();
    window.addEventListener(resizeEvt, recalc, false);
})(window)
