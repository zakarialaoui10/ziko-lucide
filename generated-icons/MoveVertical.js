import {tags} from 'ziko';
const {svg} = tags;
const MoveVertical = (props) => 
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
    tags.path({"d":"M12 2v20"}),
	tags.path({"d":"m8 18 4 4 4-4"}),
	tags.path({"d":"m8 6 4-4 4 4"})
    )
export default MoveVertical;
