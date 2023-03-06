export interface Filters {
  filters: ItemsFilters[];
  sorts: ItemSort[];
}

export interface ItemSort {
  name: string;
  direction: string;
}

export interface ItemsFilters {
  name?: string;
  values?: object[];
  operator?: OperationExpression;
  conditional?: ConditionalExpression;
}

export interface ItemsFilterSelected {
  selectedFilter?: any;
  selectedOperation?: string;
  selectedConditional?: string;
}

export enum ConditionalExpression {
  And,
  Or
}

export enum OperationExpression {
  Equals,
  NotEquals,
  Minor,
  MinorEquals,
  Mayor,
  MayorEquals,
  Like,
  NotLike,
  StartsWith,
  NotStartsWith,
  EndsWith,
  NotEndsWith,
}
