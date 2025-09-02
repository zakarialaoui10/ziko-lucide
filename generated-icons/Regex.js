import {tags} from 'ziko';
const {svg} = tags;
const Regex = (props) => 
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
    tags.path({"d":"M17 3v10"}),
	tags.path({"d":"m12.67 5.5 8.66 5"}),
	tags.path({"d":"m12.67 10.5 8.66-5"}),
	tags.path({"d":"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"})
    )
export default Regex;
