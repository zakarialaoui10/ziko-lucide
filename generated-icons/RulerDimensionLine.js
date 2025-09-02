import {tags} from 'ziko';
const {svg} = tags;
const RulerDimensionLine = (props) => 
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
    tags.path({"d":"M12 15v-3.014"}),
	tags.path({"d":"M16 15v-3.014"}),
	tags.path({"d":"M20 6H4"}),
	tags.path({"d":"M20 8V4"}),
	tags.path({"d":"M4 8V4"}),
	tags.path({"d":"M8 15v-3.014"}),
	tags.rect({"x":"3","y":"12","width":"18","height":"7","rx":"1"})
    )
export default RulerDimensionLine;
