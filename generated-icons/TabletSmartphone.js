import {tags} from 'ziko';
const {svg} = tags;
const TabletSmartphone = (props) => 
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
    tags.rect({"width":"10","height":"14","x":"3","y":"8","rx":"2"}),
	tags.path({"d":"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}),
	tags.path({"d":"M8 18h.01"})
    )
export default TabletSmartphone;
