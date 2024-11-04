## Reference
* [Build your own Front-end Framework//Library](https://build-your-own-x.vercel.app/#build-your-own-front-end-framework--library)
	* [Build your own React](https://pomb.us/build-your-own-react/)
	- [**JavaScript**: _A DIY guide to build your own React_](https://github.com/hexacta/didact)
	- [**JavaScript**: _Gooact: React in 160 lines of JavaScript_](https://medium.com/@sweetpalma/gooact-react-in-160-lines-of-javascript-44e0742ad60f)
	- [**JavaScript**: _Learn how React Reconciler package works by building your own lightweight React DOM_](https://hackernoon.com/learn-you-some-custom-react-renderers-aed7164a4199)
	- [**JavaScript**: _Build Yourself a Redux_](https://zapier.com/engineering/how-to-build-redux/)
	- [**JavaScript**: _Let’s Write Redux!_](https://www.jamasoftware.com/blog/lets-write-redux/)
	- [**JavaScript**: _How to write your own Virtual DOM_](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)
	- [**JavaScript**: _Building a frontend framework, from scratch, with components (templating, state, VDOM)_](https://mfrachet.github.io/create-frontend-framework/)
	- [**JavaScript**: _Build your own React_](https://pomb.us/build-your-own-react/)
	- [\[Video(33min)\]\[JavaScript\]:Building React From Scratch_](https://www.youtube.com/watch?v=_MAD4Oly9yg) 
	- [\[Video\]\[JavaScrip\] Building a Custom React Renderer_](https://youtu.be/CGpMlWVcHok) 
	- [\[Video\]\[JavaScrip\] Redux: Implementing Store from Scratch_](https://egghead.io/lessons/react-redux-implementing-store-from-scratch) 
	-  [**JavaScript**: _WTF is JSX (Let's Build a JSX Renderer)_](https://jasonformat.com/wtf-is-jsx/)

## Step
<<<<<<< HEAD
- **Step IV**: Fibers
- **Step V**: Render and Commit Phases
- **Step VI**: Reconciliation
- **Step VII**: Function Components
- **Step VIII**: Hooks
=======
- [ ]  **Step III**: Concurrent Mode
- [ ]  **Step IV**: Fibers
- [ ]  **Step V**: Render and Commit Phases
- [ ]  **Step VI**: Reconciliation
- [ ]  **Step VII**: Function Components
- [ ]  **Step VIII**: Hooks
>>>>>>> 0544b25 (note backup: 2024-11-04 16:07:29)

## Step0
```js
const element = {
  type: "h1",
  props: {
      title: "foo",
      children: "Hello1"
  }
}

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children
node.appendChild(text)

const container = document.getElementById('app')
container.appendChild(node)
```

## Step1 - 2: createElement() and render()

`my-react.js`
```js
const TEXT_ELEMENT = "TEXT ELEMENT";

const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === "object"
        ? child : createTextElement(children)
      )
    }
  }
}

const createTextElement = text => ({
  type: TEXT_ELEMENT,
  props: {
    nodeValue: text,
    children: []
  }
})

const render = (element, container) => {
  const dom =
    element.type == TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type)


  const isProperty = key => key !== "children"
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach(child =>
    render(child, dom)
  )

  container.appendChild(dom)
}

const MyReact = {
  createElement,
  render
}

export default MyReact
```

`main.jsx`
```jsx
import MyReact from './my-react'

/** @jsx MyReact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
)

const container = document.getElementById('app')
MyReact.render(element, container)
```

