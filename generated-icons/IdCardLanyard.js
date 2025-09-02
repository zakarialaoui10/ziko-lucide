import {tags} from 'ziko';
const {svg} = tags;
const IdCardLanyard = (props) => 
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
    tags.path({"d":"M13.5 8h-3"}),
	tags.path({"d":"m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"}),
	tags.path({"d":"M16.899 22A5 5 0 0 0 7.1 22"}),
	tags.path({"d":"m9 2 3 6"}),
	tags.circle({"cx":"12","cy":"15","r":"3"})
    )
export default IdCardLanyard;
