 * [Hydration Error]
 * https://nextjs.org/docs/messages/react-hydration-error
 * [What is hydration in React based applications? | Atomized Objects](https://atomizedobjects.com/blog/react/what-is-hydration-in-react-based-applications/)


## What is react hyration

The hydration step will take this pre-built HTML, compare it to your component tree, and then refresh it with the live react components which will add on all the event listeners and JavaScript that you need to make your application fully functional.


### React hydration vs React render

React render (`ReactDOM.render`) can be used to render an application on an empty route from scratch, whereas React hydrate (`ReactDOM.hydrate`) can be used on a pre-built HTML template to “hydrate” the application which means to add back in any functionality your JavaScript added to your elements such as event listeners, and so on