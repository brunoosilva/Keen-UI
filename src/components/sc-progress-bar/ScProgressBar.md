O componente **ScProgressBar**.

```jsx
  <div>
    <sc-progress-bar
      name="Progress Bar padrão"
      :partial="30"
      :total="100"
    />

    <sc-progress-bar
      size="small"
      name="Barra pequena"
      theme="info"
      :isPercent="true"
      :showPartial="true"
      :partial="50"
      :total="100"
    />

    <sc-progress-bar
      size="large"
      name="Barra grande"
      theme="danger"
      :isPercent="false"
      :showPartial="false"
      :partial="334"
      :total="434"
    />
  </div>
```