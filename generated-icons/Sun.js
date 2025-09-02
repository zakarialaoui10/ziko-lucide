import {tags} from 'ziko';
const {svg} = tags;
const Sun = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"4"}),
	tags.path({"d":"M12 2v2"}),
	tags.path({"d":"M12 20v2"}),
	tags.path({"d":"m4.93 4.93 1.41 1.41"}),
	tags.path({"d":"m17.66 17.66 1.41 1.41"}),
	tags.path({"d":"M2 12h2"}),
	tags.path({"d":"M20 12h2"}),
	tags.path({"d":"m6.34 17.66-1.41 1.41"}),
	tags.path({"d":"m19.07 4.93-1.41 1.41"})
    )
export default Sun;
