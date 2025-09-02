import {tags} from 'ziko';
const {svg} = tags;
const MonitorStop = (props) => 
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
    tags.path({"d":"M12 17v4"}),
	tags.path({"d":"M8 21h8"}),
	tags.rect({"x":"2","y":"3","width":"20","height":"14","rx":"2"}),
	tags.rect({"x":"9","y":"7","width":"6","height":"6","rx":"1"})
    )
export default MonitorStop;
