import {tags} from 'ziko';
const {svg} = tags;
const SeparatorVertical = (props) => 
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
    tags.path({"d":"M12 3v18"}),
	tags.path({"d":"m16 16 4-4-4-4"}),
	tags.path({"d":"m8 8-4 4 4 4"})
    )
export default SeparatorVertical;
