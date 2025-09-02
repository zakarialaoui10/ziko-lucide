import {tags} from 'ziko';
const {svg} = tags;
const BusFront = (props) => 
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
    tags.path({"d":"M4 6 2 7"}),
	tags.path({"d":"M10 6h4"}),
	tags.path({"d":"m22 7-2-1"}),
	tags.rect({"width":"16","height":"16","x":"4","y":"3","rx":"2"}),
	tags.path({"d":"M4 11h16"}),
	tags.path({"d":"M8 15h.01"}),
	tags.path({"d":"M16 15h.01"}),
	tags.path({"d":"M6 19v2"}),
	tags.path({"d":"M18 21v-2"})
    )
export default BusFront;
