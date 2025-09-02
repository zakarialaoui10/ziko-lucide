import {tags} from 'ziko';
const {svg} = tags;
const MonitorSpeaker = (props) => 
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
    tags.path({"d":"M5.5 20H8"}),
	tags.path({"d":"M17 9h.01"}),
	tags.rect({"width":"10","height":"16","x":"12","y":"4","rx":"2"}),
	tags.path({"d":"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}),
	tags.circle({"cx":"17","cy":"15","r":"1"})
    )
export default MonitorSpeaker;
