/// <reference path="fourslash.ts" />

////interface I<TString, TNumber> {
////    [s: string]: TString;
////    [s: number]: TNumber;
////}
////
////declare function foo<TString, TNumber>(obj: I<TString, TNumber>): { str: T/*1*/

goTo.marker("1");

verify.memberListContains("I");
verify.memberListContains("TString");
verify.memberListContains("TNumber");

// Ideally the following shouldn't show up since they're not types.
verify.memberListContains("foo");
verify.memberListContains("obj");
