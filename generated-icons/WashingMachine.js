import {tags} from 'ziko';
const {svg} = tags;
const WashingMachine = (props) => 
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
    tags.path({"d":"M3 6h3"}),
	tags.path({"d":"M17 6h.01"}),
	tags.rect({"width":"18","height":"20","x":"3","y":"2","rx":"2"}),
	tags.circle({"cx":"12","cy":"13","r":"5"}),
	tags.path({"d":"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"})
    )
export default WashingMachine;
