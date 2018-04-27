O componente **ScRadio** é um extend do componente [b-radio](https://buefy.github.io/#/documentation/radio).

```jsx
    const radio = false;

    <div>
      <sc-radio
        v-model="radio"
        :native-value="true">Opção 1</sc-radio>

      <sc-radio
        v-model="radio"
        :native-value="false">Opção 2</sc-radio>
    </div>
```
