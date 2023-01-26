const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function matrixPower(matrix, n) {
  if (n === 1) return matrix;
  let result = matrixPower(matrix, Math.floor(n / 2));
  result = multiplyMatrix(result, result);
  if (n % 2 === 1) {
    result = multiplyMatrix(result, matrix);
  }
  return result;
}

function multiplyMatrix(a, b) {
  let c = [[0, 0], [0, 0]];
  c[0][0] = a[0][0] * b[0][0] + a[0][1] * b[1][0];
  c[0][1] = a[0][0] * b[0][1] + a[0][1] * b[1][1];
  c[1][0] = a[1][0] * b[0][0] + a[1][1] * b[1][0];
  c[1][1] = a[1][0] * b[0][1] + a[1][1] * b[1][1];
  return c;
}

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }
  let matrix = [[1, 1], [1, 0]];
  matrix = matrixPower(matrix, n - 1);
  return matrix[0][0];
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
