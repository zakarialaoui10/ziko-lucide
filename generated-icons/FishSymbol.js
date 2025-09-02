import {tags} from 'ziko';
const {svg} = tags;
const FishSymbol = (props) => 
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
    tags.path({"d":"M2 16s9-15 20-4C11 23 2 8 2 8"})
    )
export default FishSymbol;
