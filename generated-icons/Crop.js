import {tags} from 'ziko';
const {svg} = tags;
const Crop = (props) => 
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
    tags.path({"d":"M6 2v14a2 2 0 0 0 2 2h14"}),
	tags.path({"d":"M18 22V8a2 2 0 0 0-2-2H2"})
    )
export default Crop;
