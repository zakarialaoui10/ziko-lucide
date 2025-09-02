import {tags} from 'ziko';
const {svg} = tags;
const Navigation2 = (props) => 
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
    tags.polygon({"points":"12 2 19 21 12 17 5 21 12 2"})
    )
export default Navigation2;
