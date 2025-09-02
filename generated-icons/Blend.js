import {tags} from 'ziko';
const {svg} = tags;
const Blend = (props) => 
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
    tags.circle({"cx":"9","cy":"9","r":"7"}),
	tags.circle({"cx":"15","cy":"15","r":"7"})
    )
export default Blend;
