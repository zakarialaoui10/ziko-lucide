import {tags} from 'ziko';
const {svg} = tags;
const TableCellsMerge = (props) => 
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
    tags.path({"d":"M12 21v-6"}),
	tags.path({"d":"M12 9V3"}),
	tags.path({"d":"M3 15h18"}),
	tags.path({"d":"M3 9h18"}),
	tags.rect({"width":"18","height":"18","x":"3","y":"3","rx":"2"})
    )
export default TableCellsMerge;
