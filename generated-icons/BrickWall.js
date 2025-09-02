import {tags} from 'ziko';
const {svg} = tags;
const BrickWall = (props) => 
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
    tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"}),
	tags.path({"d":"M12 9v6"}),
	tags.path({"d":"M16 15v6"}),
	tags.path({"d":"M16 3v6"}),
	tags.path({"d":"M3 15h18"}),
	tags.path({"d":"M3 9h18"}),
	tags.path({"d":"M8 15v6"}),
	tags.path({"d":"M8 3v6"})
    )
export default BrickWall;
