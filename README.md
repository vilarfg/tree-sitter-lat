# tree-sitter-lat

A Tree-sitter grammar for the LAT format.

## To Do

- [ ] sort out methods and constants attached to types.
  - [ ] Type?
  - [ ] Null (no methods)
  - [ ] Logical (no methods)
  - [ ] Number
    - [ ] methods
      - [ ] consider adding [Statistical dispersion](https://en.wikipedia.org/wiki/Statistical_dispersion) methods
      - [ ] `round`
      - [ ] `absolute`
      - [ ] `random`
      - [ ] `clamp`
      - [ ] `format`
      - [ ] `is_finite`
      - [ ] `is_integer` (maybe I should combine it `is_safe_integer` )
      - [ ] `is_nan` or `is_not_a_number`
      - [ ] `is_safe_integer`
      - [ ] from [math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
        - [ ] `min`
        - [ ] `max`
        - [ ] `acos`
        - [ ] `acosh`
        - [ ] `asin`
        - [ ] `asinh`
        - [ ] `atan`
        - [ ] `atanh`
        - [ ] maybe `atan2`
        - [ ] even more
    - [ ] constants
      - [ ] `epsilon`
      - [ ] `max_safe_integer`
      - [ ] `max_value`
      - [ ] `min_safe_integer`
      - [ ] `min_value`
      - [ ] from [math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
        - [ ] `e`
        - [ ] `ln10`
        - [ ] `ln2`
        - [ ] `log10e`
        - [ ] `log2e`
        - [ ] `pi`
        - [ ] even more
  - [ ] Text (look into [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))
    - [ ] methods
      - [ ] size
  - [ ] List
    - [ ] methods
      - [ ] size
  - [ ] Dictionary
    - [ ] methods
      - [ ] size
  - [ ] Function
  - [ ] Unknown
- [ ] figure out if I need `typeof` operator
- [ ] Allow redundant text escapes.
- [x] remove Time and RegExp types.

## License

[MIT](./LICENSE) © 2024 Fernando G. Vilar.

atan2