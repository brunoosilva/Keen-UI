<script>
  import Buefy from 'buefy';
  import { Moment } from 'secure-providers';
  import ScIcon from '../sc-icon/ScIcon'; //eslint-disable-line
  import ScInput from '../sc-input/ScInput'; //eslint-disable-line

  export default {
    name: 'sc-datepicker',
    extends: Buefy.Datepicker,
    props: {
      dateFormatter: {
        type: Function,
        default: (date) => {
          return Moment(date).format('DD/MM/YYYY');
        },
      },
      dayNames: {
        type: Array,
        default: () => {
          return [
            'Dom',
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sab',
          ];
        },
      },
      monthNames: {
        type: Array,
        default: () => {
          return [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
          ];
        },
      },
      icon: {
        type: String,
        default: 'calendar',
      },
    },
    components: {
      bIcon: ScIcon,
      bInput: ScInput,
    },
  };
</script>
