import {tags} from 'ziko';
const {svg} = tags;
const PersonStanding = (props) => 
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
    tags.circle({"cx":"12","cy":"5","r":"1"}),
	tags.path({"d":"m9 20 3-6 3 6"}),
	tags.path({"d":"m6 8 6 2 6-2"}),
	tags.path({"d":"M12 10v4"})
    )
export default PersonStanding;
