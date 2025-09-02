import {tags} from 'ziko';
const {svg} = tags;
const Type = (props) => 
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
    tags.path({"d":"M12 4v16"}),
	tags.path({"d":"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}),
	tags.path({"d":"M9 20h6"})
    )
export default Type;
