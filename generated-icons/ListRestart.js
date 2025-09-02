import {tags} from 'ziko';
const {svg} = tags;
const ListRestart = (props) => 
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
    tags.path({"d":"M21 6H3"}),
	tags.path({"d":"M7 12H3"}),
	tags.path({"d":"M7 18H3"}),
	tags.path({"d":"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}),
	tags.path({"d":"M11 10v4h4"})
    )
export default ListRestart;
