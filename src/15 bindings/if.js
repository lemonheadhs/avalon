// bindingHandlers["if"] = bindingHandlers.html
bindingExecutors["if"] = function(val, elem) {
    if (val) { //插回DOM树
        if (elem.nodeType === 8) {
            elem.parentNode.replaceChild(data.template, elem)
            elem = data.element = data.template //这时可能为null
        }
        if (elem.getAttribute(data.name)) {
            elem.removeAttribute(data.name)
            scanAttr(elem, data.vmodels)
        }
    } else { //移出DOM树，并用注释节点占据原位置
        if (elem.nodeType === 1) {
            var node = data.element = DOC.createComment("ms-if")
            elem.parentNode.replaceChild(node, elem)
            data.template = elem //元素节点
            ifGroup.appendChild(elem)
        }
    }
}

