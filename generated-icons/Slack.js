import {tags} from 'ziko';
const {svg} = tags;
const Slack = (props) => 
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
    tags.rect({"width":"3","height":"8","x":"13","y":"2","rx":"1.5"}),
	tags.path({"d":"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}),
	tags.rect({"width":"3","height":"8","x":"8","y":"14","rx":"1.5"}),
	tags.path({"d":"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}),
	tags.rect({"width":"8","height":"3","x":"14","y":"13","rx":"1.5"}),
	tags.path({"d":"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}),
	tags.rect({"width":"8","height":"3","x":"2","y":"8","rx":"1.5"}),
	tags.path({"d":"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"})
    )
export default Slack;
