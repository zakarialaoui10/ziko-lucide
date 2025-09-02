import {tags} from 'ziko';
const {svg} = tags;
const GlobeLock = (props) => 
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
    tags.path({"d":"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}),
	tags.path({"d":"M2 12h8.5"}),
	tags.path({"d":"M20 6V4a2 2 0 1 0-4 0v2"}),
	tags.rect({"width":"8","height":"5","x":"14","y":"6","rx":"1"})
    )
export default GlobeLock;
