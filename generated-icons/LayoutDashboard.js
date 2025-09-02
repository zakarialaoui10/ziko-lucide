import {tags} from 'ziko';
const {svg} = tags;
const LayoutDashboard = (props) => 
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
    tags.rect({"width":"7","height":"9","x":"3","y":"3","rx":"1"}),
	tags.rect({"width":"7","height":"5","x":"14","y":"3","rx":"1"}),
	tags.rect({"width":"7","height":"9","x":"14","y":"12","rx":"1"}),
	tags.rect({"width":"7","height":"5","x":"3","y":"16","rx":"1"})
    )
export default LayoutDashboard;
