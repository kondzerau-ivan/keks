"use strict";

const getRandomNumber = (min, max) => {
  if (max < min) {
    alert('Max number should be more or equal Min!');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

const isStringLengthValidate = (str, length) => str.length <= length;



export { getRandomNumber,  isStringLengthValidate};
