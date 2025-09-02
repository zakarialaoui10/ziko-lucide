import {tags} from 'ziko';
const {svg} = tags;
const BedSingle = (props) => 
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
    tags.path({"d":"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}),
	tags.path({"d":"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}),
	tags.path({"d":"M3 18h18"})
    )
export default BedSingle;
