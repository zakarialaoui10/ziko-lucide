import {tags} from 'ziko';
const {svg} = tags;
const JapaneseYen = (props) => 
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
    tags.path({"d":"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}),
	tags.path({"d":"M6 15h12"}),
	tags.path({"d":"M6 11h12"})
    )
export default JapaneseYen;
