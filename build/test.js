var CSSTree = global.CSSTree = require( '../' );
var munit = global.munit = require( 'munit' );

// Only stop test suite when running make test
if ( ! process.env.NODE_TEST_NO_SKIP ) {
	munit.defaults.settings.stopOnFail = true;
}

// Run tests
munit.render( __dirname + '/../test/', {
	junit: __dirname + '/results/',
	junitPrefix: process.version.replace( /\./g, '_' )
});
