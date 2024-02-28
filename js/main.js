"use strict";

const getRandomNumber = function (min, max) {
  if (max < min) {
    alert('Max number should be more or equal Min!');
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

const getMaxStringLength = function (str, length) {
  return (str.length <= length) ?? false;
};
