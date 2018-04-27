O componente **ScPageBase** serve como modelo de página e também faz uso do componente interno **ScSpinner**. Para visualizar o spinner mude o parametro **loading** para true para visualizar o spinner com pelicula.

```jsx
    <sc-page-base
        title="Johns - Upton" 
        subTitle="Re-contextualized uniform Graphic Interface"
        :loading="false">

        <h3>Welcome, <strong>Braden</strong></h3>
        <p>Ipsa omnis nihil. Odio velit excepturi optio veritatis. Ea et est voluptatum deserunt repellat qui aspernatur quod non.</p>
        <p>44555 Muller Village, Faymouth</p>
    </sc-page-base>
```