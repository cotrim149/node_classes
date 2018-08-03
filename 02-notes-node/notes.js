console.log('Starting notes.js');

module.exports.addNote = () => {
  console.log('Add note');
  return 'New Note';
};

module.exports.sum = (num1 , num2) => {
  console.log(`Sum of ${num1} + ${num2}`);
  return num1 + num2;
}