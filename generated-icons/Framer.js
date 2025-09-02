import {tags} from 'ziko';
const {svg} = tags;
const Framer = (props) => 
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
    tags.path({"d":"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"})
    )
export default Framer;
