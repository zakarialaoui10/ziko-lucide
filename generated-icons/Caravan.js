import {tags} from 'ziko';
const {svg} = tags;
const Caravan = (props) => 
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
    tags.path({"d":"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}),
	tags.path({"d":"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}),
	tags.path({"d":"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}),
	tags.circle({"cx":"8","cy":"19","r":"2"})
    )
export default Caravan;
