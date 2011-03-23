// TMQL
Language.syntax = [
  { input : /\"(.*?)(\"|<br>|<\/P>)/g, output : '<s>"$1$2</s>' }, // strings double quote
  { input : /\'\'\'(.*?)(\'\'\'|<br>|<\/P>)/g, output : '<s>\'\'\'$1$2</s>' }, // strings single quote
  { input : /(\%(prefix|pragma)\s+)(\w*)/g, output : '<u>$1</u><em>$3</em>' }, // environment-clause
  { input : /(\$\w+)/g, output : '<tt>$1</tt>' }, // variables
  { input : /(https?:\/\/\S*)(\s*|<br>|<\/P>)/g, output : '<var>$1</var>$2' }, // http links (special prefix) 
  { input : /(\w*:)([^\s<]*)(\s*|<br>|<\/P>)/g, output : '<em>$1<a>$2</a></em>$3' }, // prefix
  { input : /\b(ADD|ALL|AND|ASC|AT\s+MOST|CASCADE|(?:DELETE|(?:RE)?DEFINE|USE)\s+TEMPLATE|DELETE|DESC|EVERY|FOR|IN|INSERT|ISA|LIMIT|MERGE|OFFSET|OR|(?:ORDER|GROUP)\s+BY|REMOVE|RETURN|SATISFIES|SELECT|SET|UNIQUE|UPDATE|USE\s+JTMQR|WHERE|atomify|characteristics|id|instances|indicators|item|locators|players|ratomify|reifier|roles|roletypes|scope|subtypes|supertypes|traverse|typed|types|variants)\b/g, output : '<b>$1</b>' }, // reserved words
  { input : /([\(\){}]|&lt;|&gt;)/g, output : '<a>$1</a>' }, // special chars
  { input : /#(.*?)(<br>|<\/P>)/g, output : '<i>#$1</i>$2' } // comments
];

Language.snippets = [
  { input : 'char', output : 'characteristics' },
  { input : 'pre',  output : '%prefix $0 http://' },
  { input : 'for',  output : 'FOR $var\nIN $0\nWHERE $var\nORDER BY $var\nRETURN $var' }
];

Language.complete = [
// { input : '\'',output : '\'$0\'' },
  { input : '"', output : '"$0"' },
  { input : '(', output : '\($0\)' },
  { input : '[', output : '\[$0\]' }
];

Language.shortcuts = [];
