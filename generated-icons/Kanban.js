import {tags} from 'ziko';
const {svg} = tags;
const Kanban = (props) => 
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
    tags.path({"d":"M6 5v11"}),
	tags.path({"d":"M12 5v6"}),
	tags.path({"d":"M18 5v14"})
    )
export default Kanban;
