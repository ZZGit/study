function isTextElement(element) {
  return typeof element === "string";
}

function getChildrenElements(children) {
  if (!children) {
    return [];
  }
  if (!Array.isArray(children)) {
    return [children];
  }
  return children;
}

const render = (element, parentDom) => {
  let dom;
  if (isTextElement(element)) {
    dom = document.createTextNode(element);
  } else {
    const { type, props } = element;
    dom = document.createElement(type);
    const childrenElements = getChildrenElements(props.children);
    childrenElements.forEach((childElement) => {
      render(childElement, dom);
    });
  }
  parentDom.appendChild(dom);
};

export { render };
