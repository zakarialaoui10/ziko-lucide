import {tags} from 'ziko';
const {svg} = tags;
const Navigation = (props) => 
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
    tags.polygon({"points":"3 11 22 2 13 21 11 13 3 11"})
    )
export default Navigation;
