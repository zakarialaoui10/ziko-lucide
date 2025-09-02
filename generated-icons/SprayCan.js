import {tags} from 'ziko';
const {svg} = tags;
const SprayCan = (props) => 
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
    tags.path({"d":"M3 3h.01"}),
	tags.path({"d":"M7 5h.01"}),
	tags.path({"d":"M11 7h.01"}),
	tags.path({"d":"M3 7h.01"}),
	tags.path({"d":"M7 9h.01"}),
	tags.path({"d":"M3 11h.01"}),
	tags.rect({"width":"4","height":"4","x":"15","y":"5"}),
	tags.path({"d":"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}),
	tags.path({"d":"m13 14 8-2"}),
	tags.path({"d":"m13 19 8-2"})
    )
export default SprayCan;
