import {tags} from 'ziko';
const {svg} = tags;
const CaseSensitive = (props) => 
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
    tags.path({"d":"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"}),
	tags.path({"d":"M22 9v7"}),
	tags.path({"d":"M3.304 13h6.392"}),
	tags.circle({"cx":"18.5","cy":"12.5","r":"3.5"})
    )
export default CaseSensitive;
