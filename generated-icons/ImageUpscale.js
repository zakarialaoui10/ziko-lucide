import {tags} from 'ziko';
const {svg} = tags;
const ImageUpscale = (props) => 
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
    tags.path({"d":"M16 3h5v5"}),
	tags.path({"d":"M17 21h2a2 2 0 0 0 2-2"}),
	tags.path({"d":"M21 12v3"}),
	tags.path({"d":"m21 3-5 5"}),
	tags.path({"d":"M3 7V5a2 2 0 0 1 2-2"}),
	tags.path({"d":"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}),
	tags.path({"d":"M9 3h3"}),
	tags.rect({"x":"3","y":"11","width":"10","height":"10","rx":"1"})
    )
export default ImageUpscale;
