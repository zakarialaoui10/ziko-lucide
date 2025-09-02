import {tags} from 'ziko';
const {svg} = tags;
const TvMinimal = (props) => 
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
    tags.path({"d":"M7 21h10"}),
	tags.rect({"width":"20","height":"14","x":"2","y":"3","rx":"2"})
    )
export default TvMinimal;
