import {tags} from 'ziko';
const {svg} = tags;
const Code2 = (props) => 
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
    tags.path({"d":"m18 16 4-4-4-4"}),
	tags.path({"d":"m6 8-4 4 4 4"}),
	tags.path({"d":"m14.5 4-5 16"})
    )
export default Code2;
