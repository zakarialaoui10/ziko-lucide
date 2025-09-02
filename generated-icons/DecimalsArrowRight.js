import {tags} from 'ziko';
const {svg} = tags;
const DecimalsArrowRight = (props) => 
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
    tags.path({"d":"M10 18h10"}),
	tags.path({"d":"m17 21 3-3-3-3"}),
	tags.path({"d":"M3 11h.01"}),
	tags.rect({"x":"15","y":"3","width":"5","height":"8","rx":"2.5"}),
	tags.rect({"x":"6","y":"3","width":"5","height":"8","rx":"2.5"})
    )
export default DecimalsArrowRight;
