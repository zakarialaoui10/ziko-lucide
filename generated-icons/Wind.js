import {tags} from 'ziko';
const {svg} = tags;
const Wind = (props) => 
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
    tags.path({"d":"M12.8 19.6A2 2 0 1 0 14 16H2"}),
	tags.path({"d":"M17.5 8a2.5 2.5 0 1 1 2 4H2"}),
	tags.path({"d":"M9.8 4.4A2 2 0 1 1 11 8H2"})
    )
export default Wind;
