import {tags} from 'ziko';
const {svg} = tags;
const MonitorPlay = (props) => 
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
    tags.path({"d":"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"}),
	tags.path({"d":"M12 17v4"}),
	tags.path({"d":"M8 21h8"}),
	tags.rect({"x":"2","y":"3","width":"20","height":"14","rx":"2"})
    )
export default MonitorPlay;
