export function useState(defaultValue) {
  let value = defaultValue;

  function getValue() {
    return value;
  }

  function setValue(newValue) {
    value = newValue;
  }

  return [getValue, setValue];
}

const [counter, setCounter] = useState(0);
