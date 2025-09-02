import {tags} from 'ziko';
const {svg} = tags;
const TableColumnsSplit = (props) => 
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
    tags.path({"d":"M14 14v2"}),
	tags.path({"d":"M14 20v2"}),
	tags.path({"d":"M14 2v2"}),
	tags.path({"d":"M14 8v2"}),
	tags.path({"d":"M2 15h8"}),
	tags.path({"d":"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}),
	tags.path({"d":"M2 9h8"}),
	tags.path({"d":"M22 15h-4"}),
	tags.path({"d":"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}),
	tags.path({"d":"M22 9h-4"}),
	tags.path({"d":"M5 3v18"})
    )
export default TableColumnsSplit;
