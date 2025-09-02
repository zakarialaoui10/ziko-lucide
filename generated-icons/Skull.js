import {tags} from 'ziko';
const {svg} = tags;
const Skull = (props) => 
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
    tags.path({"d":"m12.5 17-.5-1-.5 1h1z"}),
	tags.path({"d":"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}),
	tags.circle({"cx":"15","cy":"12","r":"1"}),
	tags.circle({"cx":"9","cy":"12","r":"1"})
    )
export default Skull;
