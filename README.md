# mdl-expansion
Expansion component for Material Design Lite

Based on the great work of [Garbee](https://github.com/Garbee) into https://github.com/google/material-design-lite/commit/5324cedee2576a52c0ec83a5347f385dda9bf866.

The package commited by Garbee into the repository material design lite has not been released when I created this repository (and it's seem to be not completed, some things into the [guidline](https://material.io/guidelines/components/expansion-panels.html) is not really implemented). And I not sure if my implementation is correct, so I'm not doing a pull-request (sorry).

Into the implementation of Garbee, we need to use the detail element. Into my implementation, any element can be used ... but is maybe not the correct way (I agree). However, into my implementation, there is not need of polyfill.

## Install
I'm not publish into npm.js (sorry, I believe there is no namespace into npm.js and I don't want to take the name of a future package with a better implementation).
So, to get the package directly with github : 
```
npm install git+https://github.com/bulton-fr/mdl-expansion.git
```

## Class to use
You can see directly into the [README.md file from the material-design-lite repository](https://github.com/google/material-design-lite/blob/mdl-1.x/src/expansion/README.md). I only add the class `mdl-js-expansion`.
However, into the example, I use `mdl-shadow--2dp` class and the `tabindex` attribute to a better implemantation of the guideline about this component.

Note : I'm not sure about the tabindex value. If I correctly understand the w3c doc, the value `0` is the better choice for corresponding to all cases.

## Example

```html
<section class="mdl-expansion mdl-js-expansion mdl-shadow--2dp">
    <div class="mdl-expansion__summary" tabindex="0">
        <span class="mdl-expansion__header">Trip name</span>
        <span class="mdl-expansion__secondary-header">Caribbean Cruise</span>
    </div>
</section>
<section class="mdl-expansion mdl-js-expansion mdl-shadow--2dp">
    <div class="mdl-expansion__summary" tabindex="0">
        <span class="mdl-expansion__header">Location</span>
        <span class="mdl-expansion__secondary-header">Barbados</span>
    </div>
    <div class="mdl-expansion__content">
        <select>
            <option>One</option>
            <option>two</option>
        </select>
    </div>
    <div class="mdl-expansion__actions">
        <button class="mdl-expansion__action mdl-button mdl-js-button mdl-button--accent">Save</button>
        <button class="mdl-expansion__action mdl-button mdl-js-button">Cancel</button>
    </div>
</section>
<section class="mdl-expansion mdl-js-expansion mdl-shadow--2dp">
    <div class="mdl-expansion__summary" tabindex="0">
        <span class="mdl-expansion__header">Start and end dates</span>
        <span class="mdl-expansion__secondary-header">Start date: Feb 29, 2016</span>
        <span class="mdl-expansion__secondary-header">End date: Not set</span>
    </div>
</section>
<section class="mdl-expansion mdl-js-expansion mdl-shadow--2dp">
    <div class="mdl-expansion__summary" tabindex="0">
        <span class="mdl-expansion__header">Carrier</span>
        <span class="mdl-expansion__secondary-header">The best cruise line</span>
    </div>
</section>
<section class="mdl-expansion mdl-js-expansion mdl-shadow--2dp">
    <div class="mdl-expansion__summary" tabindex="0">
        <span class="mdl-expansion__header">
            Meal preferences
            <span class="mdl-expansion__subheader">
                Optional
            </span>
        </span>
        <span class="mdl-expansion__secondary-header">
            Vegetarian
        </span>
    </div>
</section>
```