O componente **ScState** é utilziado como parte do formulário de **ScAddress** e entrega um select que contem as silgras dos Estados ou os nomes completos dos Estados. Para renderizar as siglas basta informar o parametro `:isUf="true"` ou `:isUf="false"` para exibir os Estados.

```jsx
    <div class="columns">
        <div class="column">
            <sc-state
                :isUf="true">
            </sc-state>
        </div>
        <div class="column">
            <sc-state
                :isUf="false">
            </sc-state>
        </div>
    </div>
```