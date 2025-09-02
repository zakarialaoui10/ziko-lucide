import {tags} from 'ziko';
const {svg} = tags;
const FlipHorizontal2 = (props) => 
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
    tags.path({"d":"m3 7 5 5-5 5V7"}),
	tags.path({"d":"m21 7-5 5 5 5V7"}),
	tags.path({"d":"M12 20v2"}),
	tags.path({"d":"M12 14v2"}),
	tags.path({"d":"M12 8v2"}),
	tags.path({"d":"M12 2v2"})
    )
export default FlipHorizontal2;
