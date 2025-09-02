import {tags} from 'ziko';
const {svg} = tags;
const Orbit = (props) => 
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
    tags.path({"d":"M20.341 6.484A10 10 0 0 1 10.266 21.85"}),
	tags.path({"d":"M3.659 17.516A10 10 0 0 1 13.74 2.152"}),
	tags.circle({"cx":"12","cy":"12","r":"3"}),
	tags.circle({"cx":"19","cy":"5","r":"2"}),
	tags.circle({"cx":"5","cy":"19","r":"2"})
    )
export default Orbit;
