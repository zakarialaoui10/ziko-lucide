import {tags} from 'ziko';
const {svg} = tags;
const GalleryVertical = (props) => 
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
    tags.path({"d":"M3 2h18"}),
	tags.rect({"width":"18","height":"12","x":"3","y":"6","rx":"2"}),
	tags.path({"d":"M3 22h18"})
    )
export default GalleryVertical;
