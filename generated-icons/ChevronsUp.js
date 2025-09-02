import {tags} from 'ziko';
const {svg} = tags;
const ChevronsUp = (props) => 
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
    tags.path({"d":"m17 11-5-5-5 5"}),
	tags.path({"d":"m17 18-5-5-5 5"})
    )
export default ChevronsUp;
