import {tags} from 'ziko';
const {svg} = tags;
const GalleryThumbnails = (props) => 
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
    tags.rect({"width":"18","height":"14","x":"3","y":"3","rx":"2"}),
	tags.path({"d":"M4 21h1"}),
	tags.path({"d":"M9 21h1"}),
	tags.path({"d":"M14 21h1"}),
	tags.path({"d":"M19 21h1"})
    )
export default GalleryThumbnails;
