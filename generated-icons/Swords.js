import {tags} from 'ziko';
const {svg} = tags;
const Swords = (props) => 
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
    tags.polyline({"points":"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}),
	tags.line({"x1":"13","x2":"19","y1":"19","y2":"13"}),
	tags.line({"x1":"16","x2":"20","y1":"16","y2":"20"}),
	tags.line({"x1":"19","x2":"21","y1":"21","y2":"19"}),
	tags.polyline({"points":"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}),
	tags.line({"x1":"5","x2":"9","y1":"14","y2":"18"}),
	tags.line({"x1":"7","x2":"4","y1":"17","y2":"20"}),
	tags.line({"x1":"3","x2":"5","y1":"19","y2":"21"})
    )
export default Swords;
