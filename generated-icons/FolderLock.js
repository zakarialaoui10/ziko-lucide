import {tags} from 'ziko';
const {svg} = tags;
const FolderLock = (props) => 
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
    tags.rect({"width":"8","height":"5","x":"14","y":"17","rx":"1"}),
	tags.path({"d":"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}),
	tags.path({"d":"M20 17v-2a2 2 0 1 0-4 0v2"})
    )
export default FolderLock;
