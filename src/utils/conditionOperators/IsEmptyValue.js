import _ from 'lodash';

import ConditionOperator from './ConditionOperator';

export default class IsEmptyValue extends ConditionOperator {
    static get operatorKey() {
        return 'isEmpty';
    }

    static get displayedName() {
        return 'Is Empty';
    }

    static get requireValue() {
        return false;
    }

    execute({ value, instance, conditionComponentPath }) {
        const isEmptyValue = _.isEmpty(value);

        if (instance && instance.root) {
            const conditionTriggerComponent = instance.root.getComponent(conditionComponentPath);
            return conditionTriggerComponent?.isEmpty ? conditionTriggerComponent.isEmpty() : isEmptyValue;
        }

        return  isEmptyValue;
    }

    getResult(options) {
        return this.execute(options);
    }
}
