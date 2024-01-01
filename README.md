<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dmap2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a binary function to double-precision floating-point strided input arrays and assign results to a double-precision floating-point strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-dmap2
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var dmap2 = require( '@stdlib/strided-base-dmap2' );
```

#### dmap2( N, x, strideX, y, strideY, z, strideZ, fcn )

Applies a binary function to double-precision floating-point strided input arrays and assigns results to a double-precision floating-point strided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var add = require( '@stdlib/math-base-ops-add' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var y = new Float64Array( [ 2.0, 1.0, 3.0, -2.0, 4.0, 1.0, -1.0, 3.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmap2( x.length, x, 1, y, 1, z, 1, add );
// z => <Float64Array>[ 0.0, 2.0, 6.0, -7.0, 8.0, 1.0, -2.0, 0.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.
-   **z**: output [`Float64Array`][@stdlib/array/float64].
-   **strideZ**: index increment for `z`.
-   **fcn**: function to apply.

The `N` and `stride` parameters determine which strided array elements are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var add = require( '@stdlib/math-base-ops-add' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmap2( 3, x, 2, y, -1, z, 1, add );
// z => <Float64Array>[ 1.0, -2.0, -4.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float64] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var add = require( '@stdlib/math-base-ops-add' );

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

dmap2( 3, x1, -2, y1, 1, z1, 1, add );
// z0 => <Float64Array>[ 0.0, 0.0, -4.0, -1.0, 1.0, 0.0 ]
```

#### dmap2.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, z, strideZ, offsetZ, fcn )

Applies a binary function to double-precision floating-point strided input arrays and assigns results to a double-precision floating-point strided output array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var add = require( '@stdlib/math-base-ops-add' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add );
// z => <Float64Array>[ 0.0, -1.0, -1.0, -2.0, -2.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetZ**: starting index for `z`.

While [`typed array`][@stdlib/array/float64] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var add = require( '@stdlib/math-base-ops-add' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dmap2.ndarray( 3, x, 2, 1, y, -1, y.length-1, z, 1, 3, add );
// z => <Float64Array>[ 0.0, 0.0, 0.0, 1.0, -1.0, -4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Float64Array = require( '@stdlib/array-float64' );
var add = require( '@stdlib/math-base-ops-add' );
var dmap2 = require( '@stdlib/strided-base-dmap2' );

var x = filledarrayBy( 10, 'float64', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( x.length, 'float64', discreteUniform( -100, 100 ) );
console.log( y );

var z = new Float64Array( x.length );
console.log( z );

dmap2.ndarray( x.length, x, 1, 0, y, -1, y.length-1, z, 1, 0, add );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/dmap2.h"
```

#### stdlib_strided_dmap2( N, \*X, strideX, \*Y, strideY, \*Z, strideZ, fcn )

Applies a binary function to double-precision floating-point strided input arrays and assigns results to a double-precision floating-point strided output array.

```c
#include <stdint.h>

static double add( const double x, const double y ) {
    return x + y;
}

double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
double Y[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
double Z[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

int64_t N = 6;

stdlib_strided_dmap2( N, X, 1, Y, 1, Z, 1, add );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX** `[in] int64_t` index increment for `X`.
-   **Y**: `[in] double*` input array.
-   **strideY**: `[in] int64_t` index increment for `Y`.
-   **Z**: `[out] double*` output array.
-   **strideZ**: `[in] int64_t` index increment for `Z`.
-   **fcn**: `[in] double (*fcn)( double, double )` binary function to apply.

```c
void stdlib_strided_dmap2( const int64_t N, const double *X, const int64_t strideX, const double *Y, const int64_t strideY, double *Z, const int64_t strideZ, double (*fcn)( double, double ) );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/strided/base/dmap2.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double add( const double x, const double y ) {
    return x + y;
}

int main( void ) {
    // Create input strided arrays:
    double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
    double Y[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };

    // Create an output strided array:
    double Z[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    int64_t N = 6;

    // Define the strides:
    int64_t strideX = 1;
    int64_t strideY = -1;
    int64_t strideZ = 1;

    // Apply the callback:
    stdlib_strided_dmap2( N, X, strideX, Y, strideY, Z, strideZ, add );

    // Print the results:
    for ( int64_t i = 0; i < N; i++ ) {
        printf( "Z[ %"PRId64" ] = %lf\n", i, Z[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided-base/smap2`][@stdlib/strided/base/smap2]</span><span class="delimiter">: </span><span class="description">apply a binary function to single-precision floating-point strided input arrays and assign results to a single-precision floating-point strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/binary`][@stdlib/strided/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in strided input arrays and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-dmap2.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-dmap2

[test-image]: https://github.com/stdlib-js/strided-base-dmap2/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-dmap2/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-dmap2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-dmap2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-dmap2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-dmap2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-dmap2/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-dmap2/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-dmap2/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-dmap2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-dmap2/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

<!-- <related-links> -->

[@stdlib/strided/base/smap2]: https://github.com/stdlib-js/strided-base-smap2

[@stdlib/strided/base/binary]: https://github.com/stdlib-js/strided-base-binary

<!-- </related-links> -->

</section>

<!-- /.links -->
