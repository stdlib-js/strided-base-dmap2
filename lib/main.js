/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Applies a binary function to double-precision floating-point strided input arrays and assigns results to a double-precision floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - input array
* @param {integer} strideY - `y` stride length
* @param {Float64Array} z - destination array
* @param {integer} strideZ - `z` stride length
* @param {Function} fcn - binary function to apply
* @returns {Float64Array} `z`
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var add = require( '@stdlib/number-float64-base-add' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( x.length );
*
* dmap2( x.length, x, 1, y, 1, z, 1, add );
*
* console.log( z );
* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
function dmap2( N, x, strideX, y, strideY, z, strideZ, fcn ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ), z, strideZ, stride2offset( N, strideZ ), fcn ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dmap2;
