import {tags} from 'ziko';
const {svg} = tags;
const IdCard = (props) => 
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
    tags.path({"d":"M16 10h2"}),
	tags.path({"d":"M16 14h2"}),
	tags.path({"d":"M6.17 15a3 3 0 0 1 5.66 0"}),
	tags.circle({"cx":"9","cy":"11","r":"2"}),
	tags.rect({"x":"2","y":"5","width":"20","height":"14","rx":"2"})
    )
export default IdCard;
