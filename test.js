#!/usr/bin/env node

import {findUpSync} from 'find-up';

console.log('hey you');

// This is a one-line comment
/*
 * This is a multiline comment
 */


// process.argv is an Array
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log(process.argv.slice(2));

const userArgs = process.argv.slice(2);

console.log('first arg:', userArgs[0]);

console.log('findup:', findUpSync('file.txt'));

if (userArgs[0] !== 'password') {
	console.error('wrong argument!');
	process.exit(1);
}

const v1 = true;

function square(val)
{
	return val * val;
}

if (v1) {
	console.log('this will run');
	console.log('this too');
} else {
	console.log('this will not run');
}
if (v1)
	console.log('this will run');
	console.log('this too');
else
	console.log('this will not run');


for (let i = 0; i < 10; i++) {
	//console.log('this is run number ' + i + ', square: ' + square(square(i)));
}
