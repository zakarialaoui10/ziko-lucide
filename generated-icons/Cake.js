import {tags} from 'ziko';
const {svg} = tags;
const Cake = (props) => 
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
    tags.path({"d":"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}),
	tags.path({"d":"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}),
	tags.path({"d":"M2 21h20"}),
	tags.path({"d":"M7 8v3"}),
	tags.path({"d":"M12 8v3"}),
	tags.path({"d":"M17 8v3"}),
	tags.path({"d":"M7 4h.01"}),
	tags.path({"d":"M12 4h.01"}),
	tags.path({"d":"M17 4h.01"})
    )
export default Cake;
