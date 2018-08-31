var factory = function (option) {
    var img404Url = option.errorImgUrl || "https://images.uiiiuiii.com/wp-content/uploads/2017/10/i-ui171004-1-2.jpg"

    var onError = function () {
        set(this, img404Url)
    }

    var onLoad = function () {
        setStyle(this, {
            opacity: 1,
            transition: 'all .35s linear'
        })
    }

    var isImgTag = function (v) {
        return v && v.tagName.toLowerCase() === 'img'
    }

    function set(el, v) {
        setStyle(el, {
            opacity: .5
        })

        el.setAttribute('src', v)
        el.setAttribute('data-src', v)
    }

    function setStyle(el, obj) {
        for(var key in obj) {
            el.style[key] = obj[key]
        }
    }

    var setAdaptedUrl = function (el, ch, durl, url) {
        var elTop = el.getBoundingClientRect().top
        var res = elTop - ch
        res >= 0 ? set(el, durl) : set(el, url) 
    }

    function lazyLoad(el, url) {
        if (!url) { return set(el, '') }

        var defultImgUrl = option.defultImgUrl || 'https://www.iqiyipic.com/common/fix/site-v4/qy-mod-img_425_311.png'

        var macroTask = function () {
            var html = document.documentElement
            var body = document.body
            var clientHeight = Math.min(html.clientHeight, body.clientHeight)


            window.addEventListener('resize', function () {
                clientHeight = Math.min(html.clientHeight, body.clientHeight)
            })

            setAdaptedUrl(el, clientHeight, defultImgUrl, url)

            var handleImgLazyLoad = function () {
                if (el.getAttribute('src') === url) {
                    window.removeEventListener('scorll', handleImgLazyLoad)
                    return;
                }
                setAdaptedUrl(el, clientHeight, defultImgUrl, url)
            }

            el.getAttribute('src') !== url && window.addEventListener('scroll', handleImgLazyLoad)
        }

        setTimeout(macroTask, 6)
    }

    var adapter = option.lazy ?  lazyLoad : set

    return {
        bind: function (el, binding, vnode) {
            if (!isImgTag(el)) return;
            adapter(el, binding.value)
            el.addEventListener('load', onLoad.bind(el))
            el.addEventListener('error', onError.bind(el))
        },
        update: function (el, binding) {
            adapter(el, binding.value)
        },
        unbind: function (el) {
            el.removeEventListener('error', onError)
            el.addEventListener('load', onLoad)
        }
    }
}

export default {
    install: function (Vue, option) {
        Vue.directive('src', factory(option))
    }
}