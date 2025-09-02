import {tags} from 'ziko';
const {svg} = tags;
const Settings2 = (props) => 
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
    tags.path({"d":"M14 17H5"}),
	tags.path({"d":"M19 7h-9"}),
	tags.circle({"cx":"17","cy":"17","r":"3"}),
	tags.circle({"cx":"7","cy":"7","r":"3"})
    )
export default Settings2;
