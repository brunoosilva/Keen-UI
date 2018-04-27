O componente **ScHighlighter** é um extend do componente [vue-prismjs](https://github.com/creotip/vue-prism) que
usa a lib [PrismJS](http://prismjs.com/).

```jsx
    const code = `
      function test() {
        console.log('Hello');
      }
    `;

    <sc-highlighter :code="code"></sc-highlighter>
```
