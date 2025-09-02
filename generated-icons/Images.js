import {tags} from 'ziko';
const {svg} = tags;
const Images = (props) => 
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
    tags.path({"d":"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"}),
	tags.path({"d":"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"}),
	tags.circle({"cx":"13","cy":"7","r":"1","fill":"currentColor"}),
	tags.rect({"x":"8","y":"2","width":"14","height":"14","rx":"2"})
    )
export default Images;
