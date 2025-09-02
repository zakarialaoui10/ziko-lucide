import {tags} from 'ziko';
const {svg} = tags;
const Shrink = (props) => 
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
    tags.path({"d":"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}),
	tags.path({"d":"M9 19.8V15m0 0H4.2M9 15l-6 6"}),
	tags.path({"d":"M15 4.2V9m0 0h4.8M15 9l6-6"}),
	tags.path({"d":"M9 4.2V9m0 0H4.2M9 9 3 3"})
    )
export default Shrink;
