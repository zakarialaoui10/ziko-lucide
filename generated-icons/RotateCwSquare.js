import {tags} from 'ziko';
const {svg} = tags;
const RotateCwSquare = (props) => 
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
    tags.path({"d":"M12 5H6a2 2 0 0 0-2 2v3"}),
	tags.path({"d":"m9 8 3-3-3-3"}),
	tags.path({"d":"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"})
    )
export default RotateCwSquare;
