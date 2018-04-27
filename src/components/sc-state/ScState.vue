<template>
  <b-select v-model="selected"
            v-bind="$attrs"
            @input="change"
            :placeholder="isUf ? 'UF' : 'Estado'"
            expanded>
    <option
      v-for="state in states"
      :value="state.key"
      :key="state.key">
      {{ isUf ? state.key : state.label }}
    </option>
  </b-select>
</template>

<script>
  export default {
    name: 'sc-state',
    props: {
      value: {
        type: [String, Number, Boolean, Object, Array, Symbol, Function],
        default: null,
      },
      /**
      * Se isUf for false o select renderiza como Estado, caso contrário como UF
      */
      isUf: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        selected: this.value,
        states: [
          {
            key: 'AC',
            label: 'Acre',
          },
          {
            key: 'AL',
            label: 'Alagoas',
          },
          {
            key: 'AM',
            label: 'Amazonas',
          },
          {
            key: 'AP',
            label: 'Amapá',
          },
          {
            key: 'BA',
            label: 'Bahia',
          },
          {
            key: 'CE',
            label: 'Ceará',
          },
          {
            key: 'DF',
            label: 'Distrito Federal',
          },
          {
            key: 'ES',
            label: 'Espírito Santo',
          },
          {
            key: 'GO',
            label: 'Goiás',
          },
          {
            key: 'MA',
            label: 'Maranhão',
          },
          {
            key: 'MG',
            label: 'Minas Gerais',
          },
          {
            key: 'MS',
            label: 'Mato Grosso do Sul',
          },
          {
            key: 'MT',
            label: 'Mato Grosso',
          },
          {
            key: 'PA',
            label: 'Pará',
          },
          {
            key: 'PB',
            label: 'Paraíba',
          },
          {
            key: 'PE',
            label: 'Pernambuco',
          },
          {
            key: 'PI',
            label: 'Piauí',
          },
          {
            key: 'PR',
            label: 'Paraná',
          },
          {
            key: 'RJ',
            label: 'Rio de Janeiro',
          },
          {
            key: 'RN',
            label: 'Rio Grande do Norte',
          },
          {
            key: 'RO',
            label: 'Rondônia',
          },
          {
            key: 'RR',
            label: 'Roraima',
          },
          {
            key: 'RS',
            label: 'Rio Grande do Sul',
          },
          {
            key: 'SC',
            label: 'Santa Catarina',
          },
          {
            key: 'SE',
            label: 'Sergipe',
          },
          {
            key: 'SP',
            label: 'São Paulo',
          },
          {
            key: 'TO',
            label: 'Tocantins',
          },
        ],
      };
    },
    watch: {
      value(value) {
        this.selected = value;
      },
      selected(value) {
        this.$emit('input', value);
      },
    },
    methods: {
      change() {
        this.$emit('change', this.states.find(state => state.key === this.selected));
      },
    },
    created() {
      this.selected = this.value;
    },
  };
</script>
