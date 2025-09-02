import {tags} from 'ziko';
const {svg} = tags;
const MonitorX = (props) => 
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
    tags.path({"d":"m14.5 12.5-5-5"}),
	tags.path({"d":"m9.5 12.5 5-5"}),
	tags.rect({"width":"20","height":"14","x":"2","y":"3","rx":"2"}),
	tags.path({"d":"M12 17v4"}),
	tags.path({"d":"M8 21h8"})
    )
export default MonitorX;
