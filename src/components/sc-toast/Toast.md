O componente **ScToast** é um extend do componente [b-toast](https://buefy.github.io/#/documentation/toast).

```jsx
    const ScToast = require('./index').default;

    <p>
      <button
        class="button is-primary"
        @click="ScToast.success('Sucesso')">Toast de sucesso</button>

      <button
        class="button is-danger"
        @click="ScToast.danger('Erro')">Toast de erro</button>

      <button
        class="button is-info"
        @click="ScToast.open({ message: 'Custom', position: 'is-top-right', type: 'is-info' })">Toast customizado</button>
    </p>
```
