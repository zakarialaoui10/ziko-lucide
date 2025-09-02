import {tags} from 'ziko';
const {svg} = tags;
const Forward = (props) => 
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
    tags.path({"d":"m15 17 5-5-5-5"}),
	tags.path({"d":"M4 18v-2a4 4 0 0 1 4-4h12"})
    )
export default Forward;
