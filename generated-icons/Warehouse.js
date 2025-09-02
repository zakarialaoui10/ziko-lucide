import {tags} from 'ziko';
const {svg} = tags;
const Warehouse = (props) => 
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
    tags.path({"d":"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}),
	tags.path({"d":"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"}),
	tags.path({"d":"M6 13h12"}),
	tags.path({"d":"M6 17h12"})
    )
export default Warehouse;
