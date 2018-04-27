O componente **ScGoogleCharts** é um extend do componente [vue-charts](https://github.com/haydenbbickerton/vue-charts).

```jsx
    const options = {
      width: 455,
      height: 220,
      isStacked: 'true',
      colors: [
        '#a4c25c',
        '#da6f6f',
      ],
      fontSize: 11,
      fontName: 'Source Sans Pro',
    };

    const columns = [
      {
        id: 'period',
        label: 'Período',
        type: 'string',
        p: {},
      },
      {
        id: 'in_time',
        label: 'No prazo',
        type: 'number',
        p: {},
      },
      {
        id: 'out_of_time',
        label: 'Atrasados',
        type: 'number',
      },
    ];

    const rows = [
      [ '01/02 até 01/03', 10, 20 ],
      [ '01/02 até 01/03', 30, 40 ]
    ];

    <sc-google-charts
      chart-type="ColumnChart"
      :options="options"
      :columns="columns"
      :rows="rows" />
```
