import {tags} from 'ziko';
const {svg} = tags;
const Tv = (props) => 
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
    tags.path({"d":"m17 2-5 5-5-5"}),
	tags.rect({"width":"20","height":"15","x":"2","y":"7","rx":"2"})
    )
export default Tv;
