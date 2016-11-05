#R-Editable
[x-editable]()-like component for React. 

When clicked, a `span` element can turn into two editable fields.

##Input
When clicked the field will be rendered as an `input` element, when unfocused or `Enter` pressed, the value will be keps in the component and passed to the `onChange` function.

```js
const alertMsg = (msg)=> alert(msg)
<REditable value='Change me' onChange={alertMsg.bind(null,'You changed me!')}/>
```

##Dropdown
When clicked the field will be rendered as a `select` element together with its received `options` props. When unfocused or `Enter` pressed, the value will be keps in the component and passed to the `onChange` function.

```js
const myOpt = [
  {name:'Apple',value:'apple'},
  {name:'Pear',value:'pear'},
  {name:'Grape',value:'grape'},
  {name:'Banana',value:'banana'},
  {name:'Orange',value:'orange'}
]
<REditable type='dropdown' onChange={alertMsg.bind(null,'You changed dropdown')} options={myOpt} />
```


*Note*: no styling is provided by default, hence some basic CSS is suggested:

```css
span.r-editable{
  font-size: 1em;
  width: auto;
  border-bottom: 2px dashed red;
}
input.r-editable{
  background: #C5F0DA;
  font-size: 1em;
  border: none;
  outline: none;
  width: auto;
  padding:0;
  margin:0;
}
select.r-editable{
  font-size: 1em;
  background: white;
}
div[id^='re-'] div.examples{
  margin-left: 2em;
}
```

###License
ISC
