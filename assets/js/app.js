
  let numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Niner'];

  let alphabet ={
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-ray',
    Y: 'Yankee',
    Z: 'Zulu'
  };

  let combination = prompt('Введите комбинацию:');

  console.log(`Ваша комбинация: ${combination}`);

  let arr = [...combination.toUpperCase()];

  arr = arr.map( (item) => alphabet[item] || numbers[+item] ).join(' ');

  console.log(`Расшифровка: ${arr}`);