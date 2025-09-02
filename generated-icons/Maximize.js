import {tags} from 'ziko';
const {svg} = tags;
const Maximize = (props) => 
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
    tags.path({"d":"M8 3H5a2 2 0 0 0-2 2v3"}),
	tags.path({"d":"M21 8V5a2 2 0 0 0-2-2h-3"}),
	tags.path({"d":"M3 16v3a2 2 0 0 0 2 2h3"}),
	tags.path({"d":"M16 21h3a2 2 0 0 0 2-2v-3"})
    )
export default Maximize;
