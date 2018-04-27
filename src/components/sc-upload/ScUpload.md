O componente **ScUpload** é um extend do componente [b-upload](https://buefy.github.io/#/documentation/upload), sendo uma casca para o `<input type="file" />` deixando mais bonito e com algumas features complementares.

```jsx
    let files = [];

    <sc-field class="file">
      <sc-upload v-model="files">
        <a class="button is-primary">
          <sc-icon icon="upload"></sc-icon>
          <span>Clique para selecionar um arquivo</span>
        </a>
      </sc-upload>
    </sc-field>
```

