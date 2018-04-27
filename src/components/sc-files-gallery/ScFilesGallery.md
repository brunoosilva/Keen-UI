O componente **ScFileGallery** é uma galeria de visualização de arquivos, suporta os seguintes formatos:

* Visualização de texto com Highlighter para 148 linguagens
* Visualização de imagens (Em breve)

```jsx
    const ScFilesGallery = require('./index').default;

    const files = [
      {
        fileName: 'test.xml',
        fileUrl: 'https://www.w3schools.com/xml/note.xml',
        mimeType: 'text/xml',
      }
    ];

    <button class="button is-primary" @click="ScFilesGallery.open({ files })">Abrir galeria</button>
```
