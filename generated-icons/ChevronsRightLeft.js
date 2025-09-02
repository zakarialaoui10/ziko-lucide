import {tags} from 'ziko';
const {svg} = tags;
const ChevronsRightLeft = (props) => 
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
    tags.path({"d":"m20 17-5-5 5-5"}),
	tags.path({"d":"m4 17 5-5-5-5"})
    )
export default ChevronsRightLeft;
