import {tags} from 'ziko';
const {svg} = tags;
const MonitorSmartphone = (props) => 
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
    tags.path({"d":"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}),
	tags.path({"d":"M10 19v-3.96 3.15"}),
	tags.path({"d":"M7 19h5"}),
	tags.rect({"width":"6","height":"10","x":"16","y":"12","rx":"2"})
    )
export default MonitorSmartphone;
