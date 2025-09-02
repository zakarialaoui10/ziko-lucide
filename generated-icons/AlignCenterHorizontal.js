import {tags} from 'ziko';
const {svg} = tags;
const AlignCenterHorizontal = (props) => 
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
    tags.path({"d":"M2 12h20"}),
	tags.path({"d":"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}),
	tags.path({"d":"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}),
	tags.path({"d":"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}),
	tags.path({"d":"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"})
    )
export default AlignCenterHorizontal;
