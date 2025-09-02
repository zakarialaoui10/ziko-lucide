import {tags} from 'ziko';
const {svg} = tags;
const RussianRuble = (props) => 
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
    tags.path({"d":"M6 11h8a4 4 0 0 0 0-8H9v18"}),
	tags.path({"d":"M6 15h8"})
    )
export default RussianRuble;
