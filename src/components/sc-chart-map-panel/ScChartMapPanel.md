O **ScChartMapPanel** é um svg que recebe um objecto com lista de estados, para gerar um heatmap sobre o mapa nacional.

```jsx
  const mockData = {
    state_name: "São Paulo",
    amount: 343,
    by_delivery_method: [
      {
        delivery_method_id: 1051,
        delivery_method_name: 'M2Log Standard',
        amount: 20
      },
      {
        delivery_method_id: 881,
        delivery_method_name: 'Correios - PAC - Origem',
        amount: 9
      },
      {
        delivery_method_id: 696,
        delivery_method_name: 'Total SPC Petlove',
        amount: 183
      },
      {
        delivery_method_id: 695,
        delivery_method_name: 'Total Express Petlove',
        amount: 99
      },
      {
        delivery_method_id: 22,
        delivery_method_name: 'JadLog Standard',
        amount: 12
      },
      {
        delivery_method_id: 8,
        delivery_method_name: 'Direct E-Direct',
        amount: 20
      }
    ]
  };


  <sc-chart-map-panel :info="mockData" />
```
