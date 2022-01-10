'use strict';

const calcTermFibonacci = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const { queryStringParameters } = event;
  const { numberForCalc } = queryStringParameters;
  let penultimate = 0;
  let last = 1;
  let numberResult;
 
  if( numberForCalc <= 2 ) {
    numberResult = numberForCalc -1;
  }

  for(let count=3; count<=numberForCalc; count++){
    numberResult = last + penultimate;
    penultimate = last;
    last = numberResult;
    console.log('numberResult', numberResult);
    }

   return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `O termo para a sequencia fibonacci para o número ${numberForCalc} é ${numberResult}`,
        input: event,
      },
      null,
      2
    ),
  };
}

const printSequenceFibonacci = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const { queryStringParameters } = event;
  const { numberForCalc } = queryStringParameters;
 
  if( numberForCalc <= 2 ) {
    numberResult = numberForCalc -1;
  }

  let penultimate = 0;
  let last = 1;
  let numberResult;
  let sequence = []

  for(let count=3; count<=numberForCalc; count++){
    numberResult = last + penultimate;
    penultimate = last;
    last = numberResult;
    sequence.push(numberResult);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `A sequencia fibonacci para o número ${numberForCalc} é ${sequence}`,
        input: event,
      },
      null,
      2
    ),
  };

}

module.exports = {
  calcTermFibonacci,
  printSequenceFibonacci,
}