<template>
  <div class="sc-range-date-picker has-text-nowrap">
    <div class="control has-icons-right"
         @click="toggleCalendar()">
      <div class="input">
        {{getDateString(dateRange.start)}} - {{getDateString(dateRange.end)}}
      </div>
      <b-icon icon="calendar"
              class="is-right" />
    </div>

    <div class="sc-range-date-picker__wrapper"
         :class="calendarWrapperPosition"
         v-show="isOpen">

      <div class="sc-range-date-picker__range">
        <ul class="sc-range-date-picker__preset">
          <li
            class="sc-range-date-picker__preset-item"
            :class="{'sc-range-date-picker__preset-item--active': presetActive === item.label}"
            v-for="(item, index) in finalPresetRanges"
            :key="index"
            @click="updatePreset(item)">
            {{ item.label }}
          </li>

          <li class="field has-addons sc-range-date-picker__date-range">
            <p class="control">
              <span class="button is-small is-static">De:</span>
            </p>
            <div class="control">
              <b-input placeholder="00/00/0000"
                       :value="getDateString(dateRange.start)"
                       v-mask="'date'"
                       @change.native="changeDate($event, 'start')"
                       size="is-small"></b-input>
            </div>
            <p class="control">
              <span class="button is-small is-static">até:</span>
            </p>
            <div class="control">
              <b-input placeholder="00/00/0000"
                       :value="getDateString(dateRange.end)"
                       v-mask="'date'"
                       @change.native="changeDate($event, 'end')"
                       size="is-small"></b-input>
            </div>
          </li>

          <li class="buttons is-right">
            <button type="button"
                    class="button is-small"
                    @click="toggleCalendar()">Cancelar</button>
            <button type="button"
                    class="button is-primary is-small"
                    @click="setDateValue()">Aplicar</button>
          </li>
        </ul>
      </div>

      <div class="sc-range-date-picker__calendar"
           v-if="!isCompact">
        <div class="sc-range-date-picker__calendar-left">

          <div class="sc-range-date-picker__calendar-head">
            <a href @click.prevent="goPrevMonth">
              <b-icon icon="chevron-circle-left"></b-icon>
            </a>

            <span class="sc-range-date-picker__calendar-head-title">
              {{ `${monthsLocale[activeMonthStart]} ${activeYearStart}` }}
            </span>
          </div>

          <ul class="sc-range-date-picker__calendar-weeks">
            <li v-for="item in shortDaysLocale"
                class="sc-range-date-picker__calendar-weeks-item"
                :key="item">{{ item }}</li>
          </ul>

          <ul v-for="line in 6"
              :key="line"
              class="sc-range-date-picker__calendar-days">
            <li v-for="day in numOfDays"
                :key="day"
                :class="[{
                  'sc-range-date-picker__calendar-days-item--selected': isDateSelected(line, day, 'first', startMonthDay, endMonthDate),
                  'sc-range-date-picker__calendar-days-item--range': isDateInRange(line, day, 'first', startMonthDay, endMonthDate),
                  'sc-range-date-picker__calendar-days-item--disabled': isDateDisabled(line, day, startMonthDay, endMonthDate),
                }]"
                class="sc-range-date-picker__calendar-days-item"
                v-html="getDayCell(line, day, startMonthDay, endMonthDate)"
                @click="selectFirstItem(line, day)"></li>
          </ul>
        </div>

        <div class="sc-range-date-picker__calendar-right">

          <div class="sc-range-date-picker__calendar-head">
            <span class="sc-range-date-picker__calendar-head-title">
              {{ `${monthsLocale[startNextActiveMonth]} ${activeYearEnd}` }}
            </span>

            <a href
               @click.prevent="goNextMonth">
              <b-icon icon="chevron-circle-right"></b-icon>
            </a>
          </div>

          <ul class="sc-range-date-picker__calendar-weeks">
            <li v-for="item in shortDaysLocale"
                class="sc-range-date-picker__calendar-weeks-item"
                :key="item">{{ item }}</li>
          </ul>

          <ul v-for="line in 6"
              :key="line"
              class="sc-range-date-picker__calendar-days">
            <li v-for="day in numOfDays"
                :key="day"
                :class="[{
                  'sc-range-date-picker__calendar-days-item--selected': isDateSelected(line, day, 'second', startNextMonthDay, endNextMonthDate),
                  'sc-range-date-picker__calendar-days-item--range': isDateInRange(line, day, 'second', startNextMonthDay, endNextMonthDate),
                  'sc-range-date-picker__calendar-days-item--disabled': isDateDisabled(line, day, startNextMonthDay, endNextMonthDate),
                }]"
                class="sc-range-date-picker__calendar-days-item"
                v-html="getDayCell(line, day, startNextMonthDay, endNextMonthDate)"
                @click="selectSecondItem(line, day)"></li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { Moment } from 'secure-providers';

  const defaultPresets = () => ({
    last7days() {
      const start = Moment().subtract(6, 'days').startOf('day').toDate();
      const end = Moment().toDate();
      return {
        label: 'Últimos 7 dias',
        active: false,
        dateRange: {
          start,
          end,
        },
      };
    },
    last15days() {
      const start = Moment().subtract(14, 'days').startOf('day').toDate();
      const end = Moment().toDate();
      return {
        label: 'Últimos 15 dias',
        active: false,
        dateRange: {
          start,
          end,
        },
      };
    },
    last30days() {
      const start = Moment().subtract(29, 'days').startOf('day').toDate();
      const end = Moment().toDate();
      return {
        label: 'Últimos 30 dias',
        active: false,
        dateRange: {
          start,
          end,
        },
      };
    },
  });

  export default {
    name: 'sc-range-date-picker',
    props: {
      /**
       * Formato da data a ser mostrada no input
       * @version 1.0
       */
      format: {
        type: String,
        default: 'DD/MM/YYYY',
      },
      /**
       * Informe a data inicial do range de datas
       *
       * ```
       * {
       *  start: new Date(),
       *  end: new Date(),
       * }
       * ```
       */
      initRange: {
        type: Object,
        default: {},
      },
      /**
       * O mês que será mostrado ao renderizar, por default mês atual **new Date().getMonth()**
       */
      startActiveMonth: {
        type: Number,
        default: new Date().getMonth(),
      },
      /**
       * O ano que será mostrado ao renderizar, por default mês atual **new Date().getFullYear()**
       */
      startActiveYear: {
        type: Number,
        default: new Date().getFullYear(),
      },
      /**
       * Esconde o calendário, mostrando somente a opções de range e
       * input para informar um range de data.
       */
      isCompact: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        dateRange: {},
        numOfDays: 7,
        isFirstChoice: true,
        isOpen: false,
        presetActive: '',
        activeMonthStart: this.startActiveMonth,
        activeYearStart: this.startActiveYear,
        activeYearEnd: this.startActiveYear,
        calendarWrapperPosition: null,
      };
    },
    watch: {
      startNextActiveMonth: (value) => {
        if (value === 0) this.activeYearEnd = this.activeYearStart + 1;
      },
    },
    computed: {
      monthsLocale() {
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
      shortDaysLocale() {
        return ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
      },
      startMonthDay() {
        return Moment([this.activeYearStart, this.activeMonthStart, 1]).day();
      },
      startNextMonthDay() {
        return Moment([this.activeYearStart, this.startNextActiveMonth, 1]).day();
      },
      endMonthDate() {
        return new Date(this.activeYearEnd, this.startNextActiveMonth, 0).getDate();
      },
      endNextMonthDate() {
        return new Date(this.activeYearEnd, this.activeMonthStart + 2, 0).getDate();
      },
      startNextActiveMonth() {
        return this.activeMonthStart >= 11 ? 0 : this.activeMonthStart + 1;
      },
      finalPresetRanges() {
        const presetRanges = defaultPresets();

        return Object.keys(presetRanges)
          .map(key => presetRanges[key])
          .filter(item => typeof item === 'function')
          .map(item => item());
      },
    },
    methods: {
      getPosition() {
        return this.$nextTick(() => {
          const element = document.querySelector('.sc-range-date-picker__wrapper');

          if (element) {
            const { left = 0, width = 0 } = element.getBoundingClientRect();
            const elementSize = left + width;
            const pageWindow = window.innerWidth;

            this.calendarWrapperPosition = elementSize > pageWindow ?
              'sc-range-date-picker__wrapper--right' : 'sc-range-date-picker__wrapper--left';
          }
        });
      },
      keyboardShortcut() {
        document.addEventListener('keyup', (e) => {
          const rules = {
            ESCAPE: () => {
              if (this.isOpen) {
                this.toggleCalendar();
              }
            },
            ENTER: () => {
              if (this.isOpen) {
                this.setDateValue();
              }
            },
          };

          const key = e.key.toUpperCase();
          if (e.target.tagName.toUpperCase() !== 'INPUT' && rules[key]) {
            rules[key]();
          }
        }, false);
      },
      closeCalendarWithClick(event) {
        const calendarElement = document.querySelector('.sc-range-date-picker');

        if (this.isOpen && !calendarElement.contains(event.target)) {
          this.toggleCalendar();
        }
      },
      changeDate(event, field) {
        const date = Moment(event.target.value, 'DD/MM/YYYY');

        if (date.isValid()) {
          this.dateRange[field] = date.toDate();
        }
      },
      toggleCalendar() {
        this.isOpen = !this.isOpen;
        return null;
      },
      getDateString(date, format = this.format) {
        return date ? Moment(date).format(format) : null;
      },
      getDayIndexInMonth(line, day, startMonthDay) {
        const date = (this.numOfDays * (line - 1)) + day;
        return date - startMonthDay;
      },
      getDayCell(line, day, startMonthDay, endMonthDate) {
        const result = this.getDayIndexInMonth(line, day, startMonthDay);
        return result > 0 && result <= endMonthDate ? result : '&nbsp;';
      },
      getNewDateRange(result, activeMonth) {
        const newData = {};
        let key = 'start';
        if (!this.isFirstChoice) {
          key = 'end';
        } else {
          Object.assign(newData, {
            end: null,
          });
        }

        const resultDate = new Date(this.activeYearStart, activeMonth, result);
        if (!this.isFirstChoice && resultDate < this.dateRange.start) {
          this.isFirstChoice = false;
          return { start: resultDate };
        }

        this.isFirstChoice = !this.isFirstChoice;
        return Object.assign(newData, {
          [key]: resultDate,
        });
      },
      selectFirstItem(line, day) {
        const result = this.getDayIndexInMonth(line, day, this.startMonthDay) + 1;
        this.dateRange = Object.assign(
          {},
          this.dateRange,
          this.getNewDateRange(result, this.activeMonthStart),
        );

        if (this.dateRange.start && this.dateRange.end) {
          this.presetActive = '';
        }
      },
      selectSecondItem(line, day) {
        const result = this.getDayIndexInMonth(line, day, this.startNextMonthDay) + 1;
        this.dateRange = Object.assign(
          {},
          this.dateRange,
          this.getNewDateRange(result, this.startNextActiveMonth),
        );

        if (this.dateRange.start && this.dateRange.end) {
          this.presetActive = '';
        }
      },
      isDateSelected(line, day, key, startMonthDay, endMonthDate) {
        const result = this.getDayIndexInMonth(line, day, startMonthDay) + 1;
        if (result < 2 || result > endMonthDate + 1) {
          return false;
        }

        let currDate = null;

        if (key === 'first') {
          currDate = new Date(this.activeYearStart, this.activeMonthStart, result);
        } else {
          currDate = new Date(this.activeYearEnd, this.startNextActiveMonth, result);
        }

        return (this.dateRange.start && this.dateRange.start.getTime() === currDate.getTime()) ||
          (this.dateRange.end && this.dateRange.end.getTime() === currDate.getTime());
      },
      isDateInRange(line, day, key, startMonthDay, endMonthDate) {
        const result = this.getDayIndexInMonth(line, day, startMonthDay) + 1;
        if (result < 2 || result > endMonthDate + 1) {
          return false;
        }

        let currDate = null;

        if (key === 'first') {
          currDate = new Date(this.activeYearStart, this.activeMonthStart, result);
        } else {
          currDate = new Date(this.activeYearEnd, this.startNextActiveMonth, result);
        }

        return (this.dateRange.start && this.dateRange.start.getTime() < currDate.getTime()) &&
          (this.dateRange.end && this.dateRange.end.getTime() > currDate.getTime());
      },
      isDateDisabled(line, day, startMonthDay, endMonthDate) {
        const result = this.getDayIndexInMonth(line, day, startMonthDay);
        return !(result > 0 && result <= endMonthDate);
      },
      goPrevMonth() {
        const prevMonth = new Date(this.activeYearStart, this.activeMonthStart, 0);
        this.activeMonthStart = prevMonth.getMonth();
        this.activeYearStart = prevMonth.getFullYear();
        this.activeYearEnd = prevMonth.getFullYear();
      },
      goNextMonth() {
        const nextMonth = new Date(this.activeYearEnd, this.startNextActiveMonth, 1);
        this.activeMonthStart = nextMonth.getMonth();
        this.activeYearStart = nextMonth.getFullYear();
        this.activeYearEnd = nextMonth.getFullYear();
      },
      updatePreset(item) {
        this.presetActive = item.label;
        this.dateRange = item.dateRange;
        this.activeMonthStart = this.dateRange.start.getMonth();
        this.activeYearStart = this.dateRange.start.getFullYear();
        this.activeYearEnd = this.dateRange.end.getFullYear();
      },
      setDateValue() {
        /**
         * Retorna a data de início e fim
         *
         * ```
         * {
         *  start: Date,
         *  end: Date
         * }
         * ```
         *
         * @event selected
         * @type {object}
         */
        this.$emit('selected', this.dateRange);
        if (!this.isCompact) {
          this.toggleCalendar();
        }
      },
    },
    created() {
      this.dateRange = this.initRange || null;
      if (this.activeMonthStart === 11) this.activeYearEnd = this.activeYearStart + 1;

      this.getPosition();
      this.keyboardShortcut();
      document.addEventListener('click', this.closeCalendarWithClick);
    },
    destroyed() {
      document.removeEventListener('click', this.closeCalendarWithClick);
    },
  };
