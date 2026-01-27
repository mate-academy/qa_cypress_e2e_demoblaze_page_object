class ArgumentError extends Error {
  constructor(message, argumentsObj) {
    super(message);
    this.name = 'ArgumentError';
    this.message = message;

    if (arguments.length > 1) {
      const argumentsNames = Object.keys(argumentsObj);

      for (const name of argumentsNames) {
        this.message += `\n Incorect:"${name}" Actual Value = ${argumentsObj[name]}`;
      }
    }
  }
}

function randomNumberRange(min = 0, max = 1) {
  switch (true) {
    case max === min:
      throw new ArgumentError(`"Max" argument cannot be equal "Min"`, { max });
    case min > max:
      // eslint-disable-next-line max-len
      throw new ArgumentError('"Min" argument cannot be greater than "Max"', { min });
    case max < 1:
      throw new ArgumentError('"Max" argument must be greater than 0', { max });
  }

  const generatedNumber = (min < 0)
    ? Math.floor(Math.random() * (max + 1 + Math.abs(min)) + min)
    : Math.floor(Math.random() * (max + 1 - min) + min);

  return generatedNumber;
}

function isEveryKeyType(type, toCheck) {
  if (typeof type !== 'string') {
    throw new ArgumentError('"type" argument must be a string',
      { type: typeof type });
  } else if (!(
    type === 'string' ||
    type === 'number' ||
    type === 'boolean' ||
    type === 'bigint' ||
    type === 'symbol' ||
    type === 'null' ||
    type === 'undefined'
  )) {
    throw new ArgumentError(`"type" argument must contain type of data which exist`,
      { type });
  }

  switch (true) {
    case typeof toCheck !== 'object':
      throw new Error(`"toCheck" must be Array or Object`);
    case Array.isArray(toCheck):
      for (const elem of toCheck) {
        // eslint-disable-next-line valid-typeof
        const isValidType = typeof elem === type;

        if (!isValidType) return false;
      }
      return true;
    case typeof toCheck === 'object':
      for (const elem of Object.values(toCheck)) {
        // eslint-disable-next-line valid-typeof
        const isValidType = typeof elem === type;

        if (!isValidType) return false;
      }
      return true;
  }
}

export { ArgumentError, randomNumberRange, isEveryKeyType };
