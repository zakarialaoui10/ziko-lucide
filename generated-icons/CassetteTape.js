import {tags} from 'ziko';
const {svg} = tags;
const CassetteTape = (props) => 
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
    tags.rect({"width":"20","height":"16","x":"2","y":"4","rx":"2"}),
	tags.circle({"cx":"8","cy":"10","r":"2"}),
	tags.path({"d":"M8 12h8"}),
	tags.circle({"cx":"16","cy":"10","r":"2"}),
	tags.path({"d":"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"})
    )
export default CassetteTape;
