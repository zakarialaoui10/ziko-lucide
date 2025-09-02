import {tags} from 'ziko';
const {svg} = tags;
const Workflow = (props) => 
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
    tags.rect({"width":"8","height":"8","x":"3","y":"3","rx":"2"}),
	tags.path({"d":"M7 11v4a2 2 0 0 0 2 2h4"}),
	tags.rect({"width":"8","height":"8","x":"13","y":"13","rx":"2"})
    )
export default Workflow;
