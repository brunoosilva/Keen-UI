O componente **ScUploadBox** é um extend do componente [sc-upload](#scupload), com a opção de **drag & drop** ativado e cria um box com uma mensagem e icone e também a lista de arquivos escolhido. 

```jsx
    let files = [];

    <sc-upload-box label="Arquivos"
                   message="Arraste e solte seus arquivos ou clique aqui" 
                   v-model="files"></sc-upload-box>
```
