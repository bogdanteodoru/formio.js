declare namespace _default {
  const title: string;
  namespace form {
    const components: (
      | {
          label: string;
          labelPosition: string;
          displayInTimezone: string;
          useLocaleSettings: boolean;
          allowInput: boolean;
          format: string;
          placeholder: string;
          description: string;
          tooltip: string;
          customClass: string;
          tabindex: string;
          hidden: boolean;
          hideLabel: boolean;
          autofocus: boolean;
          disabled: boolean;
          alwaysEnabled: boolean;
          tableView: boolean;
          enableDate: boolean;
          datePicker: {
            minDate: null;
            maxDate: null;
            showWeeks: boolean;
            startingDay: number;
            initDate: string;
            minMode: string;
            maxMode: string;
            yearRows: number;
            yearColumns: number;
          };
          enableTime: boolean;
          timePicker: {
            showMeridian: boolean;
            hourStep: number;
            minuteStep: number;
            readonlyInput: boolean;
            mousewheel: boolean;
            arrowkeys: boolean;
          };
          multiple: boolean;
          defaultValue: string;
          persistent: boolean;
          protected: boolean;
          dbIndex: boolean;
          encrypted: boolean;
          redrawOn: string;
          clearOnHide: boolean;
          customDefaultValue: string;
          calculateValue: string;
          allowCalculateOverride: boolean;
          validate: {
            required: boolean;
            customMessage: string;
            custom: string;
            customPrivate: boolean;
            json: string;
            strictDateValidation: boolean;
          };
          unique: boolean;
          validateOn: string;
          errorLabel: string;
          key: string;
          type: string;
          input: boolean;
          prefix: string;
          suffix: string;
          refreshOn: string;
          widget: {
            type: string;
            displayInTimezone: string;
            language: string;
            useLocaleSettings: boolean;
            allowInput: boolean;
            mode: string;
            enableTime: boolean;
            noCalendar: boolean;
            format: string;
            defaultValue: string;
            hourIncrement: number;
            minuteIncrement: number;
            time_24hr: boolean;
            minDate: null;
            maxDate: null;
          };
          showCharCount: boolean;
          showWordCount: boolean;
          allowMultipleMasks: boolean;
          timezone: string;
          datepickerMode: string;
          id: string;
        }
      | {
          label: string;
          labelPosition: string;
          displayInTimezone: string;
          useLocaleSettings: boolean;
          allowInput: boolean;
          format: string;
          placeholder: string;
          description: string;
          tooltip: string;
          customClass: string;
          tabindex: string;
          hidden: boolean;
          hideLabel: boolean;
          autofocus: boolean;
          disabled: boolean;
          alwaysEnabled: boolean;
          tableView: boolean;
          enableDate: boolean;
          datePicker: {
            minDate: null;
            maxDate: null;
            showWeeks: boolean;
            startingDay: number;
            initDate: string;
            minMode: string;
            maxMode: string;
            yearRows: number;
            yearColumns: number;
          };
          enableTime: boolean;
          timePicker: {
            showMeridian: boolean;
            hourStep: number;
            minuteStep: number;
            readonlyInput: boolean;
            mousewheel: boolean;
            arrowkeys: boolean;
          };
          multiple: boolean;
          defaultValue: string;
          persistent: boolean;
          protected: boolean;
          dbIndex: boolean;
          encrypted: boolean;
          clearOnHide: boolean;
          customDefaultValue: string;
          validate: {
            required: boolean;
            customMessage: string;
            custom: string;
            customPrivate: boolean;
            json: string;
            strictDateValidation: boolean;
          };
          unique: boolean;
          validateOn: string;
          errorLabel: string;
          key: string;
          type: string;
          input: boolean;
          prefix: string;
          suffix: string;
          refreshOn: string;
          widget: {
            type: string;
            displayInTimezone: string;
            language: string;
            useLocaleSettings: boolean;
            allowInput: boolean;
            mode: string;
            enableTime: boolean;
            noCalendar: boolean;
            format: string;
            defaultValue: string;
            hourIncrement: number;
            minuteIncrement: number;
            time_24hr: boolean;
            minDate: null;
            maxDate: null;
          };
          timezone: string;
          datepickerMode: string;
          redrawOn?: undefined;
          allowCalculateOverride?: undefined;
          showCharCount?: undefined;
          showWordCount?: undefined;
          allowMultipleMasks?: undefined;
          id?: undefined;
        }
    )[];
  }
  const tests: {
    'Test date only fields format yyyy-mm-dd'(form: any, done: any): void;
    'Test date only fields format dd/mm/yyyy'(form: any, done: any): void;
  };
}
export default _default;
