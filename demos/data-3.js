var data = {"type":"app","index":3,"htmlFileName":"app-3.html","sources":[{"mode":"js","code":"/** React + MUI + mobx*/\nimport * as React from 'react';\nimport { render, Button } from './mui';\nimport { observer } from 'mobx-react';\n\n/** Field */\nimport { Field } from './field';\n\n/** FieldState */\nimport { FieldState } from '../../index';\nconst fieldState = new FieldState({\n  value: '',\n  validators: [(val) => val !== 'foo' && \"I only allow 'foo'\"]\n});\n\nrender(() => <form onSubmit={async (e) => {\n  e.preventDefault();\n  const res = await fieldState.validate();\n  if (res.hasError) return;\n  console.log('Validated Value:', fieldState.$);\n}}>\n  <Field\n    id=\"first\"\n    label=\"foo is the value you are looking for\"\n    fieldState={fieldState} />\n  <br />\n  <Button\n    type=\"submit\">\n    Click me to validate, or press enter in the input field\n  </Button>\n</form>);\n"}],"height":"200px"}