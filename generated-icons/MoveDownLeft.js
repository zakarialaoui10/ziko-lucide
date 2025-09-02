import {tags} from 'ziko';
const {svg} = tags;
const MoveDownLeft = (props) => 
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
    tags.path({"d":"M11 19H5V13"}),
	tags.path({"d":"M19 5L5 19"})
    )
export default MoveDownLeft;
