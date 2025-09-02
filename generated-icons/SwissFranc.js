import {tags} from 'ziko';
const {svg} = tags;
const SwissFranc = (props) => 
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
    tags.path({"d":"M10 21V3h8"}),
	tags.path({"d":"M6 16h9"}),
	tags.path({"d":"M10 9.5h7"})
    )
export default SwissFranc;
