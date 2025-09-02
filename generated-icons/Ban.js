import {tags} from 'ziko';
const {svg} = tags;
const Ban = (props) => 
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
    tags.path({"d":"M4.929 4.929 19.07 19.071"}),
	tags.circle({"cx":"12","cy":"12","r":"10"})
    )
export default Ban;
