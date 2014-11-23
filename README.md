# markovmaker

Generate output text in the style of the input text.  Uses Markov chains to generate sentences of a minimum length.  

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/dshahin/jquery-markovmaker/master/dist/jquery.markovmaker.min.js
[max]: https://raw.githubusercontent.com/dshahin/jquery-markovmaker/master/dist/jquery.markovmaker.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/markovmaker.min.js"></script>
<script>
jQuery(function($) {
    var markovSentence =   $.markovmaker('input text', {punctuation: '!'}); //"input text!" 
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
<iframe width="100%" height="300" src="http://jsfiddle.net/dshahin/pgw3dtbb/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Release History
_(Nothing yet)_
