
  let numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Niner'];

  let alphabet = [
    {K: 'Kilo'},
    {L: 'Lima'}
  ];

  console.log(alphabet);

  console.log(numbers);
  
  let combination = 'KL1386';

  let arr = [...combination.toUpperCase()];

  console.log(arr);

  arr[2] = numbers[ +arr[2]];
  arr[3] = numbers[ +arr[3]];
  arr[4] = numbers[ +arr[4]];
  arr[5] = numbers[ +arr[5]];

  arr = arr.join(' ');

  console.log(arr);