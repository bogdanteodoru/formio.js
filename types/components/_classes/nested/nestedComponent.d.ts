import { Field } from '../field/field';
import { Component } from './../component/component.d';

export class NestedComponent extends Field {
  constructor(component: any | Component, options: Object, data: any);
  readonly defaultSchema: any;
  readonly schema: any;
  public collapsed: any | boolean;
  public visible: any | boolean;
  public parentVisible: boolean;
  public disabled: boolean;
  public parentDisabled: any | boolean;
  readonly ready: any;
  public currentForm: any;
  public data: any;
  getComponents(): any[] | Component[];
  getAllComponents(): any[] | Component[];
  everyComponent(fn: Function): void;
  flattenComponents(): Object;
  eachComponent(fn: Function): void;
  getComponent(path: string, fn: Function): Object;
  getComponentById(id: string, fn: Function): Object;
  createComponent(
    component: any | Component,
    options: Object,
    data: any,
    before: any
  ): any | Object;
  getContainer(): any;
  readonly componentComponents: any[];
  readonly nestedKey: string;
  readonly templateName: string;
  init(): void;
  addComponents(data: any, options: Object): void;
  addComponent(
    component: any,
    data: Object,
    before: HTMLElement,
    noAdd?: any
  ): Component;
  render(children: any): any;
  renderComponents(components: any): any;
  attach(element: any): any;
  attachComponents(
    element: any,
    components: any | Component[],
    container: any
  ): any;
  removeComponent(component: Component, components: Component[]): any;
  removeComponentByKey(key: string, fn: Function): null;
  removeComponentById(id: string, fn: Function): null;
  updateValue(value: any, flags: any, source: any): any;
  hasChanged(): boolean;
  checkData(data: any, flags: any, source: any): boolean;
  checkModal(isValid: boolean, dirty: boolean): void;
  checkConditions(data: any, norecurse?: any): any;
  clearOnHide(show: boolean): void;
  restoreComponentsContext(): void;
  beforePage(next?: any): any;
  beforeSubmit(): any;
  calculateValue(data: any, flags: any): any;
  isLastPage(): boolean;
  isValid(data: any, dirty: any): boolean;
  checkValidity(data: any, dirty: any): any | boolean;
  setPristine(pristine: any): void;
  detach(): void;
  destroy(): void;
  destroyComponents(): void;
  readonly errors: any[];
  getValue(): any;
  resetValue(): void;
  readonly dataReady: any;
  setNestedValue(
    component: any | Component,
    value: any,
    flags: any | Object,
    changed: boolean
  ): any;
  setValue(value: any, flags: any | Object): boolean;
}
