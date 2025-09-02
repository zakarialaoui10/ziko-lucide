import {tags} from 'ziko';
const {svg} = tags;
const ArchiveX = (props) => 
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
    tags.rect({"width":"20","height":"5","x":"2","y":"3","rx":"1"}),
	tags.path({"d":"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}),
	tags.path({"d":"m9.5 17 5-5"}),
	tags.path({"d":"m9.5 12 5 5"})
    )
export default ArchiveX;
