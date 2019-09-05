var data = {"type":"app","index":8,"htmlFileName":"app-8.html","sources":[{"mode":"js","code":"/** React + MUI + mobx*/\nimport * as React from 'react';\nimport { render, Button, ErrorText, labelClass, inputClass } from './mui';\nimport { observer } from 'mobx-react';\nimport { style } from 'typestyle';\nimport { Vertical } from './gls';\n\n/** FieldState */\nimport { FieldState } from '../../index';\n\n\n/** Example number FieldState */\nconst fieldState = new FieldState<number | null>(null)\n  .validators(\n    (val) => val == null && 'Value required',\n    (val) => val != null && val < 2 && 'Value must be greater than 2',\n);\n\n/** Example NumberInputField */\ntype NumberInputFieldProps = {\n  fieldState: FieldState<number | null>,\n  label: string\n};\nconst NumberInputField: React.SFC<NumberInputFieldProps> = observer((props: NumberInputFieldProps) => {\n  return (\n    <label>\n      <span className={labelClass}>{props.label}</span>\n      <input\n        className={inputClass}\n        type=\"number\"\n        /** \n         * Convert the TValue to DisplayValue\n         */\n        value={\n          props.fieldState.value == null\n            ? ''\n            : props.fieldState.value.toString()\n        }\n        /** \n         * Convert DisplayValue to the correct TValue in onChange \n         */\n        onChange={(e) => {\n          const strValue = e.target.value;\n          if (isNaN(+strValue)) {\n            props.fieldState.onChange(null);\n          } else {\n            props.fieldState.onChange(+strValue);\n          }\n        }}\n      />\n    </label>\n  );\n});\n\nrender(() => <Vertical margin={10}>\n  <NumberInputField\n    label=\"Example Number Input\"\n    fieldState={fieldState} />\n  {fieldState.hasError && <ErrorText>Current Field Error = {fieldState.error}</ErrorText>}\n  <Button onClick={() => fieldState.validate()}>Validate</Button>\n</Vertical>);\n"}],"height":"300px","pageSubDirName":"all"}