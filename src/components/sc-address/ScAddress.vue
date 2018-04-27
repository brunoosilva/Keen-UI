<template>
  <section>
    <div class="columns">
      <sc-field
        label="CEP"
        class="column is-6">
        <sc-field>
          <sc-input
            placeholder="CEP"
            v-model="address.shipping_zip_code"
            v-mask="'cep'"
            @input="changeZipCode"
            :loading="loading" />
        </sc-field>
      </sc-field>
    </div>

    <div class="columns">
      <sc-field
        label="Logradouro"
        class="column is-8">
        <sc-field>
          <sc-input
            placeholder="Logradouro"
            v-model="address.shipping_address"
            :disable="loading"
            expanded />
        </sc-field>
      </sc-field>

      <sc-field
        label="Número"
        class="column is-4">
        <sc-input
          placeholder="Número"
          ref="shipping_number"
          v-model="address.shipping_number" />
      </sc-field>
    </div>

    <div class="columns">
      <sc-field
        label="Complemento"
        class="column">
        <sc-field>
          <sc-input
            placeholder="Complemento"
            v-model="address.shipping_additional"
            expanded />
        </sc-field>
      </sc-field>
    </div>

    <div class="columns">
      <sc-field
        label="Referência"
        class="column is-6">
        <sc-input
          placeholder="Referência"
          v-model="address.shipping_reference" />
      </sc-field>

      <sc-field
        label="Bairro"
        class="column is-6">
        <sc-input
          placeholder="Bairro"
          v-model="address.shipping_quarter"
          :disable="loading" />
      </sc-field>
    </div>

    <div class="columns">
      <sc-field
        label="Cidade"
        class="column"
        :class="{'is-9': isUf, 'is-6': !isUf}">
        <sc-input
          placeholder="Cidade"
          v-model="address.shipping_city"
          :disable="loading" />
      </sc-field>

      <sc-field
        :label="isUf ? 'UF' : 'Estado'"
        class="column"
        :class="{'is-3': isUf, 'is-6': !isUf}">
        <sc-state
          v-model="address.shipping_state_code"
          @change="changeState"
          :disable="loading"
          :is-uf="isUf" />
      </sc-field>
    </div>
  </section>
</template>

<script>
  import ScState from '../sc-state/ScState'; //eslint-disable-line
  import ScField from '../sc-field/ScField'; //eslint-disable-line
  import ScInput from '../sc-input/ScInput'; //eslint-disable-line

  export default {
    name: 'sc-address',
    props: {
      value: {
        type: [String, Number, Boolean, Object, Array, Symbol, Function],
        default: null,
      },
      /**
      * Se false o select renderiza como Estado, caso contrário como siglas
      */
      isUf: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        loading: false,
        address: {
          shipping_zip_code: null,
          shipping_address: null,
          shipping_number: null,
          shipping_additional: null,
          shipping_reference: null,
          shipping_quarter: null,
          shipping_city: null,
          shipping_state_code: null,
        },
      };
    },
    watch: {
      value: {
        handler(value) {
          if (this.address && value) {
            Object.assign(this.address, value);
          }
        },
        deep: true,
      },
      address: {
        handler(address) {
          if (this.value && address) {
            this.$emit('input', Object.assign(this.value, address));
          }
        },
        deep: true,
      },
    },
    methods: {
      changeState(state) {
        const { label } = state;

        Object.assign(this.address, {
          shipping_state: label,
        });
      },
      changeZipCode() {
        const zipCode = this.address.shipping_zip_code;
        if (zipCode && zipCode.length === 9) {
          this.loading = true;
          const zipCodeFormated = zipCode.replace(/\D/g, '');

          return this.$http.get(`api/v1/cep_location/address_complete/${zipCodeFormated}`).then((res) => {
            this.loading = false;

            const {
              street,
              neighborhood,
              city,
              state_short,
              bairro,
            } = res.content;

            Object.assign(this.address, {
              shipping_address: street,
              shipping_number: null,
              shipping_additional: null,
              shipping_reference: null,
              shipping_quarter: neighborhood || bairro,
              shipping_city: city,
              shipping_state_code: state_short,
            });

            this.$refs.shipping_number.focus();
          }).catch(() => { this.loading = false; });
        }
      },
    },
    created() {
      Object.assign(this.address, this.value);
    },
    components: {
      ScState,
      ScField,
      ScInput,
    },
  };
</script>
