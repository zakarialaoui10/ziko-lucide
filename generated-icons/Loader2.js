import {tags} from 'ziko';
const {svg} = tags;
const Loader2 = (props) => 
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
    tags.path({"d":"M21 12a9 9 0 1 1-6.219-8.56"})
    )
export default Loader2;