</script>

<style lang="scss" scoped>
  @import "~secure-ui/src/scss/variables"; //eslint-disable-line

  .sc-range-date-picker{
    position: relative;
  }

  .sc-range-date-picker__wrapper{
    padding: .75rem 0;
    box-shadow: 0px 5px 15px 0px #ccc;
    background-color: $white;
    z-index: 10;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: flex;
    position: absolute;
    width: 765px;
  }

  .sc-range-date-picker__wrapper--left{
    left: 0;
  }

  .sc-range-date-picker__wrapper--right{
    right: 0;
  }

  .sc-range-date-picker__preset-item{
    background-color: $primary;
    color: $white;
    padding: .35rem;
    margin: .5rem 0;
    border-radius: 5px;
    cursor: pointer;
  }

  .sc-range-date-picker__preset-item--active,
  .sc-range-date-picker__preset-item:hover{
    background-color: darken($primary, 10);
    color: $white;
  }

  .sc-range-date-picker__date-range{
    width: 240px;
  }

  .sc-range-date-picker__range{
    padding: 0 .75rem;
  }

  .sc-range-date-picker__calendar{
    display: flex;
  }

  .sc-range-date-picker__calendar-left{
    margin: 0 .75rem;
  }

  .sc-range-date-picker__calendar-right{
    margin: 0 .75rem;
  }

  .sc-range-date-picker__calendar-head{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sc-range-date-picker__calendar-head-title{
    font-size: $size-7;
    font-weight: bold;
    text-align: center;
    flex: 1;
  }

  .sc-range-date-picker__calendar-weeks{
    margin: .2rem 0;
  }

  .sc-range-date-picker__calendar-weeks-item{
    display: inline-block;
    width: 2rem;
    text-align: center;
  }

  .sc-range-date-picker__calendar-days-item{
    display: inline-block;
    width: 2rem;
    color: $black;
    text-align: center;
    cursor: pointer;
    line-height: 2em;
  }

  .sc-range-date-picker__calendar-days-item:hover{
    background-color: darken($primary, 10);
    color: $white;
  }

  .sc-range-date-picker__calendar-days-item--disabled{
    pointer-events: none;
  }

  .sc-range-date-picker__calendar-days-item--selected{
    background-color: $primary;
    color: $white;
  }

  .sc-range-date-picker__calendar-days-item--range{
    background-color: $primary;
    color: $white;
  }
</style>
