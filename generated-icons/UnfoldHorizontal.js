import {tags} from 'ziko';
const {svg} = tags;
const UnfoldHorizontal = (props) => 
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
    tags.path({"d":"M16 12h6"}),
	tags.path({"d":"M8 12H2"}),
	tags.path({"d":"M12 2v2"}),
	tags.path({"d":"M12 8v2"}),
	tags.path({"d":"M12 14v2"}),
	tags.path({"d":"M12 20v2"}),
	tags.path({"d":"m19 15 3-3-3-3"}),
	tags.path({"d":"m5 9-3 3 3 3"})
    )
export default UnfoldHorizontal;
