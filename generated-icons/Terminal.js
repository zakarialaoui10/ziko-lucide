import {tags} from 'ziko';
const {svg} = tags;
const Terminal = (props) => 
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
    tags.path({"d":"M12 19h8"}),
	tags.path({"d":"m4 17 6-6-6-6"})
    )
export default Terminal;
