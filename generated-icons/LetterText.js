import {tags} from 'ziko';
const {svg} = tags;
const LetterText = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M15 12h6"}),
	tags.path({"d":"M15 6h6"}),
	tags.path({"d":"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}),
	tags.path({"d":"M3 18h18"}),
	tags.path({"d":"M3.92 11h6.16"})
    )
export default LetterText;
