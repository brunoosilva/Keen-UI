O **ScChartMap** vincula os componentes map-panel e map-svg em um, listando os dados de entrega de cada um dos estados.


```jsx 
  const mockData = {
    dashboard_orders_per_method: {
      total_amount_of_volumes: 3681,
      shipment_amount_array: [
        {
          dm_name: 'HG TRANSPORTES',
          delivery_method_id: 410,
          amount: 1031,
          percentage: 100,
          $$hashKey: 'object:38',
        },
        {
          dm_name: 'Total Express Petlove',
          delivery_method_id: 695,
          amount: 747,
          percentage: 42.01349831271091,
          $$hashKey: 'object:39',
        },
        {
          dm_name: 'Carriers',
          delivery_method_id: 51,
          amount: 426,
          percentage: 19.328493647912886,
          $$hashKey: 'object:40',
        },
        {
          dm_name: 'Total SPC Petlove',
          delivery_method_id: 696,
          amount: 359,
          percentage: 14.007023019898556,
          $$hashKey: 'object:41',
        },
        {
          dm_name: 'Rede Sul Standard',
          delivery_method_id: 885,
          amount: 219,
          percentage: 7.872034507548526,
          $$hashKey: 'object:42',
        },
        {
          dm_name: 'Pot Speed Standard',
          delivery_method_id: 179,
          amount: 206,
          percentage: 6.894243641231593,
          $$hashKey: 'object:43',
        },
        {
          dm_name: 'Dissudes Standard',
          delivery_method_id: 14,
          amount: 202,
          percentage: 6.332288401253918,
          $$hashKey: 'object:44',
        },
        {
          dm_name: 'Total Express Aereo Petlove',
          delivery_method_id: 694,
          amount: 123,
          percentage: 3.712647147600362,
          $$hashKey: 'object:45',
        },
        {
          dm_name: 'Transfolha Standard',
          delivery_method_id: 78,
          amount: 83,
          percentage: 2.4440518256772674,
          $$hashKey: 'object:46',
        },
        {
          dm_name: 'Fedex Standard',
          delivery_method_id: 1016,
          amount: 68,
          percentage: 1.9630484988452657,
          $$hashKey: 'object:47',
        },
        {
          dm_name: 'ATLAS Standard',
          delivery_method_id: 18,
          amount: 45,
          percentage: 1.2824166429182102,
          $$hashKey: 'object:48',
        },
        {
          dm_name: 'Direct E-Direct',
          delivery_method_id: 8,
          amount: 29,
          percentage: 0.819672131147541,
          $$hashKey: 'object:49',
        },
        {
          dm_name: 'Transfolha GSP Standard',
          delivery_method_id: 308,
          amount: 24,
          percentage: 0.673778775968557,
          $$hashKey: 'object:50',
        },
        {
          dm_name: 'Translaguna',
          delivery_method_id: 624,
          amount: 23,
          percentage: 0.6415620641562064,
          $$hashKey: 'object:51',
        },
        {
          dm_name: 'M2Log Standard',
          delivery_method_id: 1051,
          amount: 23,
          percentage: 0.6374722838137472,
          $$hashKey: 'object:52',
        },
        {
          dm_name: 'JadLog Standard',
          delivery_method_id: 22,
          amount: 22,
          percentage: 0.6060606060606061,
          $$hashKey: 'object:53',
        },
        {
          dm_name: 'Correios - PAC - Origem',
          delivery_method_id: 881,
          amount: 20,
          percentage: 0.547945205479452,
          $$hashKey: 'object:54',
        },
        {
          dm_name: 'Pot Speed Standard SC',
          delivery_method_id: 830,
          amount: 14,
          percentage: 0.38209606986899564,
          $$hashKey: 'object:55',
        },
        {
          dm_name: 'Correios PAC',
          delivery_method_id: 1,
          amount: 12,
          percentage: 0.3264417845484222,
          $$hashKey: 'object:56',
        },
        {
          dm_name: 'Transfolha Aereo Standard',
          delivery_method_id: 80,
          amount: 2,
          percentage: 0.054377379010331704,
          $$hashKey: 'object:57',
        },
        {
          dm_name: 'Correios Sedex',
          delivery_method_id: 2,
          amount: 1,
          percentage: 0.02718129926610492,
          $$hashKey: 'object:58',
        },
        {
          dm_name: 'Correios - Sedex - Origem',
          delivery_method_id: 882,
          amount: 1,
          percentage: 0.02717391304347826,
          $$hashKey: 'object:59',
        },
        {
          dm_name: 'HG Expresso',
          delivery_method_id: 1102,
          amount: 1,
          percentage: 0.027166530834012496,
          $$hashKey: 'object:60',
        },
      ],
    },
    dashboard_orders_per_state: {
      total_amount_of_volumes: 3681,
      shipment_amount: {
        AC: {
          state_name: 'Acre',
          amount: 3,
          by_delivery_method: [
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 1,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 2,
            },
          ],
        },
        AL: {
          state_name: 'Alagoas',
          amount: 14,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 7,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 6,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 1,
            },
          ],
        },
        AP: {
          state_name: 'Amapá',
          amount: 1,
          by_delivery_method: [
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 1,
            },
          ],
        },
        AM: {
          state_name: 'Amazonas',
          amount: 4,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 1,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 3,
            },
          ],
        },
        BA: {
          state_name: 'Bahia',
          amount: 87,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 14,
            },
            {
              delivery_method_id: 881,
              delivery_method_name: 'Correios - PAC - Origem',
              amount: 1,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 19,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 44,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 1,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 3,
            },
            {
              delivery_method_id: 8,
              delivery_method_name: 'Direct E-Direct',
              amount: 1,
            },
            {
              delivery_method_id: 2,
              delivery_method_name: 'Correios Sedex',
              amount: 1,
            },
            {
              delivery_method_id: 1,
              delivery_method_name: 'Correios PAC',
              amount: 3,
            },
          ],
        },
        CE: {
          state_name: 'Ceará',
          amount: 16,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 5,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 7,
            },
            {
              delivery_method_id: 80,
              delivery_method_name: 'Transfolha Aereo Standard',
              amount: 1,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 1,
            },
            {
              delivery_method_id: 8,
              delivery_method_name: 'Direct E-Direct',
              amount: 1,
            },
            {
              delivery_method_id: 1,
              delivery_method_name: 'Correios PAC',
              amount: 1,
            },
          ],
        },
        DF: {
          state_name: 'Distrito Federal',
          amount: 49,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 1,
            },
            {
              delivery_method_id: 881,
              delivery_method_name: 'Correios - PAC - Origem',
              amount: 1,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 30,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 13,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 4,
            },
          ],
        },
        ES: {
          state_name: 'Espírito Santo',
          amount: 57,
          by_delivery_method: [
            {
              delivery_method_id: 881,
              delivery_method_name: 'Correios - PAC - Origem',
              amount: 1,
            },
            {
              delivery_method_id: 696,
              delivery_method_name: 'Total SPC Petlove',
              amount: 45,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 8,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 1,
            },
            {
              delivery_method_id: 1,
              delivery_method_name: 'Correios PAC',
              amount: 2,
            },
          ],
        },
        GO: {
          state_name: 'Goiás',
          amount: 28,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 3,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 11,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 6,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 2,
            },
            {
              delivery_method_id: 8,
              delivery_method_name: 'Direct E-Direct',
              amount: 2,
            },
            {
              delivery_method_id: 1,
              delivery_method_name: 'Correios PAC',
              amount: 4,
            },
          ],
        },
        MA: {
          state_name: 'Maranhão',
          amount: 9,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 4,
              $$hashKey: 'object:100',
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 3,
              $$hashKey: 'object:101',
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 1,
              $$hashKey: 'object:102',
            },
            {
              delivery_method_id: 80,
              delivery_method_name: 'Transfolha Aereo Standard',
              amount: 1,
              $$hashKey: 'object:103',
            },
          ],
          percentage: '0%',
        },
        MT: {
          state_name: 'Mato Grosso',
          amount: 34,
          by_delivery_method: [
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 29,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 3,
            },
            {
              delivery_method_id: 1,
              delivery_method_name: 'Correios PAC',
              amount: 2,
            },
          ],
        },
        MS: {
          state_name: 'Mato Grosso do Sul',
          amount: 39,
          by_delivery_method: [
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 30,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 7,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 2,
            },
          ],
        },
        MG: {
          state_name: 'Minas Gerais',
          amount: 401,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 7,
            },
            {
              delivery_method_id: 881,
              delivery_method_name: 'Correios - PAC - Origem',
              amount: 3,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 280,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 15,
            },
            {
              delivery_method_id: 179,
              delivery_method_name: 'Pot Speed Standard',
              amount: 74,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 7,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 13,
            },
            {
              delivery_method_id: 8,
              delivery_method_name: 'Direct E-Direct',
              amount: 2,
            },
          ],
        },
        PA: {
          state_name: 'Pará',
          amount: 8,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 1,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 4,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 1,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 2,
            },
          ],
        },
        PB: {
          state_name: 'Paraíba',
          amount: 19,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 7,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 9,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 3,
            },
          ],
        },
        PR: {
          state_name: 'Paraná',
          amount: 157,
          by_delivery_method: [
            {
              delivery_method_id: 885,
              delivery_method_name: 'Rede Sul Standard',
              amount: 64,
            },
            {
              delivery_method_id: 830,
              delivery_method_name: 'Pot Speed Standard SC',
              amount: 3,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 39,
            },
            {
              delivery_method_id: 624,
              delivery_method_name: 'Translaguna',
              amount: 5,
            },
            {
              delivery_method_id: 179,
              delivery_method_name: 'Pot Speed Standard',
              amount: 43,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 2,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 1,
            },
          ],
        },
        PE: {
          state_name: 'Pernambuco',
          amount: 27,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 9,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 1,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 13,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 1,
            },
            {
              delivery_method_id: 8,
              delivery_method_name: 'Direct E-Direct',
              amount: 3,
            },
          ],
        },
        PI: {
          state_name: 'Piauí',
          amount: 6,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 1,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 5,
            },
          ],
        },
        RJ: {
          state_name: 'Rio de Janeiro',
          amount: 1099,
          by_delivery_method: [
            {
              delivery_method_id: 1102,
              delivery_method_name: 'HG Expresso',
              amount: 1,
            },
            {
              delivery_method_id: 881,
              delivery_method_name: 'Correios - PAC - Origem',
              amount: 7,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 54,
            },
            {
              delivery_method_id: 624,
              delivery_method_name: 'Translaguna',
              amount: 2,
            },
            {
              delivery_method_id: 410,
              delivery_method_name: 'HG TRANSPORTES',
              amount: 1031,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 2,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 2,
            },
          ],
        },
        RN: {
          state_name: 'Rio Grande do Norte',
          amount: 6,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 3,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 3,
            },
          ],
        },
        RS: {
          state_name: 'Rio Grande do Sul',
          amount: 183,
          by_delivery_method: [
            {
              delivery_method_id: 885,
              delivery_method_name: 'Rede Sul Standard',
              amount: 82,
            },
            {
              delivery_method_id: 830,
              delivery_method_name: 'Pot Speed Standard SC',
              amount: 1,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 42,
            },
            {
              delivery_method_id: 624,
              delivery_method_name: 'Translaguna',
              amount: 8,
            },
            {
              delivery_method_id: 179,
              delivery_method_name: 'Pot Speed Standard',
              amount: 49,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 1,
            },
          ],
        },
        RO: {
          state_name: 'Rondônia',
          amount: 5,
          by_delivery_method: [
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 3,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 1,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 1,
            },
          ],
        },
        RR: {
          state_name: 'Roraima',
          amount: 0,
          by_delivery_method: [],
        },
        SC: {
          state_name: 'Santa Catarina',
          amount: 174,
          by_delivery_method: [
            {
              delivery_method_id: 885,
              delivery_method_name: 'Rede Sul Standard',
              amount: 73,
            },
            {
              delivery_method_id: 882,
              delivery_method_name: 'Correios - Sedex - Origem',
              amount: 1,
            },
            {
              delivery_method_id: 830,
              delivery_method_name: 'Pot Speed Standard SC',
              amount: 10,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 40,
            },
            {
              delivery_method_id: 624,
              delivery_method_name: 'Translaguna',
              amount: 8,
            },
            {
              delivery_method_id: 179,
              delivery_method_name: 'Pot Speed Standard',
              amount: 40,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 2,
            },
          ],
        },
        SP: {
          state_name: 'São Paulo',
          amount: 1227,
          by_delivery_method: [
            {
              delivery_method_id: 1051,
              delivery_method_name: 'M2Log Standard',
              amount: 23,
            },
            {
              delivery_method_id: 881,
              delivery_method_name: 'Correios - PAC - Origem',
              amount: 6,
            },
            {
              delivery_method_id: 696,
              delivery_method_name: 'Total SPC Petlove',
              amount: 314,
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 166,
            },
            {
              delivery_method_id: 308,
              delivery_method_name: 'Transfolha GSP Standard',
              amount: 24,
            },
            {
              delivery_method_id: 78,
              delivery_method_name: 'Transfolha Standard',
              amount: 42,
            },
            {
              delivery_method_id: 51,
              delivery_method_name: 'Carriers',
              amount: 426,
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 4,
            },
            {
              delivery_method_id: 14,
              delivery_method_name: 'Dissudes Standard',
              amount: 202,
            },
            {
              delivery_method_id: 8,
              delivery_method_name: 'Direct E-Direct',
              amount: 20,
            },
          ],
        },
        SE: {
          state_name: 'Sergipe',
          amount: 20,
          by_delivery_method: [
            {
              delivery_method_id: 1016,
              delivery_method_name: 'Fedex Standard',
              amount: 5,
            },
            {
              delivery_method_id: 881,
              delivery_method_name: 'Correios - PAC - Origem',
              amount: 1,
            },
            {
              delivery_method_id: 694,
              delivery_method_name: 'Total Express Aereo Petlove',
              amount: 10,
            },
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 4,
            },
          ],
        },
        TO: {
          state_name: 'Tocantins',
          amount: 8,
          by_delivery_method: [
            {
              delivery_method_id: 18,
              delivery_method_name: 'ATLAS Standard',
              amount: 4,
              $$hashKey: 'object:108',
            },
            {
              delivery_method_id: 22,
              delivery_method_name: 'JadLog Standard',
              amount: 2,
              $$hashKey: 'object:109',
            },
            {
              delivery_method_id: 695,
              delivery_method_name: 'Total Express Petlove',
              amount: 2,
              $$hashKey: 'object:110',
            },
          ],
          percentage: '0%',
        },
        '': {
          state_name: 'Other',
          amount: 0,
          by_delivery_method: [],
        },
      },
    },
  };


  <sc-chart-map
    :info="mockData.dashboard_orders_per_state.shipment_amount"
    :total="mockData.dashboard_orders_per_method.total_amount_of_volumes"
  />
```