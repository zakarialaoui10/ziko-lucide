import {tags} from 'ziko';
const {svg} = tags;
const FlipVertical = (props) => 
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
    tags.path({"d":"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}),
	tags.path({"d":"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}),
	tags.path({"d":"M4 12H2"}),
	tags.path({"d":"M10 12H8"}),
	tags.path({"d":"M16 12h-2"}),
	tags.path({"d":"M22 12h-2"})
    )
export default FlipVertical;
