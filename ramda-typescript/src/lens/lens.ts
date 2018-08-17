import { view, lensPath } from "ramda";

interface nestedType {
  some: {
    nested: {
      value: Symbol
    }
  }
}

export function lens(obj: nestedType): Symbol {
  return view<Symbol, nestedType>(lensPath<Symbol, nestedType>(['some', 'nested', 'value']), obj)
}
