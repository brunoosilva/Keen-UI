O **ScChartMap** daddsasddasasd

```jsx 
  const mockData = {
    "AC": {
      "state_name": "Acre",
      "amount": 0,
      "by_delivery_method": []
    },
    "AL": {
      "state_name": "Alagoas",
      "amount": 5,
      "by_delivery_method": [
        {
          "delivery_method_id": 881,
          "delivery_method_name": "Correios - PAC - Origem",
          "amount": 1
        },
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 4
        }
      ]
    },
    "AP": {
      "state_name": "Amapá",
      "amount": 1,
      "by_delivery_method": [
        {
          "delivery_method_id": 22,
          "delivery_method_name": "JadLog Standard",
          "amount": 1
        }
      ]
    },
    "AM": {
      "state_name": "Amazonas",
      "amount": 7,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 4
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 3
        }
      ]
    },
    "BA": {
      "state_name": "Bahia",
      "amount": 33,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 8
        },
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 24
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 1
        }
      ]
    },
    "CE": {
      "state_name": "Ceará",
      "amount": 2,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 1
        },
        {
          "delivery_method_id": 1,
          "delivery_method_name": "Correios PAC",
          "amount": 1
        }
      ]
    },
    "DF": {
      "state_name": "Distrito Federal",
      "amount": 21,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 21
        }
      ]
    },
    "ES": {
      "state_name": "Espírito Santo",
      "amount": 22,
      "by_delivery_method": [
        {
          "delivery_method_id": 696,
          "delivery_method_name": "Total SPC Petlove",
          "amount": 20
        },
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 2
        }
      ]
    },
    "GO": {
      "state_name": "Goiás",
      "amount": 12,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 10
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 1
        },
        {
          "delivery_method_id": 1,
          "delivery_method_name": "Correios PAC",
          "amount": 1
        }
      ]
    },
    "MA": {
      "state_name": "Maranhão",
      "amount": 2,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 2
        }
      ]
    },
    "MT": {
      "state_name": "Mato Grosso",
      "amount": 16,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 14
        },
        {
          "delivery_method_id": 1,
          "delivery_method_name": "Correios PAC",
          "amount": 2
        }
      ]
    },
    "MS": {
      "state_name": "Mato Grosso do Sul",
      "amount": 11,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 11
        }
      ]
    },
    "MG": {
      "state_name": "Minas Gerais",
      "amount": 232,
      "by_delivery_method": [
        {
          "delivery_method_id": 881,
          "delivery_method_name": "Correios - PAC - Origem",
          "amount": 3
        },
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 124
        },
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 5
        },
        {
          "delivery_method_id": 179,
          "delivery_method_name": "Pot Speed Standard",
          "amount": 93
        },
        {
          "delivery_method_id": 22,
          "delivery_method_name": "JadLog Standard",
          "amount": 4
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 3
        }
      ]
    },
    "PA": {
      "state_name": "Pará",
      "amount": 5,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 2
        },
        {
          "delivery_method_id": 22,
          "delivery_method_name": "JadLog Standard",
          "amount": 1
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 1
        },
        {
          "delivery_method_id": 1,
          "delivery_method_name": "Correios PAC",
          "amount": 1
        }
      ]
    },
    "PB": {
      "state_name": "Paraíba",
      "amount": 7,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 7
        }
      ]
    },
    "PR": {
      "state_name": "Paraná",
      "amount": 66,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 28
        },
        {
          "delivery_method_id": 624,
          "delivery_method_name": "Translaguna",
          "amount": 1
        },
        {
          "delivery_method_id": 179,
          "delivery_method_name": "Pot Speed Standard",
          "amount": 37
        }
      ]
    },
    "PE": {
      "state_name": "Pernambuco",
      "amount": 24,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 2
        },
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 18
        },
        {
          "delivery_method_id": 22,
          "delivery_method_name": "JadLog Standard",
          "amount": 2
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 2
        }
      ]
    },
    "PI": {
      "state_name": "Piauí",
      "amount": 2,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 2
        }
      ]
    },
    "RJ": {
      "state_name": "Rio de Janeiro",
      "amount": 477,
      "by_delivery_method": [
        {
          "delivery_method_id": 1102,
          "delivery_method_name": "HG Expresso",
          "amount": 2
        },
        {
          "delivery_method_id": 881,
          "delivery_method_name": "Correios - PAC - Origem",
          "amount": 8
        },
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 16
        },
        {
          "delivery_method_id": 410,
          "delivery_method_name": "HG TRANSPORTES",
          "amount": 451
        }
      ]
    },
    "RN": {
      "state_name": "Rio Grande do Norte",
      "amount": 4,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 4
        }
      ]
    },
    "RS": {
      "state_name": "Rio Grande do Sul",
      "amount": 79,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 10
        },
        {
          "delivery_method_id": 624,
          "delivery_method_name": "Translaguna",
          "amount": 12
        },
        {
          "delivery_method_id": 179,
          "delivery_method_name": "Pot Speed Standard",
          "amount": 56
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 1
        }
      ]
    },
    "RO": {
      "state_name": "Rondônia",
      "amount": 1,
      "by_delivery_method": [
        {
          "delivery_method_id": 22,
          "delivery_method_name": "JadLog Standard",
          "amount": 1
        }
      ]
    },
    "RR": {
      "state_name": "Roraima",
      "amount": 0,
      "by_delivery_method": []
    },
    "SC": {
      "state_name": "Santa Catarina",
      "amount": 81,
      "by_delivery_method": [
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 23
        },
        {
          "delivery_method_id": 624,
          "delivery_method_name": "Translaguna",
          "amount": 7
        },
        {
          "delivery_method_id": 179,
          "delivery_method_name": "Pot Speed Standard",
          "amount": 51
        }
      ]
    },
    "SP": {
      "state_name": "São Paulo",
      "amount": 343,
      "by_delivery_method": [
        {
          "delivery_method_id": 1051,
          "delivery_method_name": "M2Log Standard",
          "amount": 20
        },
        {
          "delivery_method_id": 881,
          "delivery_method_name": "Correios - PAC - Origem",
          "amount": 9
        },
        {
          "delivery_method_id": 696,
          "delivery_method_name": "Total SPC Petlove",
          "amount": 183
        },
        {
          "delivery_method_id": 695,
          "delivery_method_name": "Total Express Petlove",
          "amount": 99
        },
        {
          "delivery_method_id": 22,
          "delivery_method_name": "JadLog Standard",
          "amount": 12
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 20
        }
      ]
    },
    "SE": {
      "state_name": "Sergipe",
      "amount": 4,
      "by_delivery_method": [
        {
          "delivery_method_id": 694,
          "delivery_method_name": "Total Express Aereo Petlove",
          "amount": 3
        },
        {
          "delivery_method_id": 8,
          "delivery_method_name": "Direct E-Direct",
          "amount": 1
        }
      ]
    },
    "TO": {
      "state_name": "Tocantins",
      "amount": 0,
      "by_delivery_method": []
    },
    "": {
      "state_name": "Other",
      "amount": 0,
      "by_delivery_method": []
    }
  }

  <sc-chart-map-svg
    :data="mockData"
  />
```