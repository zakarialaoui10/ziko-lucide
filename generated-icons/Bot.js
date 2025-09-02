import {tags} from 'ziko';
const {svg} = tags;
const Bot = (props) => 
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
    tags.path({"d":"M12 8V4H8"}),
	tags.rect({"width":"16","height":"12","x":"4","y":"8","rx":"2"}),
	tags.path({"d":"M2 14h2"}),
	tags.path({"d":"M20 14h2"}),
	tags.path({"d":"M15 13v2"}),
	tags.path({"d":"M9 13v2"})
    )
export default Bot;
