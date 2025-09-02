import {tags} from 'ziko';
const {svg} = tags;
const PaintbrushVertical = (props) => 
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
    tags.path({"d":"M10 2v2"}),
	tags.path({"d":"M14 2v4"}),
	tags.path({"d":"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}),
	tags.path({"d":"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"})
    )
export default PaintbrushVertical;
