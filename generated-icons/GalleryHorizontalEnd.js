import {tags} from 'ziko';
const {svg} = tags;
const GalleryHorizontalEnd = (props) => 
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
    tags.path({"d":"M2 7v10"}),
	tags.path({"d":"M6 5v14"}),
	tags.rect({"width":"12","height":"18","x":"10","y":"3","rx":"2"})
    )
export default GalleryHorizontalEnd;
