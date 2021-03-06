import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { OperatorFunction } from '../types';

export function isEmpty<T>(): OperatorFunction<T, boolean> {
  return (source: Observable<T>) => source.lift(new IsEmptyOperator());
}

class IsEmptyOperator implements Operator<any, boolean> {
  call (observer: Subscriber<boolean>, source: any): any {
    return source.subscribe(new IsEmptySubscriber(observer));
  }
}

/**
 * We need t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   