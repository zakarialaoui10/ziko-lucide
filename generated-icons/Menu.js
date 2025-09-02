import {tags} from 'ziko';
const {svg} = tags;
const Menu = (props) => 
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
    tags.path({"d":"M4 12h16"}),
	tags.path({"d":"M4 18h16"}),
	tags.path({"d":"M4 6h16"})
    )
export default Menu;
