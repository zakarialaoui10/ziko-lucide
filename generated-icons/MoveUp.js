import {tags} from 'ziko';
const {svg} = tags;
const MoveUp = (props) => 
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
    tags.path({"d":"M8 6L12 2L16 6"}),
	tags.path({"d":"M12 2V22"})
    )
export default MoveUp;
