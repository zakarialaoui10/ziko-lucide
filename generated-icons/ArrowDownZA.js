import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownZa = (props) => 
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
    tags.path({"d":"m3 16 4 4 4-4"}),
	tags.path({"d":"M7 4v16"}),
	tags.path({"d":"M15 4h5l-5 6h5"}),
	tags.path({"d":"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}),
	tags.path({"d":"M20 18h-5"})
    )
export default ArrowDownZa;
