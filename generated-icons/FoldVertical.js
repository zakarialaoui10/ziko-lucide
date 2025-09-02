import {tags} from 'ziko';
const {svg} = tags;
const FoldVertical = (props) => 
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
    tags.path({"d":"M12 22v-6"}),
	tags.path({"d":"M12 8V2"}),
	tags.path({"d":"M4 12H2"}),
	tags.path({"d":"M10 12H8"}),
	tags.path({"d":"M16 12h-2"}),
	tags.path({"d":"M22 12h-2"}),
	tags.path({"d":"m15 19-3-3-3 3"}),
	tags.path({"d":"m15 5-3 3-3-3"})
    )
export default FoldVertical;
