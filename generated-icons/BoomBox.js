import {tags} from 'ziko';
const {svg} = tags;
const BoomBox = (props) => 
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
    tags.path({"d":"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}),
	tags.path({"d":"M8 8v1"}),
	tags.path({"d":"M12 8v1"}),
	tags.path({"d":"M16 8v1"}),
	tags.rect({"width":"20","height":"12","x":"2","y":"9","rx":"2"}),
	tags.circle({"cx":"8","cy":"15","r":"2"}),
	tags.circle({"cx":"16","cy":"15","r":"2"})
    )
export default BoomBox;
