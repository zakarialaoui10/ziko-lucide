import {tags} from 'ziko';
const {svg} = tags;
const CornerDownLeft = (props) => 
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
    tags.path({"d":"M20 4v7a4 4 0 0 1-4 4H4"}),
	tags.path({"d":"m9 10-5 5 5 5"})
    )
export default CornerDownLeft;
