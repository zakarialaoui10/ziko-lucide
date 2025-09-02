import {tags} from 'ziko';
const {svg} = tags;
const Logs = (props) => 
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
    tags.path({"d":"M13 12h8"}),
	tags.path({"d":"M13 18h8"}),
	tags.path({"d":"M13 6h8"}),
	tags.path({"d":"M3 12h1"}),
	tags.path({"d":"M3 18h1"}),
	tags.path({"d":"M3 6h1"}),
	tags.path({"d":"M8 12h1"}),
	tags.path({"d":"M8 18h1"}),
	tags.path({"d":"M8 6h1"})
    )
export default Logs;
