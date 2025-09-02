import {tags} from 'ziko';
const {svg} = tags;
const Library = (props) => 
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
    tags.path({"d":"m16 6 4 14"}),
	tags.path({"d":"M12 6v14"}),
	tags.path({"d":"M8 8v12"}),
	tags.path({"d":"M4 4v16"})
    )
export default Library;
