import Vue from 'vue';
import ScState from './ScState';

describe('ScState.vue', () => {
  let vm;
  let states;

  beforeEach(() => {
    states = [
      {
        key: "AC",
        label: "Acre"
      },
      {
        key: "AL",
        label: "Alagoas"
      },
      {
        key: "AM",
        label: "Amazonas"
      },
      {
        key: "AP",
        label: "Amapá"
      },
      {
        key: "BA",
        label: "Bahia"
      },
      {
        key: "CE",
        label: "Ceará"
      },
      {
        key: "DF",
        label: "Distrito Federal"
      },
      {
        key: "ES",
        label: "Espírito Santo"
      },
      {
        key: "GO",
        label: "Goiás"
      },
      {
        key: "MA",
        label: "Maranhão"
      },
      {
        key: "MG",
        label: "Minas Gerais"
      },
      {
        key: "MS",
        label: "Mato Grosso do Sul"
      },
      {
        key: "MT",
        label: "Mato Grosso"
      },
      {
        key: "PA",
        label: "Pará"
      },
      {
        key: "PB",
        label: "Paraíba"
      },
      {
        key: "PE",
        label: "Pernambuco"
      },
      {
        key: "PI",
        label: "Piauí"
      },
      {
        key: "PR",
        label: "Paraná"
      },
      {
        key: "RJ",
        label: "Rio de Janeiro"
      },
      {
        key: "RN",
        label: "Rio Grande do Norte"
      },
      {
        key: "RO",
        label: "Rondônia"
      },
      {
        key: "RR",
        label: "Roraima"
      },
      {
        key: "RS",
        label: "Rio Grande do Sul"
      },
      {
        key: "SC",
        label: "Santa Catarina"
      },
      {
        key: "SE",
        label: "Sergipe"
      },
      {
        key: "SP",
        label: "São Paulo"
      },
      {
        key: "TO",
        label: "Tocantins"
      },
    ];

    const Constructor = Vue.extend(ScState);
    vm = new Constructor().$mount();
  });

  it('check name component', () => {
    expect(ScState.name).toEqual('sc-state');
  });

  it('check default data', () => {
    expect(vm.states).toEqual(states);
  });
});
