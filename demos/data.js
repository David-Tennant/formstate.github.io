var data = {"contents":[{"type":"html","html":"<a href=\"https://github.com/formstate/formstate\" class=\"github-corner\" aria-label=\"Visit Project\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>"},{"type":"html","html":"<div class=eze-markdown><h1>\n      Creating a Field\n      <a name=\"creating-a-field\" class=\"heading-anchor\" href=\"#creating-a-field\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h1><p>Note that because you write your own Fields you get:</p>\n<ul>\n<li>To design your fields any way you want with your look an feel.</li>\n<li>Keep your logic seperate from UI rendering that helps greatly with testing.</li>\n<li>We can work with complex data types with ease.</li>\n</ul>\n<p>Lets create a simple text input field by using <a href=\"http://www.material-ui.com/\" target=\"_blank\">material-ui</a>. First by installing</p></div>"},{"type":"code","html":"<div class=eze-markdown><pre><code><div style=\"display: inline-block\">npm install material-ui --save-dev</div></code></pre></div>","collapsed":false},{"type":"html","html":"<div class=eze-markdown><p>Our <code>Field</code> will take a <code>FieldState</code> and render the components.</p>\n<p>Internally it wires <code>FieldState</code> to the input. This is super easy:</p></div>"},{"type":"code","html":"<div class=eze-markdown><pre><code><div style=\"display: inline-block\"><span class=\"hljs-comment\">/** Standard react - mobx */</span>\n<span class=\"hljs-keyword\">import</span> * <span class=\"hljs-keyword\">as</span> React <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react'</span>;\n<span class=\"hljs-keyword\">import</span> { observer } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mobx-react'</span>;\n\n<span class=\"hljs-comment\">/** Material UI */</span>\n<span class=\"hljs-keyword\">import</span> TextField <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'material-ui/TextField'</span>;\n\n<span class=\"hljs-comment\">/** FieldState */</span>\n<span class=\"hljs-keyword\">import</span> { FieldState } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../../index'</span>;\n\n<span class=\"hljs-comment\">/**\n * Field Props\n */</span>\n<span class=\"hljs-keyword\">export</span> type FieldProps = {\n  <span class=\"hljs-comment\">/** Any UI stuff you need */</span>\n  id: string,\n  <span class=\"hljs-attr\">label</span>: string,\n\n  <span class=\"hljs-comment\">/** The fieldState */</span>\n  fieldState: FieldState&lt;string&gt;\n}\n\n<span class=\"hljs-comment\">/**\n * Field component. Must be an observer.\n */</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> Field = observer(<span class=\"hljs-function\">(<span class=\"hljs-params\">props: FieldProps</span>) =&gt;</span> (\n  <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">TextField</span>\n    <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">{props.id}</span>\n    <span class=\"hljs-attr\">floatingLabelText</span>=<span class=\"hljs-string\">{props.label}</span>\n    <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">{props.fieldState.value}</span>\n    <span class=\"hljs-attr\">onChange</span>=<span class=\"hljs-string\">{function()</span> { <span class=\"hljs-attr\">props.fieldState.onChange</span>(<span class=\"hljs-attr\">arguments</span>[<span class=\"hljs-attr\">1</span>]) }}\n    <span class=\"hljs-attr\">errorText</span>=<span class=\"hljs-string\">{props.fieldState.error}</span>\n  /&gt;</span>\n));</span></div></code></pre></div>","collapsed":false},{"type":"html","html":"<div class=eze-markdown><p>Once that is done you now get to use your new shiny <code>Field</code> with complete safety.</p></div>"},{"type":"app","index":1,"htmlFileName":"app-1.html","sources":[{"mode":"js","code":"/** React + MUI + mobx*/\nimport * as React from 'react';\nimport { render } from './mui';\nimport { observer } from 'mobx-react';\n\n/** Field */\nimport { Field } from './field';\n\n/** FieldState */\nimport { FieldState } from '../../index';\nconst fieldState = new FieldState({\n  value: '',\n  validators:[(val) => !val.trim() && 'Value required']\n});\n\nrender(() => <div>\n  <Field\n    id=\"first\"\n    label=\"Provide me some value\"\n    fieldState={fieldState} />\n  {!!fieldState.value.trim() && <p>Current Field Value = {fieldState.value}</p>}\n  {fieldState.hasError && <p>Current Field Error = {fieldState.error}</p>}\n</div>);\n"}],"height":"200px"},{"type":"html","html":"<div class=eze-markdown><p>You can call <code>validate</code> at any time to validate the field and it flows automatically.</p></div>"},{"type":"app","index":2,"htmlFileName":"app-2.html","sources":[{"mode":"js","code":"/** React + MUI + mobx*/\nimport * as React from 'react';\nimport { render, Button } from './mui';\nimport { observer } from 'mobx-react';\n\n/** Field */\nimport { Field } from './field';\n\n/** FieldState */\nimport { FieldState } from '../../index';\nconst fieldState = new FieldState({\n  value: '',\n  validators: [(val) => !val.trim() && 'Value required']\n});\n\nrender(() => <div>\n  <Field\n    id=\"first\"\n    label=\"Provide me some value\"\n    fieldState={fieldState} />\n  <br />\n  <Button\n    onClick={() => fieldState.validate()}>\n    Click me to validate\n  </Button>\n</div>);\n"}],"height":"200px"},{"type":"html","html":"<div class=eze-markdown><p>And the best place to call it is inside an html <code>form</code> element. The following example demostrates this.</p>\n<blockquote>\n<p>Note that we also disable automatic validation when we create the <code>FieldState</code> below to force you to press enter :)</p>\n</blockquote></div>"},{"type":"app","index":3,"htmlFileName":"app-3.html","sources":[{"mode":"js","code":"/** React + MUI + mobx*/\nimport * as React from 'react';\nimport { render, Button } from './mui';\nimport { observer } from 'mobx-react';\n\n/** Field */\nimport { Field } from './field';\n\n/** FieldState */\nimport { FieldState } from '../../index';\nconst fieldState = new FieldState({\n  value: '',\n  autoValidationEnabled: false,\n  validators: [(val) => val !== 'foo' && \"I only allow 'foo'\"]\n});\n\nrender(() => <form onSubmit={async (e) => {\n  e.preventDefault();\n  const res = await fieldState.validate();\n  if (res.hasError) return;\n  console.log('Validated Value:', fieldState.$);\n}}>\n  <Field\n    id=\"first\"\n    label=\"foo is the value you are looking for\"\n    fieldState={fieldState} />\n  <br />\n  <Button\n    type=\"submit\">\n    Click me to validate, or press enter in the input field\n  </Button>\n</form>);\n"}],"height":"200px"}],"tableOfContents":[{"level":1,"text":"Creating a Field","id":"creating-a-field","subItems":[]}]}