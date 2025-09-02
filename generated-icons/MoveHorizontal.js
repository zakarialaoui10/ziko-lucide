import {tags} from 'ziko';
const {svg} = tags;
const MoveHorizontal = (props) => 
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
    tags.path({"d":"m18 8 4 4-4 4"}),
	tags.path({"d":"M2 12h20"}),
	tags.path({"d":"m6 8-4 4 4 4"})
    )
export default MoveHorizontal;
