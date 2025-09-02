import {tags} from 'ziko';
const {svg} = tags;
const NonBinary = (props) => 
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
    tags.path({"d":"M12 2v10"}),
	tags.path({"d":"m8.5 4 7 4"}),
	tags.path({"d":"m8.5 8 7-4"}),
	tags.circle({"cx":"12","cy":"17","r":"5"})
    )
export default NonBinary;
