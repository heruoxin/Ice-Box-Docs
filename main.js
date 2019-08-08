setTimeout(() => {
    document.body.innerHTML = document.body.innerHTML.replace(/iceboxdoc.catchingnow.com/g, window.location.host);
    if (/\.cn$/.test(window.location.hostname)) {
        document.body.innerHTML = document.body.innerHTML.replace(/<small>Hosted on GitHub Pages.*<\/small>/g, `<a href="http://beian.miit.gov.cn">蜀ICP备19024627号-1</a>`)
    }
}, 800);
